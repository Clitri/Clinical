@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
     فاکتور ها
@endsection

@section('content')
    <section class="content">
        <div class="contacts_body container-fluid">
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="card-body ">
                            <div class="wrapper wrapper-content animated fadeInRight">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-11">
                                        <div class="ibox">
                                            <div class="ibox-title">
                                                <span class="pull-right float-right">(<strong>3</strong>) آیتم</span>
                                                <h5>لیست فاکتورها</h5>
                                            </div>
                                            <div class="ibox-content">
                                                <div class="table-responsive">
                                                    <table class="table shoping-cart-table">
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="cart-product-imitation">
                                                                    <img src="images/gold.png" alt>
                                                                </div>
                                                            </td>
                                                            <td class="desc desc-serv">
                                                                <h3 class="mb-3">
                                                                    <a href="#" class="text-navy">
                                                                        سرویس طلایی
                                                                    </a>
                                                                </h3>
                                                                <p>
                                                                    (مجموع آساتنه مصرف 160گیگ داخلی معادل 80 گیگ بین الملل ) سرویس طلایی کم حجم 8 گیگ 1 ماهه
                                                                </p>
                                                            </td>
                                                            <td class="desc">
                                                                <div class="my-3">
                                                                    <h4 class="my-2"> شماره فاکتور : </h4>
                                                                    <strong>HDJBJDF4154VNJKFV354F</strong>
                                                                </div>
                                                                <div class="my-3">
                                                                    <h4 class="my-2"> بازه زمانی : </h4>
                                                                    <strong>1401/5/8  تا 1401/8/7</strong>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <h3 class="text-navy d-flex justify-content-center">
                                                        180000تومان
                                                    </h3>
                                                </div>

                                                <div class="box-btn-fact d-flex justify-content-center ">
                                                    <button class="btn btn-primary "><a href="show-factor.html ">نمایش</a></button>
                                                </div>
                                            </div>

                                            <!-- <div class=" ibox-content ">
                                                <div class="table-responsive ">
                                                    <h3 class="d-flex justify-content-center title-fact "> تمدید سرویس </h3>
                                                    <table class="table shoping-cart-table ">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div class="cart-product-imitation ">
                                                                        <img src="images/gold.png " alt>
                                                                    </div>
                                                                </td>
                                                                <td class="desc desc-serv ">
                                                                    <h4 class="mb-3 ">
                                                                        <a href="# " class=" ">
                                                                               سرویس طلایی
                                                                            </a>
                                                                    </h4>
                                                                    <p>
                                                                        (مجموع آساتنه مصرف 160گیگ داخلی معادل 80 گیگ بین الملل ) سرویس طلایی کم حجم 8 گیگ 1 ماهه
                                                                    </p>
                                                                </td>
                                                                <td class="desc desc-serv ">
                                                                    <h4 class="mb-3 ">
                                                                        <a href="# " class=" ">
                                                                               شماره فاکتور
                                                                            </a>
                                                                    </h4>
                                                                    <p>
                                                                        MNBM25BCG254522NBVGB
                                                                    </p>
                                                                </td>
                                                                <td class="desc desc-serv ">
                                                                    <h4 class="mb-3 ">
                                                                        <a href="# " class=" ">
                                                                               بازه زمانی سرویس
                                                                            </a>
                                                                    </h4>
                                                                    <p>
                                                                        1401/8/7 - 1401/7/25
                                                                    </p>
                                                                </td>
                                                                <td class="desc desc-serv ">
                                                                    <h4 class="mb-3 ">
                                                                        <a href="# " class=" ">
                                                                              مبلغ پرداخت شده
                                                                            </a>
                                                                    </h4>
                                                                    <p>
                                                                        1.250.000 ریال
                                                                    </p>
                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div class="box-btn-fact d-flex justify-content-center ">
                                                        <button class="btn btn-primary "><a href="show-factor.html ">نمایش</a></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ibox-content ">
                                                <div class="table-responsive ">
                                                    <h3 class="d-flex justify-content-center title-fact "> تمدید سرویس </h3>
                                                    <table class="table shoping-cart-table ">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div class="cart-product-imitation ">
                                                                        <img src="images/silver.png " alt>
                                                                    </div>
                                                                </td>
                                                                <td class="desc desc-serv ">
                                                                    <h4 class="mb-3 ">
                                                                        <a href="# " class=" ">
                                                                               سرویس نقره‌ای
                                                                            </a>
                                                                    </h4>
                                                                    <p>
                                                                        (مجموع آساتنه مصرف 160گیگ داخلی معادل 80 گیگ بین الملل ) سرویس طلایی کم حجم 8 گیگ 1 ماهه
                                                                    </p>
                                                                </td>
                                                                <td class="desc desc-serv ">
                                                                    <h4 class="mb-3 ">
                                                                        <a href="# " class=" ">
                                                                               شماره فاکتور
                                                                            </a>
                                                                    </h4>
                                                                    <p>
                                                                        MNBM25BCG254522NBVGB
                                                                    </p>
                                                                </td>
                                                                <td class="desc desc-serv ">
                                                                    <h4 class="mb-3 ">
                                                                        <a href="# " class=" ">
                                                                               بازه زمانی سرویس
                                                                            </a>
                                                                    </h4>
                                                                    <p>
                                                                        1401/8/7 - 1401/7/25
                                                                    </p>
                                                                </td>
                                                                <td class="desc desc-serv ">
                                                                    <h4 class="mb-3 ">
                                                                        <a href="# " class=" ">
                                                                              مبلغ پرداخت شده
                                                                            </a>
                                                                    </h4>
                                                                    <p>
                                                                        1.250.000 ریال
                                                                    </p>
                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div class="box-btn-fact d-flex justify-content-center ">
                                                        <button class="btn btn-primary "><a href="show-factor.html ">نمایش</a></button>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <div class="ibox-content-btn ">
                                                <button type="button " class="btn btn-danger btn-border-radius waves-effect "><i class="fa-solid fa-arrow-right "></i> ادامه خرید</button>
                                                <!-- <button type="button " class="btn btn-info btn-border-radius waves-effect pull-right "><i class="fa-solid fa fa-shopping-cart "></i> پرداخت</button> -->
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

