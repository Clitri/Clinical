@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    مدیریت  طراحان
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
                                <h4 class="card-title">جدول داده های طراحان</h4>
                                @if(request()->routeIs('report.*'))
                                    @php($flag=false)
                                @else
                                    @php($flag=true)
                                @endif
                                @if($flag)
                                    <a href="{{ route('researcher.create') }}" class="btn btn-primary">
                                        <i class="fa-solid fa-plus align-middle"></i>
                                        ایجاد طراح جدید
                                    </a>
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
                                                @can('delete-researchers')
                                                    <th>عملیات</th>
                                            @endcan
                                            @endif
                                        </tr>
                                        </thead>
                                        <tbody class="search-table">
                                        @php($counter = 1)
                                        @foreach ($researchers as $research)
                                            <tr id="user-{{ $research->id }}">

                                                <td>{{ $counter++ }}</td>
                                                <td>{{ $research->name.' '.$research->f_name }}</td>
                                                <td>{{ $research->n_number }}</td>
                                                <td>{{ $research->range }}
                                                </td>
                                                <td>{{ $research->major }}</td>
                                                <td>{{ $research->proficiency }}</td>
                                                <td>{{ $research->university }}</td>
                                                <td>{{ $research->organization }}</td>
                                                @if($flag)
                                                    @can('delete-researchers')
                                                        <td>
                                                            <div class="d-flex justify-content-center">

                                                                    <a onclick="deleterecord({{ $research->id }})"
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
                                    {{ $researchers->links('pagination.default') }}
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

    <script src="{{ asset('/js/dashboard/researcher/researcher.js') }}"></script>
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
