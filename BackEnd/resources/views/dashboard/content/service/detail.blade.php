@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    جزییات سرویس
@endsection

@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="body">
{{--                            <div class="block-header">--}}
{{--                                <div class="row">--}}
{{--                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">--}}
{{--                                        <ul class="breadcrumb breadcrumb-style ">--}}
{{--                                            <li class="bcrumb-1">--}}
{{--                                                <a href="index_1.html">خانه</a>--}}
{{--                                            </li>--}}
{{--                                            <li class="bcrumb-2">--}}
{{--                                                <a href="#" onClick="return false;">مبلمان</a>--}}
{{--                                            </li>--}}
{{--                                            <li class="bcrumb-3">--}}
{{--                                                <a href="#" onClick="return false;">صندلی</a>--}}
{{--                                            </li>--}}
{{--                                        </ul>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                            </div>--}}
                            <div class="card-body ">
                                <div class="product-store pro-str-tab">
                                    <div class="row">

                                        <div class="col-lg-11 col-sm-9 ">
                                            <div class="tab-content" id="v-pills-tabContent">
                                                <div class="tab-pane bg-pro-gold fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <div class="card-body ">
                                                        <div class="product-store">
                                                            <div class="row">
                                                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                                    <div class="product-gallery d-flex">
                                                                        <div class="product-gallery-featured">
                                                                            <img src="{{asset('/images/service/'.$service->img)}}" alt>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                                    <div class="product-payment-details">
{{--                                                                        <p class="last-sold text-muted"><small>145 مورد فروخته شد</small></p>--}}
                                                                        <h4 class="product-title mb-2">{{$service->title}}</h4>
                                                                        <h2 class="product-price display-4">{{$service->price}}</h2>
{{--                                                                        <p><i class="fa-solid fa-credit-card text-success"></i> <strong>بدون هزینه انتشار 19165 تومان در ماه</strong></p>--}}
{{--                                                                        <p><i class="fa-solid fa-swatchbook col-cyan"></i> <strong>بانک ارائه می دهد 10٪ تخفیف فوری در مسترکارت برای اولین پرداخت آنلاین</strong></p>--}}
                                                                        <p><i class="fa-solid fa-bookmark col-red"></i> <strong>{!!$service->content!!}</strong></p>
{{--                                                                        <p><i class="fa-solid fa-credit-card text-success"></i> <strong>بدون هزینه انتشار 19165 تومان در ماه</strong></p>--}}
                                                                        <div class="d-flex box-lenght-serv">
                                                                            <label class="label-lenght">مدت</label>
                                                                            <select class="form-control" id="inputState" data-id="{{$service->id}}">
                                                                                @foreach(\App\Models\service\ServicePeriod::all() as $period)
                                                                                <option value="{{$period->id}}">{{$period->month}} ماهه</option>
                                                                                @endforeach
                                                                            </select>
                                                                        </div>
                                                                        <p id="price"> {{($service->price * 3) - ($service->off * ($service->price * 3) / 100).' تومان '}} </p>

                                                                        <button id="cart_button" type="button" data-id="{{$service->id}}" class="btn btn-warning waves-effect">
                                                                            <a href="">
                                                                            <i class="fas fa-cart-plus"></i>
                                                                            <span>افزودن به سبد خرید</span>
                                                                            </a>
                                                                        </button>
                                                                        <button type="button" class="btn btn-info waves-effect">
                                                                            <i class="fas fa-bolt"></i>
                                                                            <span>خرید حالا</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane bg-pro-silver fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                    <div class="card-body ">
                                                        <div class="product-store">
                                                            <div class="row">
                                                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                                    <div class="product-gallery d-flex">
                                                                        <div class="product-gallery-featured">
                                                                            <img src="images/silver.png" alt>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                                    <div class="product-payment-details">
                                                                        <p class="last-sold text-muted"><small>145 مورد فروخته شد</small></p>
                                                                        <h4 class="product-title mb-2">صندلی متالیک چوبی در چرم سیاه </h4>
                                                                        <h2 class="product-price display-4">70000 تومان</h2>
                                                                        <p><i class="fa-solid fa-credit-card text-success"></i> <strong>بدون هزینه انتشار 19165 تومان در ماه</strong></p>
                                                                        <p><i class="fa-solid fa-swatchbook col-cyan"></i> <strong>بانک ارائه می دهد 10٪ تخفیف فوری در مسترکارت برای اولین پرداخت آنلاین</strong></p>
                                                                        <p><i class="fa-solid fa-bookmark col-red"></i> <strong>شریک پیشنهاد خرید این لپ تاپ و گرفتن 2 سال گارانتی تمدید @ ₹2999</strong></p>
                                                                        <p><i class="fa-solid fa-credit-card text-success"></i> <strong>بدون هزینه انتشار 19165 تومان در ماه</strong></p>
                                                                        <div class="d-flex box-lenght-serv">
                                                                            <label class="label-lenght">مدت</label>
                                                                            <select class="form-control" id="inputState">
                                                                                <option>یک ماهه</option>
                                                                                <option> دو ماهه</option>
                                                                                <option> سه ماهه</option>
                                                                            </select>
                                                                        </div> <button type="button" class="btn btn-warning waves-effect">
                                                                            <i class="fas fa-cart-plus"></i>
                                                                            <span>افزودن به سبد خرید</span>
                                                                        </button>
                                                                        <button type="button" class="btn btn-info waves-effect">
                                                                            <i class="fas fa-bolt"></i>
                                                                            <span>خرید حالا</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane bg-pro-bronze fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                    <div class="card-body ">
                                                        <div class="product-store">
                                                            <div class="row">
                                                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                                    <div class="product-gallery d-flex">
                                                                        <div class="product-gallery-featured">
                                                                            <img src="images/bronze.png" alt>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                                    <div class="product-payment-details">
                                                                        <p class="last-sold text-muted"><small>145 مورد فروخته شد</small></p>
                                                                        <h4 class="product-title mb-2">صندلی متالیک چوبی در چرم سیاه </h4>
                                                                        <h2 class="product-price display-4">70000 تومان</h2>
                                                                        <p><i class="fa-solid fa-credit-card text-success"></i> <strong>بدون هزینه انتشار 19165 تومان در ماه</strong></p>
                                                                        <p><i class="fa-solid fa-swatchbook col-cyan"></i> <strong>بانک ارائه می دهد 10٪ تخفیف فوری در مسترکارت برای اولین پرداخت آنلاین</strong></p>
                                                                        <p><i class="fa-solid fa-bookmark col-red"></i> <strong>شریک پیشنهاد خرید این لپ تاپ و گرفتن 2 سال گارانتی تمدید @ ₹2999</strong></p>
                                                                        <p><i class="fa-solid fa-credit-card text-success"></i> <strong>بدون هزینه انتشار 19165 تومان در ماه</strong></p>
                                                                        <div class="d-flex box-lenght-serv">
                                                                            <label class="label-lenght">مدت</label>
                                                                            <select class="form-control" id="inputState">
                                                                                <option>یک ماهه</option>
                                                                                <option> دو ماهه</option>
                                                                                <option> سه ماهه</option>
                                                                            </select>
                                                                        </div> <button type="button" class="btn btn-warning waves-effect">
                                                                            <i class="fas fa-cart-plus"></i>
                                                                            <span>افزودن به سبد خرید</span>
                                                                        </button>
                                                                        <button type="button" class="btn btn-info waves-effect">
                                                                            <i class="fas fa-bolt"></i>
                                                                            <span>خرید حالا</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
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
         <script src="{{ asset('js/dashboard/ckeditor-init.js') }}"></script>
@endpush
