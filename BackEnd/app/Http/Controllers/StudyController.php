<?php

namespace App\Http\Controllers;

use App\Exports\StudyExport;
use App\Http\Requests\dashboard\study\CreateStudyRequest;
use App\Http\Requests\dashboard\study\UpdateStudyRequest;
use App\Http\Requests\dashboard\TagRequest;
use App\Models\actor\Patient;
use App\Models\content\StudyTag;
use App\Models\EntryStudy;
use App\Models\FailureStudy;
use App\Models\Gender;
use App\Models\intervention\Intervention;
use App\Models\intervention\InterventionClass;
use App\Models\intervention\InterventionType;
use App\Models\Study;
use App\Models\StudySpecification;
use App\Models\Survey;
use Carbon\Carbon;
use Hekmatinasser\Verta\Verta;
use http\Client;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Illuminate\View\View;
use RealRashid\SweetAlert\Facades\Alert;
use function GuzzleHttp\Promise\all;
use PDF;
use Excel;

class StudyController extends Controller
{
    public function index()
    {

        if (!File::exists('images/profile/'.auth()->user()->Profile->img))
            auth()->user()->profile()->update(['img' => null]);
        if (auth()->user()->hasPermissionTo('read-studies'))
            $studies = Study::paginate(10);
        else
            $studies = Study::where('researcher_id', auth()->user()->researcher->id)->paginate(10);

        $surveys = array();
        $patients = array();
        $surveyCount = 0;
        $patientCount = 0;
        foreach ($studies as $study) {
            foreach ($study->surveys as $survey) {
                $surveyCount++;
                $survey->create_date = Verta($survey->create_date)->format('Y/m/d');
                $survey->description = $survey->description == '' ? 'ندارد' : $survey->description;
                array_push($surveys, $survey);
            }
            foreach ($study->patients as $patient) {
                $patientCount++;
                $patient->birthdate = Verta($patient->birthdate)->format('Y/m/d');
                array_push($patients, $patient);
            }
            $study->start_date = $study->start_date != null ? Verta($study->start_date)->format('Y/m/d') : '';
            $study->end_date = $study->end_date != null ? Verta($study->end_date)->format('Y/m/d') : '';
        }
        return view('dashboard.content.study.manage-plan', ['studies' => $studies, 'surveys' => $surveys
            , 'surveyCount' => $surveyCount , 'patients' => $patients , 'patientCount' => $patientCount]);
    }

    public function report()
    {
        if (auth()->user()->hasPermissionTo('read-studies'))
            $studies = Study::paginate(10);
        else
            $studies = Study::where('researcher_id', auth()->user()->researcher->id)->paginate(10);

        foreach ($studies as $study) {
            $study->start_date = $study->start_date != null ? Verta($study->start_date)->format('Y/m/d') : '';
            $study->end_date = $study->end_date != null ? Verta($study->end_date)->format('Y/m/d') : '';
        }
        return view('dashboard.content.study.report', ['studies' => $studies]);
    }

    public function intervention(Study $study, $interventions)
    {
        $interventions = json_decode($interventions);
        foreach ($interventions as $intervention) {
            $temp['intervention_type_id'] = InterventionType::where('name', ($intervention->intervention_type == 'control' ? 'گروه کنترل' : 'گروه مداخله'))->first()->id;
            $temp['class_id'] = InterventionClass::where('name', ($intervention->intervention_Classifi))->first()->id;
            $temp['content'] = $intervention->intervention_desc;
            $study->interventions()->create($temp);
        }
    }

    public function studyIntervention($id)
    {
        $interventions = Intervention::where('study_id', $id)->get();

        foreach ($interventions as $intervention) {
            $intervention->intervention_type = ($intervention->type->name == 'گروه کنترل' ? 'control' : 'intervention');
            $intervention->intervention_Classifi = $intervention->class->name;
            $intervention->intervention_desc = $intervention->content;
        }
        return response()->json($interventions);
    }

    public function setPatients(Request $request)
    {
        if ($request->number > 0 && Patient::all()->count() >= $request->number) {
            $patients = Patient::all()->random($request->number);
            $study = Study::find($request->id);
            foreach ($patients as $patient)
                $study->patients()->attach($patient->id);

            return response()->json('success', 200);
        }
        return response()->json('faild', 400);
    }

