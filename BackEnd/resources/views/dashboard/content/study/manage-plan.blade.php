@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    مدیریت طرح ها
@endsection

@section('head')
    <link href="{{ asset('/css/dashboard/jquery.dataTables.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/dashboard/buttons-datatable.css') }}" />
    <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet" />

@endsection
@section('content')

    <section class="content"> <div class="content-body">

            <div class="container-fluid">

                <div class="row questionnaire-box justify-content-center mx-0 align-items-center card">
                    <!-- ========= summary ========== -->
                    <div class="col-12">
                        <div class="summary-header">
                            <h2 class="text-center border-bottom py-2 mb-4">مدیریت طرح</h2>
                        </div>
                        <div class="summary">
                            <div class="row mx-0">
                                <div class="col-12 col-md-6 col-lg-4 my-4">
                                    <div class="summary-item text-center">
                                        <h2 class="pt-5">طرح</h2>
                                        <h1 class="py-3">{{auth()->user()->hasPermissionTo('read-studies') ? \App\Models\Study::all()->count() : \App\Models\Study::where('researcher_id' , auth()->user()->researcher->id)->count()}}</h1>
                                        <div class="summary-title">
                                            <i class="fa-solid fa-box-archive align-middle"></i>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 my-4">
                                    <div class="summary-item text-center">
                                        <h2 class="pt-5">پرسشنامه</h2>
                                        <h1 class="py-3">{{$surveyCount}}</h1>
                                        <div class="summary-title">
                                            <i class="fa-solid fa-file-lines align-middle"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 my-4">
                                    <div class="summary-item text-center">
                                        <h2 class="pt-5">بیمار</h2>
                                        <h1 class="py-3">{{$patientCount}}</h1>
                                        <div class="summary-title">
                                            <i class="fa-solid fa-users align-middle"></i>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 datatable-status">
                        <div class="project-list-header">
                            <h2 class="text-center border-bottom py-2 pt-4 mb-3">
                                لیست طرح ها
                            </h2>
                        </div>

                        <div>
                            @can('create-study')
                                <a href="{{route('study.create')}}" class="add-user ml-auto">
                                    <i class="fa-solid fa-plus align-middle"></i>
                                    ایجاد طرح جدید
                                </a>
                            @endcan
                            <div>
                                <label class="label-in-search"> جستجو : </label>
                                <input type="search" class="in-search">
                            </div>
                            <div class="table-responsive">
                                <table id="example3" class="display" style="min-width: 845px">
                                    <thead>
                                    <tr>
                                        <th>ردیف</th>
                                        <th>عنوان طرح</th>
                                        <th>نوع طرح</th>
                                        <th>تاریخ شروع کار آزمایی</th>
                                        <th>تاریخ پایان کارآزمایی</th>

                                        <th>تعداد بیماران</th>
                                        <th>وضعیت</th>
                                        <th>عملیات</th>
                                    </tr>
                                    </thead>
                                    <tbody class="search-table">
                                    @php($counter = 1 )
                                    @foreach ( $studies as $study )
                                        <tr id="study-{{$study->id}}">
                                            <td>{{$counter++}}</td>
                                            <td>{{$study->title}}</td>
                                            <td>{{$study->studies_type}}</td>
                                            <td>{{$study->start_date}}</td>
                                            <td>{{$study->end_date}}</td>
                                            <td class="answer-number" data-id="{{$study->id}}">{{count($study->patients) == 0 ? 'تعیین نشده' : count($study->patients)}}</td>
                                            <td>
                                                @can('edit-study-status')
                                                    <div
                                                        class="activity-btn {{ $study->status ? 'switch-to-active' : '' }}" >
                                                        <span class="activity-switch"></span>
                                                        <input data-id="{{ $study->id }}" type="checkbox" class="d-none"
                                                            {{ $study->status ? 'checked' : '' }} />
                                                    </div>
                                                @else
                                                    {{$study->status ? 'تایید شده' : 'تایید نشده'}}
                                                @endcan
                                            </td>
                                            <td>
                                                <div class="d-flex justify-content-center">
                                                    @can('create-study')
                                                        <a href="{{'http://survey.clitri.ir/'.auth()->user()->token.'/'.$study->id}}"
                                                           class="btn btn-primary text-white shadow btn-xs sharp"><i
                                                                class="fa-solid fa-solid fa-file"></i></a>
                                                    @endcan
                                                    <a href="{{route('study.show' , ['id'=>$study->id])}}"
                                                       class="view-plan-btn shadow btn-xs sharp">
                                                        <i class="fa-solid fa-eye"></i>
                                                    </a>

                                                    @if(auth()->user()->hasAnyPermission(['edit-study']))
                                                        <a href="/dashboard/study/{{$study->id}}/edit"
                                                           class="btn btn-primary text-white shadow btn-xs sharp"><i
                                                                class="fa-solid fa-pencil"></i></a>
                                                    @endif
                                                    @if(auth()->user()->hasAnyPermission(['delete-study','delete-studies']))
                                                        <a onclick="deleterecord({{ $study->id }})"
                                                           class="btn btn-danger text-white shadow btn-xs sharp"><i
                                                                class="fa-solid fa-trash"></i></a>
                                                    @endif
                                                    <a href="#" class="analysis-plan-btn shadow btn-xs sharp"><i
                                                            class="fa-solid fa-compass-drafting"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                                {{ $studies->links('pagination.default') }}
                            </div>
                        </div>
                    </div>

                    <div class="col-12 datatable-status">
                        <div class="project-list-header">
                            <h2 class="text-center border-bottom py-2 pt-4 mb-3">
                                لیست پرسشنامه ها
                            </h2>
                        </div>

                        <div>
                            {{--                            <a href="" class="add-user">--}}
                            {{--                                <i class="fa-solid fa-plus align-middle"></i>--}}
                            {{--                                ایجاد پرسشنامه جدید--}}
                            {{--                            </a>--}}
                            <div class="table-responsive">
                                <table id="example3" class="display" style="min-width: 845px">
                                    <thead>
                                    <tr>
                                        <th>شماره</th>
                                        <th>عنوان طرح</th>
                                        <th>عنوان پرسش نامه</th>
                                        <th>توضیحات</th>
                                        <th>لینک پاسخ دهی</th>
                                        <th>تعداد پاسخ ها</th>
                                        <th>تاریخ ایجاد</th>
                                        <th>عملیات</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @php($counter=1)
                                    @foreach($surveys as $survey)
                                        <tr>
                                            <td>{{$counter++}}</td>
                                            <td>{{$survey->study->title}}</td>
                                            <td>{{$survey->title}}</td>
                                            <td>{{$survey->description}}</td>
                                            <td>{{$survey->link}}</td>
                                            <td>{{$survey->answer_number}}</td>
                                            <td>{{$survey->create_date}}</td>
                                            {{--                                        <td><a href="{{'http://frontsurvey.clitri.ir/'.auth()->user()->token.'/'.$survey->study_id.'/action'}}"><i class="fa-solid fa-arrow-right"></i></a></td>--}}
                                            <td><a href="{{'http://survey.clitri.ir/'.auth()->user()->token.'/'.$survey->study_id.'/action'}}">
                                                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                                        <path fill="#05a576" d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" />
                                                    </svg></a></td>

                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="col-12 datatable-status">
                        <div class="project-list-header">
                            <h2 class="text-center border-bottom py-2 pt-4 mb-3">
                                لیست بیماران
                            </h2>
                        </div>

                        <div>
                            {{--                            <a href="#" class="add-user">--}}
                            {{--                                <i class="fa-solid fa-plus align-middle"></i>--}}
                            {{--                                ایجاد پرسشگر جدید--}}
                            {{--                            </a>--}}
                            <div class="table-responsive">
                                <table id="example3" class="display" style="min-width: 845px">
                                    <thead>
                                    <tr>
                                        <th>ردیف</th>
                                        <th>نام‌ونام‌خانوادگی</th>
                                        <th>کدملی</th>
                                        <th>تاریخ‌تولد</th>
                                        <th>جنسیت</th>
                                        <th>وضعیت‌تاُهل</th>
                                        <th>قد</th>
                                        <th>وزن</th>
                                        <th>شهر</th>
                                        <th>نوع‌عارضه</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @php($counter = 1)
                                    @foreach ($patients as $patient)
                                        <tr id="patient-{{ $patient->id }}">

                                            <td>{{ $counter++ }}</td>
                                            <td>{{ $patient->name.' '.$patient->f_name }}</td>
                                            <td>{{ $patient->n_number }}</td>
                                            <td>{{ $patient->birthdate }}</td>
                                            <td>{{ $patient->gender->title }}</td>
                                            <td>{{ $patient->marriage ? 'متاُهل' : 'مجرد' }}</td>
                                            <td>{{ $patient->height }}</td>
                                            <td>{{ $patient->weight }}</td>
                                            <td>{{ $patient->province->name }}</td>
                                            <td>{{ $patient->sickness->name }}</td>

                                        </tr>
                                    @endforeach

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <div class="modal fade" id="answerNumber" aria-hidden="true" aria-labelledby="exampleModellable">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <form id="answerForm" method="post" >
                    @csrf
                    <input type="hidden" id="id" name="id">

                    <div class="modal-header">
                        <h4 class="modal-title"> بیماران</h4>
                        <button type="button" class="close" data-dismiss="modal"
                                data-target='#imgEditModal'><span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <div class="col-12 px-2">
                                <label><strong>تعداد بیماران :</strong></label>
                                <input type="number" name="number" id="number" class="form-control"
                                />
                                <div class="errors text-danger"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger light" data-dismiss="modal"
                                data-target='#imgEditModal'>بستن
                        </button>
                        <button type="submit" class="btn btn-primary">ارسال</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

    <script src="{{asset('/js/dashboard/sweetalert2@9.js')}}"></script>
    <script src="{{asset('/js/dashboard/study.js')}}"></script>
    <script src="{{asset('/js/dashboard/Chart.bundle.min.js')}}"></script>
    <script src="{{asset('/js/dashboard/jquery.peity.min.js')}}"></script>
    <script src="{{asset('/js/dashboard/vivus.min.js')}}"></script>
    <script src="{{asset('/js/dashboard/dataTables.js')}}"></script>
    <script src="{{asset('/js/dashboard/datatables.init.js')}}"></script>
    <script src="{{asset('/js/dashboard/custom-select.js')}}"></script>
    <script src="{{asset('/js/dashboard/manage-plan.js')}}"></script>
@endpush
