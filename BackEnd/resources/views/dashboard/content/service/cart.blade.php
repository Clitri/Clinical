@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    سبد خرید
@endsection

@section('content')
    <section class="content">
        <div class="contacts_body container-fluid">
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="card-body ">
                            <div class="wrapper wrapper-content animated fadeInRight">
                                <div class="row">
                                    <div class="col-md-9">
                                        @if(count($carts) == 0)
                                            <h5>سرویسی وجود ندارد !</h5>
                                            @endif
                                        @foreach($carts as $cart)

                                        <div class="ibox"  id="order-{{$cart->service->id}}">
                                            <div class="ibox-title">
{{--                                                <span class="pull-right float-right">(<strong>3</strong>) آیتم</span>--}}
                                                <h5>اقلام در سبد خرید شما</h5>
                                            </div>
                                            <div class="ibox-content">
                                                <div class="table-responsive">
                                                    <table class="table shoping-cart-table">
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="cart-product-imitation">
                                                                    <img src="{{asset('/images/service/'.$cart->service->img)}}" alt>
                                                                </div>
                                                            </td>
                                                            <td class="desc">
                                                                <h3>
                                                                    <a href="#" class="text-navy">
                                                                        {{$cart->service->title}}
                                                                    </a>
                                                                </h3>
                                                                <div class="m-t-sm">
                                                                    <a href="#" class="text-muted delete-order" data-id="{{$cart->service->id}}"><i class="fa-solid fa-trash"></i>
                                                                        حذف آیتم</a>
                                                                </div>
                                                            </td>
{{--                                                            <td>--}}
{{--                                                                <span class="text-success">{{$cart->service->price}}تومان</span>--}}
{{--                                                            </td>--}}
                                                            <td>
{{--                                                                <input type="text" class="form-control" id="period" value="{{$cart->period->month}}">--}}
                                                                <select class="form-control" id="inputState" data-id="{{$cart->service->id}}">
                                                                    @foreach(\App\Models\service\ServicePeriod::all() as $period)
                                                                        <option value="{{$period->id}}" {{$period->id == $cart->period_id ? 'selected' : ''}}>{{$period->month}} ماهه</option>
                                                                    @endforeach
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <h4 id="price">
                                                                    {{($cart->service->price * $cart->period->month) - ($cart->service->off * ($cart->service->price * $cart->period->month) / 100).' '}}تومان
                                                                </h4>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                                <button type="button" class="btn btn-danger btn-border-radius waves-effect"><i class="fa-solid fa-arrow-right"></i> ادامه خرید</button>
                                                <button type="button" class="btn btn-info btn-border-radius waves-effect pull-right"><i class="fa-solid fa fa-shopping-cart"></i> پرداخت</button>

                                            </div>
                                        @endforeach
                                        </div>
                                    </div>
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
    <script src="{{ asset('js/dashboard/ckeditor.js') }}"></script>

    <script src="{{ asset('/js/dashboard/content/cart.js') }}"></script>
--}}
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
@endpush
