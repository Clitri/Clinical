<?php

namespace App\Http\Controllers\actor\assistant;

use App\Exports\AssistantExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\dashboard\actor\researcher\assistant\CreateAssistantRequest;
use App\Models\actor\Assistant;
use App\Models\Researcher;
use App\Models\User;
use Hekmatinasser\Verta\Verta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use PDF;
use Excel;

class AssistantController extends Controller
{
    public function index()
    {
        if (auth()->user()->hasRole('Manager'))
            $assistants = Researcher::where('researcher_id','!=' , null)->paginate(10);
        else
            $assistants = Researcher::where('researcher_id', auth()->user()->researcher->id)->paginate(10);
        return view('dashboard.actor.researcher.assistant.index', ['assistants' => $assistants]);
    }

    public function create()
    {

        return view('dashboard.actor.researcher.assistant.create');

    }

    public function store(CreateAssistantRequest $request)
    {
        $user_input = $request->only(['username', 'email', 'password', 'enabled']);
        $user_input['password'] = Hash::make($request->password);
        $user = User::create($user_input);

        $assistant_input = $request->except(['username', 'email', 'password', 'enabled', 'role']);

        $assistant_input['researcher_id'] = auth()->user()->researcher->id;

        if (Researcher::onlyTrashed()->where('n_number', $request->n_number)->exists()) {
            $assistant_input['user_id'] = $user->id;
            $assistant = Researcher::onlyTrashed()->where('n_number', $request->n_number)->get()[0];
            $assistant->restore();
            $assistant->update($assistant_input);
        } else {
            $user->researcher()->create($assistant_input);
        }
        $user->syncRoles('Assistant');

        $user->givePermissionTo($request->permissions);
        alert()->success('دستیار با موفقیت ثبت شد');
        return redirect()->route('assistant');
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
        if (auth()->user()->hasRole('Manager'))
            $assistants = Researcher::where('researcher_id','!=' , null)->get();
        else
            $assistants = Researcher::where('researcher_id', auth()->user()->researcher->id)->get();

        foreach ($assistants as $assistant) {
            $assistant->r_name = $assistant->researcher->name;
            $assistant->r_f_name = $assistant->researcher->f_name;

        }
        $date = Verta::now()->format('Y/m/d');
        $pdf = PDF::loadView('dashboard/pdf/assistant', compact('assistants', 'date'));
        return $pdf->stream('دستیاران.pdf');
    }

    public function excel()
    {
        return Excel::download(new AssistantExport(), 'دستیاران.xlsx');
    }

    public function search(Request $request)
    {
        $search = $request->search;
        $researchers = Researcher::where('researcher_id', auth()->user()->researcher->id)->where(function ($query) use ($search) {
            $query->where("name", "LIKE", "%{$search}%")->orWhere("f_name", "LIKE", "%{$search}%")
                ->orWhere("n_number", "LIKE", "%{$search}%");
        })
            ->get();

        $data['researchers'] = $researchers;
        $data['delete'] = auth()->user()->hasPermissionTo('delete-assistant') ? true : false;
        return response()->json($data);
    }
}
