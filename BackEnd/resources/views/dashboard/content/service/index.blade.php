@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    مدیریت سرویس ها
@endsection

@section('head')
    <link href="{{ asset('/css/dashboard/jquery.dataTables.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/dashboard/buttons-datatable.css') }}" />
@endsection

@section('content')
    <section class="content">
        <div class="content-body">

            <div class="container-fluid">

                <div class="row mx-0">
                    <div class="manage-posts d-flex">
                        <div class="col-12">
                            <div class="d-flex manage-title  border-bottom pb-2">
                                <h4>مدیریت سرویس ها</h4>
                                @can('create-service')
                                    <a id="add_post" href="{{route('service.create')}}" class="btn text-white">
                                        <i class="fa-solid fa-plus align-middle"></i>
                                        ایجاد
                                        سرویس
                                        جدید</a>
                                @endcan
                            </div>
                            <div class="datatable-posts mt-4">
                                <div class="table-responsive">
                                    <table class="display table table-pro posts-table" style="min-width: 845px">
                                        <thead>
                                        <tr>
                                            <th>ردیف</th>
                                            <th>نوع سرویس</th>
                                            <th>عنوان</th>
                                            <th>عکس</th>
                                            <th>قیمت ماهانه</th>
                                            <th>وضعیت</th>
                                            <th>عملیات</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @php($counter = 1)
                                        @foreach($services as $service)
                                            <tr id="service-{{$service->id}}">
                                                <td>{{$counter++}}</td>
                                                <td>{{$service->type->name}}</td>
                                                <td>{{$service->title}}</td>
                                                <td><img src="{{asset('/images/service/'.$service->img)}}" alt=""></td>
                                                <td>{{$service->price}}</td>
                                                <td>
                                                    <div data-id="{{ $service->id }}"
                                                         class="activity-btn {{ $service->status ? 'switch-to-active' : '' }}">
                                                        <span class="activity-switch"></span>
                                                        <input type="checkbox" class="d-none"
                                                            {{ $service->status ? 'checked' : '' }} />
                                                    </div>

                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="{{route('service.edit' , ['id'=>$service->id])}}"
                                                           class="btn btn-primary shadow btn-xs sharp"><i
                                                                class="fa-solid fa-pencil"></i></a>
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"
                                                           id="{{$service->id}}"><i
                                                                class="fa-solid fa-trash"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach

                                        </tbody>
                                    </table>
                                    {{$services->links('pagination.default')}}
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

    <script src="{{ asset('/js/dashboard/content/service.js') }}"></script>
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
