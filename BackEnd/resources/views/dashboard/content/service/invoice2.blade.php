@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    فاکتور
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
                                        <div class="ibox ibox-fact">
                                            <div class="ibox-title">
                                                <h5>لیست فاکتورها</h5>
                                            </div>
                                            <div class="ibox-content">
                                                <div class="table-responsive">
                                                    <h3 class="d-flex justify-content-center title-fact"> فاکتور GVNBVJH5MHBJB </h3>
                                                    <hr>
                                                    <table class="table shoping-cart-table">
                                                        <tbody>
                                                        <tr>
                                                            <td class="desc">
                                                                <h4 class="mb-3 d-flex justify-content-center">
                                                                    <a href="#" class="text-navy">
                                                                        هزینه پیامک
                                                                    </a>
                                                                </h4>
                                                                <div class="d-flex box-num-ser">
                                                                    <p class="px-3">
                                                                        تعداد :
                                                                    </p>
                                                                    <p class="px-3">3</p>
                                                                </div>
                                                                <div class="d-flex box-num-ser">
                                                                    <p class="px-3">
                                                                        قیمت :
                                                                    </p>
                                                                    <p class="px-3">15000 ریال</p>
                                                                </div>

                                                            </td>
                                                            <td class="desc">
                                                                <h4 class="mb-3 d-flex justify-content-center">
                                                                    <a href="#" class="text-navy">
                                                                        سرویس نقره ‌ای کم حجم 8 مگ 3 ماهه
                                                                    </a>
                                                                </h4>
                                                                <div class="d-flex box-num-ser">
                                                                    <p class="px-3">
                                                                        تعداد :
                                                                    </p>
                                                                    <p class="px-3">3</p>
                                                                </div>
                                                                <div class="d-flex box-num-ser">
                                                                    <p class="px-3">
                                                                        قیمت :
                                                                    </p>
                                                                    <p class="px-3">15000 ریال</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="row justify-content-center d-flex">

                                                <div class="col-md-6 col-xs-10 col-fact">
                                                    <div class="card card-desc">
                                                        <div class="card-body cb-desc card-desc-fact">
                                                            <p>مقدار کل : 300 تومان</p>
                                                            <p>تخفیف : 10 تومان </p>
                                                            <p>مالیات (10٪) : 14 تومان </p>
                                                            <hr>
                                                            <h3>
                                                                <b>مجموع :</b> 304 تومان</h3>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <!-- <div class="ibox-content-btn">
                                                <button type="button" class="btn btn-danger btn-border-radius waves-effect"><i class="fa-solid fa-arrow-right"></i> ادامه خرید</button>
                                                <button type="button" class="btn btn-info btn-border-radius waves-effect pull-right"><i class="fa-solid fa fa-shopping-cart"></i> پرداخت</button>
                                            </div> -->
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