    public function store(CreateStudyRequest $request)
    {
//        dd($request->intervention);
        if ($request->termination_illness && (!empty($request->start_date_illness) || !empty($request->end_date_illness)))
            return back()->withInput($request->all())->with('error', 'تاریخ  بیمار
            گیری نمیتواند مقدار داشته باشد!');
        elseif (!$request->termination_illness && (!empty($request->start_get_sick_ended) || !empty($request->end_get_sick_ended)))
            return back()->withInput($request->all())->with('error', 'تاریخ  بیمار
            گیری تحقق یافته نمیتواند مقدار داشته باشد!');
        if (empty($request->start_date_illness) && empty($request->end_date_illness) && empty($request->start_get_sick_ended) && empty($request->end_get_sick_ended)) {
            if ($request->termination_illness) {
                return back()->withInput($request->all())->with('error', 'تاریخ  بیمار
            گیری تحقق یافته را وارد کنید!');
            } else {
                return back()->withInput($request->all())->with('error', 'تاریخ  بیمار
            گیری را وارد کنید!');
            }
        }

        if ($request->has('minimum_age'))
            $years_min = (!empty($request->min_year) ? $request->min_year : '0') . (!empty($request->min_month) ? '.' . $request->min_month : '.0') . (!empty($request->min_day) ? '.' . $request->min_day : '.0');
        else
            $years_min = null;
        if ($request->has('maximum_age'))
            $years_max = (!empty($request->max_year) ? $request->max_year : '0') . (!empty($request->max_month) ? '.' . $request->max_month : '.0') . (!empty($request->max_day) ? '.' . $request->max_day : '.0');
        else
            $years_max = null;
        $study_specifications = explode(',', $request->study_specifications);
        $entry_study = explode(',', $request->entry_study);
        $failure_entry_study = explode(',', $request->failure_entry_study);


        if ($request->has('file')) {
            $fileName = time() . '-' . $request->file('file')->getClientOriginalName();
            $request->file('file')->move('file/study', $fileName);
        } else {

            $fileName = null;
        }
        $input = $request->except(['entry_study', 'study_specifications', 'failure_entry_study']);
        $input['placebo'] = $request->has('placebo');
        $input['termination_illness'] = $request->has('termination_illness');
        $input['gender_id'] = $request->gender;
        $input['minimum_age'] = $years_min;
        $input['maximum_age'] = $years_max;
        $input['researcher_id'] = auth()->user()->hasRole('Researcher') ? auth()->user()->researcher->id : null;
        $input['assistant_id'] = auth()->user()->hasRole('Assistant') ? auth()->user()->assistant->id : null;
        $input['file'] = $fileName;
        $input['start_date'] = $request->start_date != null ? $this->jalaliToGregorian($input['start_date']) : null;
        $input['end_date'] = $request->end_date != null ? $this->jalaliToGregorian($input['end_date']) : null;
        $input['start_date_illness'] = $request->has('start_date_illness') ? $this->jalaliToGregorian($input['start_date_illness']) : null;
        $input['end_date_illness'] = $request->has('end_date_illness') ? $this->jalaliToGregorian($input['end_date_illness']) : null;
        $input['start_get_sick_ended'] = $request->has('start_get_sick_ended') ? $this->jalaliToGregorian($input['start_get_sick_ended']) : null;
        $input['end_get_sick_ended'] = $request->has('end_get_sick_ended') ? $this->jalaliToGregorian($input['end_get_sick_ended']) : null;

        $study = Study::create($input);

        $this->intervention($study, $request->intervention);
        if ($request->tags != null) {
            $tags = explode(',', $request->tags);

            $tagsId = [];
            foreach ($tags as $tag) {
                if (StudyTag::where('title', $tag)->exists())
                    array_push($tagsId, StudyTag::where('title', $tag)->first()->id);
            }
            $study->tags()->attach($tagsId);
        }
        if (!empty($request->study_specifications)) {
            foreach ($study_specifications as $specifaction) {
                $specec = StudySpecification::create([
                    'title' => $specifaction,
                    'study_id' => $study->id,
                ]);
            }
        }
        if (!empty($request->entry_study)) {
            foreach ($entry_study as $entry) {
                $entrys = EntryStudy::create([
                    'title' => $entry,
                    'study_id' => $study->id,
                ]);
            }
        }
        if (!empty($request->failure_entry_study)) {
            foreach ($failure_entry_study as $failur) {
                $failurs = FailureStudy::create([

                    'title' => $failur,
                    'study_id' => $study->id,
                ]);
            }
        }
        alert()->success('طرح با موفقیت ثبت شد');
        return redirect()->route('study');
    }

    private function jalaliToGregorian($input)
    {
        list($year, $month, $day) = explode('/', $input);
        return Verta(implode('-', Verta::getGregorian($year, $month, $day)))->formatGregorian('Y-m-d');
    }

    public function edit($id)
    {
        $study = Study::find($id);

        $study->minimum_age = $study->minimum_age != null ? explode('.', $study->minimum_age) : $study->minimum_age;
        $study->maximum_age = $study->maximum_age != null ? explode('.', $study->maximum_age) : $study->maximum_age;

        $genders = Gender::all();

        $dates = Verta::now();
        $spefiction = StudySpecification::where('study_id', $study->id)->get();
        $entry = EntryStudy::where('study_id', $study->id)->get();
        $failur = FailureStudy::where('study_id', $study->id)->get();

        $dateend = $study->end_get_sick_ended != null ? Verta($study->end_get_sick_ended)->format('Y/m/d') : '';
        $datestart = $study->start_get_sick_ended != null ? Verta($study->start_get_sick_ended)->format('Y/m/d') : '';
        $datestartillness = $study->start_date_illness != null ? Verta($study->start_date_illness)->format('Y/m/d') : '';
        $dateendillness = $study->end_date_illness != null ? Verta($study->end_date_illness)->format('Y/m/d') : '';
        $startdate = $study->start_date != null ? Verta($study->start_date)->format('Y/m/d') : '';
        $enddate = $study->end_date != null ? Verta($study->end_date)->format('Y/m/d') : '';
        return view('dashboard.content.study.edit', ['study' => $study, 'dateend' => $dateend, 'datestart' => $datestart
            , 'datestartillness' => $datestartillness, 'dateendillness' => $dateendillness, 'startdate' => $startdate, 'enddate' => $enddate,
            'spefiction' => $spefiction, 'entry' => $entry, 'failur' => $failur, 'genders' => $genders, 'dates' => $dates


        ]);
    }

    public function update(UpdateStudyRequest $request, $id)
    {
//        dd($request->all());
        if ($request->termination_illness && (!empty($request->start_date_illness) || !empty($request->end_date_illness)))
            return back()->withInput($request->all())->with('error', 'تاریخ  بیمار
            گیری نمیتواند مقدار داشته باشد!');
        elseif (!$request->termination_illness && (!empty($request->start_get_sick_ended) || !empty($request->end_get_sick_ended)))
            return back()->withInput($request->all())->with('error', 'تاریخ  بیمار
            گیری تحقق یافته نمیتواند مقدار داشته باشد!');
        if (empty($request->start_date_illness) && empty($request->end_date_illness) && empty($request->start_get_sick_ended) && empty($request->end_get_sick_ended)) {
            if ($request->termination_illness) {
                return back()->withInput($request->all())->with('error', 'تاریخ  بیمار
            گیری تحقق یافته را وارد کنید!');
            } else {
                return back()->withInput($request->all())->with('error', 'تاریخ  بیمار
            گیری را وارد کنید!');
            }
        }
        $study = Study::find($id);

        if ($request->has('minimum_age'))
            $years_min = (!empty($request->min_year) ? $request->min_year : '0') . (!empty($request->min_month) ? '.' . $request->min_month : '.0') . (!empty($request->min_day) ? '.' . $request->min_day : '.0');
        else
            $years_min = $study->minimum_age;
        if ($request->has('maximum_age'))
            $years_max = (!empty($request->max_year) ? $request->max_year : '0') . (!empty($request->max_month) ? '.' . $request->max_month : '.0') . (!empty($request->max_day) ? '.' . $request->max_day : '.0');
        else
            $years_max = $study->maximum_age;

        $study_specifications = explode(',', $request->study_specifications);
        $entry_study = explode(',', $request->entry_study);
        $failure_entry_study = explode(',', $request->failure_entry_study);

        if ($request->has('file')) {

            $fileName = time() . '-' . $request->file('file')->getClientOriginalName();

            $request->file('file')->move('file/study', $fileName);
        } else
            $fileName = $study->file;
        $study->update([

            'title' => $request->title,
            'name' => $request->name,
            'studies_type' => $request->studies_type,
            'structure_plan' => $request->structure_plan,
            'study_design' => $request->study_design,
            'file' => $fileName,
            'sample' => $request->sample,
            'start_date' => $request->start_date != null ? $this->jalaliToGregorian($request->start_date) : null,
            'end_date' => $request->end_date != null ? $this->jalaliToGregorian($request->end_date) : null,
            'sample_size' => $request->sample_size,

            'purpose_study' => $request->purpose_study,
            'phase_study' => $request->phase_study,
            'randomization' => $request->randomization,
            'blinding' => $request->blinding,

            'placebo' => $request->has('placebo'),

            'start_date_illness' => $request->has('start_date_illness') ? $this->jalaliToGregorian($request->start_date_illness) : null,
            'end_date_illness' => $request->has('end_date_illness') ? $this->jalaliToGregorian($request->end_date_illness) : null,
            'termination_illness' => $request->has('termination_illness'),
            'start_get_sick_ended' => $request->has('start_get_sick_ended') ? $this->jalaliToGregorian($request->start_get_sick_ended) : null,
            'end_get_sick_ended' => $request->has('end_get_sick_ended') ? $this->jalaliToGregorian($request->end_get_sick_ended) : null,
            'gender_id' => $request->gender,
            'minimum_age' => $years_min,
            'maximum_age' => $years_max,
        ]);
        foreach ($study->interventions as $intervention)
            $intervention->delete();

        $this->intervention($study, $request->intervention);

        if ($request->tags != null) {
            $tags = explode(',', $request->tags);

            $tagsId = [];
            foreach ($tags as $tag) {
                if (StudyTag::where('title', $tag)->exists())
                    array_push($tagsId, StudyTag::where('title', $tag)->first()->id);
            }
            $study->tags()->sync($tagsId);
        }
        if (!empty($request->study_specifications)) {
            foreach ($study_specifications as $specifaction) {
                if (!StudySpecification::where("title", $specifaction)->where('study_id', $study->id)->count()) {
                    StudySpecification::create([
                        'title' => $specifaction,
                        'study_id' => $study->id,
                    ]);
                }
            }
        }

        if (count($study_specifications) != $study->studyspecification->count()) {
            foreach ($study->studyspecification as $studyspefic) {
                if (!in_array($studyspefic->title, $study_specifications)) {
                    $studyspefic->delete();
                }
            }
        }
        if (!empty($request->entry_study)) {
            foreach ($entry_study as $entry) {
                if (!EntryStudy::where("title", $entry)->where('study_id', $study->id)->count()) {
                    EntryStudy::create([
                        'title' => $entry,
                        'study_id' => $study->id,
                    ]);
                }
            }
        }
        if (count($entry_study) != $study->entrystudy->count()) {
            foreach ($study->entrystudy as $study_entry) {
                if (!in_array($study_entry->title, $entry_study)) {
                    $study_entry->delete();
                }
            }
        }
        if (!empty($request->failure_entry_study)) {
            foreach ($failure_entry_study as $fail_entry) {
                if (!FailureStudy::where("title", $fail_entry)->where('study_id', $study->id)->count()) {
                    FailureStudy::create([
                        'title' => $fail_entry,
                        'study_id' => $study->id,
                    ]);
                }
            }
        }
        if (count($failure_entry_study) != $study->studyspecification->count()) {
            foreach ($study->failurestudy as $study_fail) {
                if (!in_array($study_fail->title, $failure_entry_study)) {
                    $study_fail->delete();
                }
            }
        }

//        alert()->success('طرح با موفقیت ویرایش شد')->persistent('close')->autoclose(5000);
        alert()->success('طرح با موفقیت ویرایش شد');


        return redirect()->route('study');
    }

    public function destroy($id)
    {
        Study::find($id)->delete($id);
        return response()->json([]);
    }

    public function checkTag(TagRequest $request)
    {

        if (!StudyTag::where('title', $request->title)->exists()) {
            if (StudyTag::onlyTrashed()->where('title', $request->title)->exists()) {
                $tag = StudyTag::onlyTrashed()->where('title', $request->title)->first();
                $tag->restore();
            } else {
                $input = $request->all();
                $input['slug'] = str::slug($input['title']);
                $tag = StudyTag::create($input);
            }
        } else
            $tag = StudyTag::where('title', $request->title)->first();
        return response()->json($tag);
    }

    public function searchTag(Request $request)
    {
        $tags = StudyTag::where("title", "LIKE", "%{$request->search}%")
            ->get();
        return response()->json($tags);
    }

    public function pdf(Request $request)
    {
        $array = array();
        $request->has('studies_type') ? array_push($array, ['studies_type', '=', $request->studies_type]) : '';
        $request->has('study_design') ? array_push($array, ['study_design', '=', $request->study_design]) : '';
        $request->has('purpose_study') ? array_push($array, ['purpose_study', '=', $request->purpose_study]) : '';
        $request->has('randomization') ? array_push($array, ['randomization', '=', $request->randomization]) : '';
        $request->has('blinding') ? array_push($array, ['blinding', '=', $request->blinding]) : '';
        $request->has('placebo') ? array_push($array, ['placebo', '=', $request->placebo]) : '';

        $studies = Study::where($array)->get();

//        if (auth()->user()->hasPermissionTo('read-studies'))
//            $studies = Study::all();
//        else
//            $studies = auth()->user()->researcher->study;
        foreach ($studies as $study) {
            $study->maximum_age = $study->maximum_age != null ? explode('.', $study->maximum_age) : null;
            $study->minimum_age = $study->minimum_age != null ? explode('.', $study->minimum_age) : null;
            $study->start_date = $study->start_date != null ? Verta($study->start_date)->format('Y/m/d') : '';
            $study->end_date = $study->end_date != null ? Verta($study->end_date)->format('Y/m/d') : '';
        }
        $date = Verta::now()->format('Y/m/d');
        $pdf = PDF::loadView('dashboard/pdf/studies', compact('studies', 'date'));
        return $pdf->stream('طرح ها.pdf');
    }

    public function excel(Request $request)
    {
        $array = array();
        $request->has('studies_type') ? array_push($array, ['studies_type', '=', $request->studies_type]) : '';
        $request->has('study_design') ? array_push($array, ['study_design', '=', $request->study_design]) : '';
        $request->has('purpose_study') ? array_push($array, ['purpose_study', '=', $request->purpose_study]) : '';
        $request->has('randomization') ? array_push($array, ['randomization', '=', $request->randomization]) : '';
        $request->has('blinding') ? array_push($array, ['blinding', '=', $request->blinding]) : '';
        $request->has('placebo') ? array_push($array, ['placebo', '=', $request->placebo]) : '';

        $studies = Study::where($array)->get();

        foreach ($studies as $study) {
            $study->maximum_age = $study->maximum_age != null ? explode('.', $study->maximum_age) : null;
            $study->minimum_age = $study->minimum_age != null ? explode('.', $study->minimum_age) : null;
            $study->start_date = $study->start_date != null ? Verta($study->start_date)->format('Y/m/d') : '';
            $study->end_date = $study->end_date != null ? Verta($study->end_date)->format('Y/m/d') : '';
        }

        return Excel::download(new StudyExport($studies), 'طرح ها.xlsx');
    }

    public function word($id)
    {
        $headers = array(

            "Content-type" => "text/html",

            "Content-Disposition" => "attachment;Filename=گزارش طرح.doc"

        );

        $study = Study::find($id);

        $study->maximum_age = $study->maximum_age != null ? explode('.', $study->maximum_age) : null;
        $study->start_date = Verta($study->start_date)->format('Y/m/d');
        $study->end_date = Verta($study->end_date)->format('Y/m/d');
        $study->start_date_illness = Verta($study->start_date_illness)->format('Y/m/d');
        $study->end_date_illness = Verta($study->end_date_illness)->format('Y/m/d');
        $date = Verta::now()->format('Y/m/d');

        return \Response::make(\Illuminate\Support\Facades\View::make('dashboard/word/study', compact('study', 'date')), 200, $headers);

    }

    public function singlePdf($id)
    {
        $study = Study::find($id);

        $study->maximum_age = $study->maximum_age != null ? explode('.', $study->maximum_age) : null;
        $study->minimum_age = $study->minimum_age != null ? explode('.', $study->minimum_age) : null;
        $study->start_date = Verta($study->start_date)->format('Y/m/d');
        $study->end_date = Verta($study->end_date)->format('Y/m/d');
        $study->start_date_illness = Verta($study->start_date_illness)->format('Y/m/d');
        $study->end_date_illness = Verta($study->end_date_illness)->format('Y/m/d');
        $date = Verta::now()->format('Y/m/d');
        $pdf = PDF::loadView('dashboard/pdf/study', compact('study', 'date'));
        return $pdf->stream('طرح.pdf');
    }


    public function update_status(Request $request)
    {
        if ($request->ajax()) {
            $study = Study::find($request->id);
            $study->status = $request['column_value'] == 'true' ? 1 : 0;
            $study->save();
        }
    }

    public function showstudy($id)
    {
        $study = Study::find($id);
        $gender = Gender::all();
        $spefiction = StudySpecification::where('study_id', $study->id)->get();
        $entry = EntryStudy::where('study_id', $study->id)->get();
        $failur = FailureStudy::where('study_id', $study->id)->get();
        $study->maximum_age = $study->maximum_age != null ? explode('.', $study->maximum_age) : null;
        $study->start_date_illness = Verta($study->start_date_illness)->format('Y/m/d');
        $study->end_date_illness = Verta($study->end_date_illness)->format('Y/m/d');
        $study->start_date = Verta($study->start_date)->format('Y/m/d');
        $study->end_date = Verta($study->end_date)->format('Y/m/d');
        return view('dashboard.content.study.detail-plan', [
            'study' => $study,
            'entry' => $entry, 'gender' => $gender, 'spefiction' => $spefiction, 'failur' => $failur
        ]);
    }

    public function create()
    {
        $startdate = Verta::now();
        $genders = Gender::all();
        return view('dashboard.content.study.create', ['startdate' => $startdate, 'genders' => $genders]);
    }

    public function search(Request $request)
    {
        $search = $request->search;
        if (auth()->user()->hasPermissionTo('read-study')) {
            $studies = Study::where('researcher_id', auth()->user()->researcher->id)->where(function ($query) use ($search) {
                $query->where("title", "LIKE", "%{$search}%")->orWhere("studies_type", "LIKE", "%{$search}%");
            })
                ->get();
        } else {
            $studies = Study::where("title", "LIKE", "%{$search}%")->orWhere("studies_type", "LIKE", "%{$search}%")
                ->get();
        }
        foreach ($studies as $study) {
            $study->number  = count($study->patients);
            $study->start_date = $study->start_date != null ? Verta($study->start_date)->format('Y/m/d') : '';
            $study->end_date = $study->end_date != null ? Verta($study->end_date)->format('Y/m/d') : '';
        }
        $data['studies'] = $studies;
        $data['delete'] = auth()->user()->hasAnyPermission(['delete-study', 'delete-studies']) ? true : false;
        $data['edit'] = auth()->user()->hasPermissionTo('edit-study') ? true : false;
        $data['status'] = auth()->user()->hasPermissionTo('edit-study-status') ? true : false;
        return response()->json($data);
    }

    public function advancedSearch(Request $request)
    {
        $array = array();
        $request->has('studies_type') ? array_push($array, ['studies_type', '=', $request->studies_type]) : '';
        $request->has('study_design') ? array_push($array, ['study_design', '=', $request->study_design]) : '';
        $request->has('purpose_study') ? array_push($array, ['purpose_study', '=', $request->purpose_study]) : '';
        $request->has('randomization') ? array_push($array, ['randomization', '=', $request->randomization]) : '';
        $request->has('blinding') ? array_push($array, ['blinding', '=', $request->blinding]) : '';
        $request->has('placebo') ? array_push($array, ['placebo', '=', $request->placebo]) : '';

        $studies = Study::where($array)->get();

        foreach ($studies as $study) {
            $study->start_date = $study->start_date != null ? Verta($study->start_date)->format('Y/m/d') : '';
            $study->end_date = $study->end_date != null ? Verta($study->end_date)->format('Y/m/d') : '';
        }
        return response()->json($studies);
    }


}
