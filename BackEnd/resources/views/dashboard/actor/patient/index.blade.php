@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    مدیریت  بیماران
@endsection
@section('head')
    <link href="{{ asset('/css/dashboard/jquery.dataTables.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/dashboard/buttons-datatable.css') }}" />
@endsection
@section('content')

    <section class="content">
        <div class="content-body">
            <div class="container-fluid">


                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">جدول داده های بیماران</h4>
                                @if(request()->routeIs('report.*'))
                                    @php($flag=false)
                                @else
                                    @php($flag=true)
                                @endif
                                @if($flag)
                                    @can('create-patient')
                                        @if(!auth()->user()->hasRole('Manager'))
                                        <a href="{{route('patient.create')}}" class="btn btn-primary">
                                            <i class="fa-solid fa-plus align-middle"></i>
                                            ایجاد ‌بیمار‌ جدید</a>
                                            @endif
                                    @endcan
                                @endif
                            </div>
                            @if($flag)
                            <div>
                                <label class="label-in-search"> جستجو : </label>
                                <input type="search" class="in-search">
                            </div>
                            @endif
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="{{$flag ? '' : "example3"}}"
                                           class="display{{$flag ? " posts-table" : ''}}">
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
                                            @if($flag)
                                                @if(auth()->user()->hasAnyPermission(['delete-patient','edit-patient']))
                                                    <th>عملیات</th>
                                                @endif
                                            @endif
                                        </tr>
                                        </thead>
                                        <tbody class="search-table">
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
                                                @if($flag)
                                                    @if(auth()->user()->hasAnyPermission(['delete-patient','edit-patient']))
                                                        <td>
                                                            <div class="d-flex justify-content-center">
                                                                @can('edit-patient')

                                                                    <a href="{{route('patient.edit' , ['id'=>$patient->id])}}"
                                                                       class="btn btn-primary text-white shadow btn-xs sharp"><i
                                                                            class="fa-solid fa-pencil"></i></a>
                                                                @endcan
                                                                @can('delete-patient')
                                                                    <a onclick="deleterecord({{ $patient->id }})"
                                                                       class="btn btn-danger text-white shadow btn-xs sharp"><i
                                                                            class="fa-solid fa-trash"></i></a>
                                                                @endcan
                                                            </div>
                                                        </td>
                                                    @endif
                                                @endif

                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                    {{ $patients->links('pagination.default') }}
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

@endsection

@push('scripts')

    <script src="{{ asset('/js/dashboard/patient.js') }}"></script>
{{--    <script data-cfasync="false" src="{{ asset('/js/dashboard/email-decode.min.js') }}"></script>
--}}
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('/js/dashboard/dataTables.js') }}"></script>
    <script src="{{ asset('js/dashboard/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-html5.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-print.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons.js') }}"></script>
    <script src="{{ asset('/js/dashboard/datatables.init.js') }}"></script>

     @endpush
