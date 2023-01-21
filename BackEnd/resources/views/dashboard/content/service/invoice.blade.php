@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    فاکتور
@endsection

@section('content')
    <section class="content">
        <div class=" container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul class="breadcrumb breadcrumb-style ">
                            <li class="breadcrumb-item">
                                <h4 class="page-title">صورت حساب</h4>
                            </li>
                            <li class="breadcrumb-item bcrumb-1">
                                <a href="index_1.html">
                                    خانه</a>
                            </li>
                            <li class="breadcrumb-item active">صورت حساب</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="card">
                        <div class="body">
                            <div class="row">
                                <div class="col-md-6 col-xs-12">
                                    <h4 class="text-center title-invo"> صورتحساب از : </h4>
                                    <address class="text-center">
                                        دانشگاه آزاد،
                                        انتهای بزرگراه شهید ستاری،
                                        میدان دانشگاه،
                                        تهران - 380015
                                    </address>
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <h4 class="text-center title-invo"> صورتحساب به : </h4>
                                    <address class="text-center">
                                        دانشگاه آزاد،
                                        انتهای بزرگراه شهید ستاری،
                                        میدان دانشگاه،
                                        تهران - 380015
                                    </address>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-8">
                                    <div class="table-responsive m-t-40">
                                        <table class="table tbl-pro table-hover">
                                            <thead>
                                            <tr>
                                                <th class="text-center">#</th>
                                                <th class="text-center">تصویر</th>
                                                <th class="text-center">توضیحات</th>
                                                <th class="text-center">تعداد</th>
                                                <th class="text-center">بهای واحد</th>
                                                <th class="text-right">مجموع</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td class="text-center">1</td>
                                                <td class="table-img text-center">
                                                    <img src="images/p5.jpg" alt>
                                                </td>
                                                <td class="text-center">لورم ایپسوم متن ساختگی با تولید سادگی </td>
                                                <td class="text-center">1</td>
                                                <td class="text-center">100تومان</td>
                                                <td class="text-right">100تومان</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">2</td>
                                                <td class="table-img text-center">
                                                    <img src="images/p7.jpg" alt>
                                                </td>
                                                <td class="text-center">لورم ایپسوم متن ساختگی با تولید سادگی </td>
                                                <td class="text-center">3</td>
                                                <td class="text-center">50تومان</td>
                                                <td class="text-right">150تومان</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">3</td>
                                                <td class="table-img text-center">
                                                    <img src="images/p6.jpg" alt>
                                                </td>
                                                <td class="text-center">لورم ایپسوم متن ساختگی با تولید سادگی </td>
                                                <td class="text-center">2</td>
                                                <td class="text-center">25تومان</td>
                                                <td class="text-right">50تومان</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                            <div class="row justify-content-center d-flex">

                                <div class="col-md-6 col-xs-10">
                                    <div class="card card-desc">
                                        <div class="card-body cb-desc">
                                            <p>مقدار کل: 300 تومان</p>
                                            <p>تخفیف : 10 تومان </p>
                                            <p>مالیات (10٪): 14 تومان </p>
                                            <hr>
                                            <h3>
                                                <b>مجموع :</b> 304 تومان</h3>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center">
                                            <button class="btn-hover btn-border-radius color-1"><i class="fas fa-print"></i>
                                                چاپ</button>
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

