<?php

namespace App\Http\Controllers\actor;

use App\Exports\PatientExport;
use App\Http\Controllers\Controller;
use App\Http\Requests\dashboard\actor\patient\CreatePatientRequest;
use App\Http\Requests\dashboard\actor\patient\UpdatePatientRequest;
use App\Imports\SicknessImport;
use App\Models\actor\Patient;
use App\Models\content\Sickness;
use App\Models\User;
use Hekmatinasser\Verta\Verta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use PDF;
use Excel;


class PatientController extends Controller
{

    public function index()
    {
        if (auth()->user()->hasRole('Agent'))
            $patients = Patient::where('agent_id', auth()->id())->paginate(10);
        elseif (auth()->user()->hasRole('Researcher') || auth()->user()->hasRole('Assistant'))
            $patients = Patient::where('researcher_id', auth()->user()->researcher->id)->paginate(10);
        else
            $patients = Patient::paginate(10);
        foreach ($patients as $patient)
            $patient->birthdate = Verta($patient->birthdate)->format('Y/m/d');

        return view('dashboard.actor.patient.index', ['patients' => $patients]);

    }

    public function create()
    {
        $now = Verta::now();
        return view('dashboard.actor.patient.create', ['now' => $now]);
    }

    public function store(CreatePatientRequest $request)
    {
        $user_input = $request->only(['username', 'email', 'password']);
        $user_input['password'] = Hash::make($request->password);
        $user_input['enabled'] = 1;
        $user = User::create($user_input);

        $patient_input = $request->except(['username', 'email', 'password']);
        $patient_input['sickness_id'] = Sickness::where('name' , $request->sickness_id)->first()->id;
        auth()->user()->hasRole('Agent') ? $patient_input['agent_id'] = auth()->id() : $patient_input['researcher_id'] = auth()->user()->researcher->id;
        $patient_input['birthdate'] = $this->jalaliToGregorian($request->birthdate);
        if (Patient::onlyTrashed()->where('n_number', $request->n_number)->exists()) {
            $patient_input['user_id'] = $user->id;
            $patient = Patient::onlyTrashed()->where('n_number', $request->n_number)->get()[0];
            $patient->restore();
            $patient->update($patient_input);
        } else
            $user->patient()->create($patient_input);

        $user->syncRoles('Patient');
        alert()->success('بیمار با موفقیت ثبت شد');
        return redirect()->route('patient');
    }

    private function jalaliToGregorian($input)
    {
        list($year, $month, $day) = explode('/', $input);
        return Verta(implode('-', Verta::getGregorian($year, $month, $day)))->formatGregorian('Y-m-d');
    }

    public function edit($id)
    {
        $now = Verta::now();
        $patient = Patient::find($id);
        $patient->birthdate = Verta($patient->birthdate)->format('Y/m/d');
        return view('dashboard.actor.patient.edit', ['patient' => $patient, 'now' => $now]);
    }

    public function update(UpdatePatientRequest $request, $id)
    {

        $patient = Patient::find($id);
        $user = $patient->user;
        $patient_input = $request->except(['username', 'email']);
        $patient_input['sickness_id'] = Sickness::where('name' , $request->sickness_id)->first()->id;

        $patient_input['birthdate'] = $this->jalaliToGregorian($request->birthdate);

        $patient->update($patient_input);
        $user->update($request->only(['username', 'email']));

        alert()->success('بیمار ویرایش شد');

        return redirect()->route('patient');
    }

    public function destroy($id)
    {
        $patient = Patient::find($id);
        $patient->user->syncRoles('User');
        $patient->delete();
        return response()->json([]);
    }

    public function pdf()
    {
        $patients = Patient::all();
        foreach ($patients as $patient)
            $patient->birthdate = Verta($patient->birthdate)->format('Y/m/d');

        $date = Verta::now()->format('Y/m/d');
        $pdf = PDF::loadView('dashboard/pdf/patient', compact('patients', 'date'));
        return $pdf->stream('بیماران.pdf');
    }

    public function excel()
    {
        return Excel::download(new PatientExport(), 'بیماران.xlsx');
    }

    public function sicknessSearch(Request $request){
        $search = $request->search;
        $sicknesses = Sickness::where("name", "LIKE", "%{$search}%")->get();
        return response()->json($sicknesses);

    }
    public function search(Request $request)
    {
        $search = $request->search;
        if (auth()->user()->hasRole('Agent')) {
            $patients = Patient::where('agent_id', auth()->id())->where(function ($query) use ($search) {
                $query->where("name", "LIKE", "%{$search}%")->orWhere("f_name", "LIKE", "%{$search}%")
                    ->orWhere("n_number", "LIKE", "%{$search}%");
            })
                ->get();
        } elseif(auth()->user()->hasRole('Researcher') || auth()->user()->hasRole('Assistant')) {
            $patients = Patient::where('researcher_id', auth()->user()->researcher->id)->where(function ($query) use ($search) {
                $query->where("name", "LIKE", "%{$search}%")->orWhere("f_name", "LIKE", "%{$search}%")
                    ->orWhere("n_number", "LIKE", "%{$search}%");
            })
                ->get();
        }else{
            $patients = Patient::where("name", "LIKE", "%{$search}%")->orWhere("f_name", "LIKE", "%{$search}%")
                ->orWhere("n_number", "LIKE", "%{$search}%")->get();
        }

        foreach ($patients as $patient) {
            $patient->birthdate = Verta($patient->birthdate)->format('Y/m/d');
            $patient->gender_id = $patient->gender->title;
            $patient->marriage_id = $patient->marriage ? 'متاُهل' : 'مجرد';
            $patient->province_id = $patient->province->name;
            $patient->sickness_id = $patient->sickness->name;

        }

        $data['patients'] = $patients;
        $data['delete'] = auth()->user()->hasPermissionTo('delete-patient') ? true : false;
        $data['edit'] = auth()->user()->hasPermissionTo('edit-patient') ? true : false;
        return response()->json($data);
    }
}
