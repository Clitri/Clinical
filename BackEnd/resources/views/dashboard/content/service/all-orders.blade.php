@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    مدیریت سفارش ها
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
                                <h4>مدیریت سفارش ها</h4>
                            </div>
                            <div>
                                <label class="label-in-search"> جستجو : </label>
                                <input type="search" class="in-search">
                            </div>
                            <div class="datatable-posts mt-4">
                                <div class="table-responsive">
                                    <table class="display table table-pro posts-table" style="min-width: 845px">
                                        <thead>
                                        <tr>
                                            <th>ردیف</th>
                                            <th>نام طراح</th>
                                            <th>سرویس</th>
                                            <th>مدت زمان</th>
                                        </tr>
                                        </thead>
                                        <tbody class="search-table">
                                        @php($counter = 1)
                                        @foreach($orders as $order)
                                            <tr id="order-{{$order->id}}">
                                                <td>{{$counter++}}</td>
                                                <td>{{$order->researcher->name.' '.$order->researcher->f_name}}</td>
                                                <td><a href="{{route('service.detail' , ['id'=>$order->service->id])}}">{{$order->service->type->name}}</a></td>
                                                <td>{{$order->period->month.' ماهه'}}</td>

                                            </tr>
                                        @endforeach

                                        </tbody>
                                    </table>
                                    {{$orders->links('pagination.default')}}
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
--}}    <script src="{{ asset('/js/dashboard/content/order.js') }}"></script>

    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('/js/dashboard/dataTables.js') }}"></script>
    <script src="{{ asset('js/dashboard/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-html5.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-print.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons.js') }}"></script>
    <script src="{{ asset('/js/dashboard/datatables.init.js') }}"></script>
     @endpush
