<?php

namespace App\Http\Controllers;

use App\Exports\ResearcherExport;
use App\Http\Requests\dashboard\actor\researcher\CreateResearcherAdminRequest;
use App\Http\Requests\dashboard\actor\researcher\CreateResearcherRequest;
use App\Http\Requests\dashboard\actor\researcher\UpdateResearcherRequest;

use App\Models\Researcher;
use App\Http\Requests\ResearcherRequest;
use App\Http\Requests\ResearcherupdateRequest;
use App\Models\User;
use Hekmatinasser\Verta\Verta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use PDF;
use Excel;

class ResearcherController extends Controller
{
    public function index()
    {
        $researchers = Researcher::allResearchers()->paginate(10);
        return view('dashboard.actor.researcher.index', ['researchers' => $researchers]);

    }

    public function nNumber(Request $request){
        if (Researcher::where('n_number' , $request->n_number)->exists())
            return false;
        return true ;
    }


    public function create()
    {
        return view('dashboard.actor.researcher.create');
    }

    public function store_admin(CreateResearcherAdminRequest $request)
    {
        $user_input = $request->only(['username', 'email', 'password', 'enabled']);
        $user_input['password'] = Hash::make($request->password);
        $user = User::create($user_input);

        if (Researcher::onlyTrashed()->where('n_number', $request->n_number)->exists()) {
            $assistant_input['user_id'] = $user->id;
            $assistant = Researcher::onlyTrashed()->where('n_number', $request->n_number)->get()[0];
            $assistant->restore();
            $assistant->update($assistant_input);
        } else {
            $researcher_input = $request->except(['username', 'email', 'password', 'enabled']);
            $researcher_input['proficiency'] = $request->proficiency == null ? '' : $request->proficiency ;
            $researcher_input['organization'] = $request->organization == null ? '' : $request->organization ;
            $user->researcher()->create($researcher_input);
        }
        $user->syncRoles('Researcher');
//        $user->givePermissionTo($request->permissions);
        $user->givePermissionTo([
            'read-study',
            'create-study',
            'edit-study',
            'delete-study',

            'read-assistant',
            'create-assistant',
            'delete-assistant',

            'read-researcher',
            'create-researcher',
            'edit-researcher' ,

            'read-survey',
            'create-survey',
            'edit-survey' ,
            'delete-survey' ,

            'read-patient',
            'create-patient',
            'edit-patient',
            'delete-patient',
            ]);
        alert()->success('طراح با موفقیت ثبت شد');
        return redirect()->route('researcher');
    }

    public function store(CreateResearcherRequest $request)
    {
        if (Researcher::onlyTrashed()->where('n_number', $request->n_number)->exists()) {
            $assistant_input['user_id'] = auth()->id();
            $researcher = Researcher::onlyTrashed()->where('n_number', $request->n_number)->get()[0];
            $researcher->restore();
            $researcher->update($assistant_input);
        } else {

            $researcher = Researcher::query()->create([

                'range' => $request->range,
                'n_number' => $request->n_number,
                'name' => $request->name,
                'f_name' => $request->f_name,
                'major' => $request->major,
                'proficiency' => $request->proficiency == null ? '' : $request->proficiency,
                'university' => $request->university,
                'organization' => $request->organization == null ? '' : $request->organization,
                'user_id' => auth()->user()->id,

            ]);
        }
        $user = $researcher->user;
        $user->syncRoles('Researcher');
        $user->givePermissionTo([
            'read-study',
            'create-study',
            'edit-study',
            'delete-study',

            'read-assistant',
            'create-assistant',
            'delete-assistant',

            'read-researcher',
            'create-researcher',
            'edit-researcher' ,

            'read-survey',
            'create-survey',
            'edit-survey' ,
            'delete-survey',

            'read-patient',
            'create-patient',
            'edit-patient',
            'delete-patient',
        ]);
        alert()->success('طراح با موفقیت ثبت شد');
        return redirect()->route('study');

    }

    public function edit($id)
    {

        $research = Researcher::find($id);
        // $researcher=auth()->user()->id;

        return view('dashboard.actor.researcher.edit', ['research' => $research]);
    }

    public function editreserch($id)
    {

        $researcher = Researcher::find($id);
        // $researcher=auth()->user()->id;

        return response()->json($researcher);
    }

    public function updateresearcher(UpdateResearcherRequest $request, $id)
    {

        $research = Researcher::find($id);
        $research->update([
            'range' => $request->range,
            'n_number' => $request->n_number,
            'name' => $request->name,
            'f_name' => $request->f_name,
            'major' => $request->major,
            'proficiency' => isset($request->proficiency) ? $request->proficiency : '' ,
            'university' => $request->university,
            'organization' => isset($request->organization) ? $request->organization : '',
        ]);
        return response()->json($research);
    }

    public function destroy($id)
    {
        $researcher = Researcher::find($id);
        $researcher->user->syncRoles('User');
        $researcher->delete();
        return response()->json([]);
    }

    public function pdf()
    {

        $researchers = Researcher::allResearchers()->get();
        $date = Verta::now()->format('Y/m/d');
        $pdf = PDF::loadView('dashboard/pdf/researcher', compact('researchers', 'date'));
        return $pdf->stream('طراحان.pdf');
    }

    public function excel()
    {
        return Excel::download(new ResearcherExport(), 'طراحان.xlsx');
    }

    public function search(Request $request)
    {
        $search = $request->search;
        $researchers = Researcher::where('researcher_id', null)->where(function ($query) use ($search) {
            $query->where("name", "LIKE", "%{$search}%")->orWhere("f_name", "LIKE", "%{$search}%")
                ->orWhere("n_number", "LIKE", "%{$search}%");
        })
            ->get();

        $data['researchers'] = $researchers;
        $data['delete'] = auth()->user()->hasPermissionTo('delete-researchers') ? true : false;
        return response()->json($data);
    }

}
