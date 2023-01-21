@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    مدیریت  دستایاران
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
                                <h4 class="card-title">جدول داده های دستایارن</h4>
                                @if(request()->routeIs('report.*'))
                                    @php($flag=false)
                                @else
                                    @php($flag=true)
                                @endif
                                @if($flag)
                                    <a href="{{route('assistant.create')}}" class="btn btn-primary">
                                        <i class="fa-solid fa-plus align-middle"></i>
                                        ایجاد دستیار جدید</a>
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
                                            <th>نام ونام خانوادگی</th>
                                            <th>کدملی</th>
                                            <th>مرتبه علمی</th>
                                            <th>رشته</th>
                                            <th>تخصص</th>
                                            <th>دانشگاه</th>
                                            <th>سازمان</th>
                                            @if($flag)
                                                @can('delete-assistant')
                                                    <th>عملیات</th>
                                                @endcan
                                            @endif
                                        </tr>
                                        </thead>
                                        <tbody class="search-table">
                                        @php($counter=1)
                                        @foreach ($assistants as $assistant)
                                            <tr id="assistant-{{ $assistant->id }}">

                                                <td>{{ $counter++ }}</td>
                                                <td>{{ $assistant->name.' '.$assistant->f_name }}</td>
                                                <td>{{ $assistant->n_number }}</td>
                                                <td>{{ $assistant->range }}
                                                </td>
                                                <td>{{ $assistant->major }}</td>
                                                <td>{{ $assistant->proficiency }}</td>
                                                <td>{{ $assistant->university }}</td>
                                                <td>{{ $assistant->organization }}</td>
                                                @if($flag)
                                                    @can('delete-assistant')
                                                        <td>
                                                            <div class="d-flex justify-content-center">

                                                                <a onclick="deleterecord({{ $assistant->id }})"
                                                                   class="btn btn-danger text-white shadow btn-xs sharp"><i
                                                                        class="fa-solid fa-trash"></i></a>

                                                            </div>
                                                        </td>
                                                    @endcan
                                                @endif

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
        </div>
    </section>

@endsection

@push('scripts')

{{--    <script data-cfasync="false" src="{{ asset('/js/dashboard/email-decode.min.js') }}"></script>
--}}
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('/js/dashboard/dataTables.js') }}"></script>
    <script src="{{ asset('js/dashboard/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-html5.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-print.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons.js') }}"></script>
    <script src="{{ asset('/js/dashboard/datatables.init.js') }}"></script>
         <script src="{{ asset('/js/dashboard/researcher/assistant.js') }}"></script>

@endpush
