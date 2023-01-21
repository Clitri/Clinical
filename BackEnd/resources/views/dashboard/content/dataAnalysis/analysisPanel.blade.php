@extends('dashboard.layout.master')
@section('pagetitle', 'آنالیز داده ها')

@section('content')

<section class="content"> <div class="content-body">

    <div class="container-fluid">
        <div class="row mx-0">
            <div class="analysis-panel">
                <div class="analysis-tabs">
                    <div class="tab-item">
                        <div class="">
                            <i class="fa-solid fa-spell-check"></i>
                            <p>دیکشنری داده</p>
                        </div>
                    </div>
                    <div class="tab-item">
                        <div class="">
                            <i class="fa-solid fa-database"></i>
                            <p>داده ها</p>
                        </div>
                    </div>
                    <div class="tab-item">
                        <div class="">
                            <i class="fa-solid fa-chart-column"></i>
                            <p>آمار توصیفی</p>
                        </div>
                    </div>
                    <div class="tab-item">
                        <div class="">
                            <i class="fa-solid fa-compass-drafting"></i>
                            <p>آمار تحلیلی</p>
                        </div>
                    </div>
                </div>
                <div class="analysis-content">
                    <div class="content-item" id="content-1">
                        <div class="analysis-guide">
                            <div class="d-flex">
                                <i class="fa-solid fa-circle-question"></i>
                                <h3>راهنمای اخطار در ستون وضعیت</h3>
                            </div>
                            <p>0:کد دارای حروف غیرانگلیسی است. 1: کد دارای فاصله است. 2: کد با عدد شروع میشود.
                                3: کد تکراری است. 4: ایراد در گزینه ها است.</p>
                        </div>
                        <div class="analysis-body">
                            <div class="d-flex flex-wrap justify-content-between">
                                <div class="px-2">
                                    <a class="analysis-btn bg-green">
                                        <i class="fa-solid fa-file-lines align-middle"></i>
                                        خروجی CSV
                                    </a>
                                    <a class="analysis-btn bg-orange">
                                        <i class="fa-solid fa-file-excel align-middle"></i>
                                        خروجی XLS
                                    </a>
                                </div>
                                <div class="px-2">
                                    <a class="analysis-play-btn analysis-btn">
                                        <i class="fa-solid fa-play align-middle"></i>
                                        اعمال تغییرات
                                    </a>
                                    <a class="analysis-btn">
                                        <i class="fa-solid fa-arrows-rotate align-middle"></i>
                                        بروزرسانی
                                    </a>
                                    <a class="analysis-btn bg-danger">
                                        <i class="fa-solid fa-trash-can align-middle"></i>
                                        حذف تغییرات
                                    </a>
                                </div>
                            </div>
                            <div class="analysis-data">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>وضعیت</th>
                                            <th>کد فرم</th>
                                            <th>کد ستون</th>
                                            <th>عنوان ستون</th>
                                            <th>نوع ستون</th>
                                            <th>شرط نمایش</th>
                                            <th>برچسب</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td><input type='text' /><i
                                                    class="fa-solid fa-magnifying-glass"></i></td>
                                            <td><input type='text' /><i
                                                    class="fa-solid fa-magnifying-glass"></i></td>
                                            <td><input type='text' /><i
                                                    class="fa-solid fa-magnifying-glass"></i></td>
                                            <td><input type='text' /><i
                                                    class="fa-solid fa-magnifying-glass"></i></td>
                                            <td><input type='text' /><i
                                                    class="fa-solid fa-magnifying-glass"></i></td>
                                            <td><input type='text' /><i
                                                    class="fa-solid fa-magnifying-glass"></i></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>فعال</td>
                                            <td>12314</td>
                                            <td>سوال 1</td>
                                            <td>نام و نام خانوادگی</td>
                                            <td>str</td>
                                            <td></td>
                                            <td></td>
                                            <td><i class="fa-solid fa-pen-to-square"></i></td>
                                        </tr>
                                        <tr>
                                            <td>فعال</td>
                                            <td>12314</td>
                                            <td>سوال 1</td>
                                            <td>نام و نام خانوادگی</td>
                                            <td>str</td>
                                            <td></td>
                                            <td></td>
                                            <td><i class="fa-solid fa-pen-to-square"></i></td>
                                        </tr>
                                        <tr>
                                            <td>فعال</td>
                                            <td>12314</td>
                                            <td>سوال 1</td>
                                            <td>نام و نام خانوادگی</td>
                                            <td>str</td>
                                            <td></td>
                                            <td></td>
                                            <td><i class="fa-solid fa-pen-to-square"></i></td>
                                        </tr>
                                        <tr>
                                            <td>فعال</td>
                                            <td>12314</td>
                                            <td>سوال 1</td>
                                            <td>نام و نام خانوادگی</td>
                                            <td>str</td>
                                            <td></td>
                                            <td></td>
                                            <td><i class="fa-solid fa-pen-to-square"></i></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><i class="fa-solid fa-pen-to-square"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="content-item" id="content-2">
                        <div class="row mx-0">
                            <div class="data-tabs col-12 col-lg-3">
                                <div class="data-tab-item">
                                    <i class="fa-solid fa-chart-pie"></i>
                                    <p> گزارشگیری از اطلاعات</p>
                                </div>
                                <div class="data-tab-item">
                                    <i class="fa-solid fa-list-check"></i>
                                    <p> خلاصه پرونده</p>
                                </div>
                                <div class="data-tab-item">
                                    <i class="fa-solid fa-shapes"></i>
                                    <p>گروه بندی</p>
                                </div>
                            </div>
                            <div class="data-contents col-12 col-lg-9">
                                <div class="data-content-item">
                                    <div class="analysis-guide">
                                        <div class="d-flex">
                                            <i class="fa-solid fa-circle-question"></i>
                                            <h3>راهنمای استفاده از فیلتر داده ها</h3>
                                        </div>
                                        <p>1: ابتدا با کمک پرسشنامه، فیلتر مورد نظر خود را بسازید. 2: گزینه
                                            افزودن فیلتر را انتخاب کنید تا به لیست فیلتر های انتخابی افزوده شود.
                                        </p>
                                    </div>
                                    <div class="filter-list">
                                        <div>
                                            <select class="form-select">
                                                <option selected>انتخاب پرسشنامه</option>
                                            </select>
                                        </div>
                                        <a href="#" class="analysis-btn"><i
                                                class="fa-solid fa-plus align-middle"></i>
                                            افزودن به لیست فیلتر ها</a>
                                        <div class="filter-list-box">
                                            <h4><i class="fa-solid fa-plus align-middle ml-1"></i>لیست فیلترهای
                                                انتخابی:</h4>

                                        </div>
                                    </div>
                                    <div class="report-form">
                                        <form>
                                            <div class="row mx-0 align-items-start">
                                                <div class="form-group col-12 col-md-6 col-lg-3">
                                                    <lable>نحوه نمایش عنوان ستون ها:</lable>
                                                    <div class="answers">
                                                        <input type="radio" checked name="col-title"
                                                            class="form-check-input" />
                                                        نمایش عنوان سوال
                                                    </div>
                                                    <div class="answers">
                                                        <input type="radio" name="col-title"
                                                            class="form-check-input" />
                                                        نمایش کد سوال
                                                    </div>
                                                </div>

                                                <div class="form-group col-12 col-md-6 col-lg-3">
                                                    <lable>سطر های داده:</lable>
                                                    <div class="answers">
                                                        <input type="radio" checked name="data-row"
                                                            class="form-check-input" />
                                                        نمایش همه داده ها
                                                    </div>
                                                    <div class="answers">
                                                        <input type="radio" name="data-row"
                                                            class="form-check-input" />
                                                        نمایش آخرین داده های ثبت شده
                                                    </div>
                                                </div>
                                                <div class="form-group col-12 col-md-6 col-lg-3">
                                                    <label>تاریخ شروع :</label>
                                                    <input type="text" id="date1" class="form-control dates" />
                                                    <label>تاریخ پایان :</label>
                                                    <input type="text" id="date2" class="form-control dates" />
                                                </div>
                                                <div class="form-group col-12 col-md-6 col-lg-3">
                                                    <label>ساختار ذخیره اطلاعات :</label>
                                                    <select class="form-select">
                                                        <option selected>XLSX</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="report-btns">
                                                <a class="analysis-btn"><i
                                                        class="fa-solid fa-play align-middle ml-1"></i>اعمال و
                                                    نمایش</a>
                                                <a class="analysis-btn"><i
                                                        class="fa-solid fa-download align-middle ml-1"></i>اعمال
                                                    و
                                                    دانلود</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="data-content-item">
                                    <div class="analysis-guide">
                                        <div class="d-flex">
                                            <i class="fa-solid fa-circle-question"></i>
                                            <h3>راهنمای استفاده از فیلتر داده ها</h3>
                                        </div>
                                        <p>1: ابتدا با کمک پرسشنامه، فیلتر مورد نظر خود را بسازید. 2: گزینه
                                            افزودن فیلتر را انتخاب کنید تا به لیست فیلتر های انتخابی افزوده شود.
                                        </p>
                                    </div>
                                    <div class="filter-list">
                                        <div>
                                            <select class="form-select">
                                                <option selected>انتخاب پرسشنامه</option>
                                            </select>
                                        </div>
                                        <a href="#" class="analysis-btn"><i
                                                class="fa-solid fa-plus align-middle"></i>
                                            افزودن به لیست فیلتر ها</a>
                                        <div class="filter-list-box">
                                            <h4><i class="fa-solid fa-plus align-middle ml-1"></i>لیست فیلترهای
                                                انتخابی:</h4>

                                        </div>
                                    </div>
                                    <div class="summary-preview">
                                        <div class="text-end">
                                            <a class="analysis-btn" href="#">
                                                <i class="fa-solid fa-paste align-middle ml-1"></i>
                                                ایجاد خلاصه پرونده
                                            </a>
                                        </div>
                                        <div>
                                            <h4><i class="fa-solid fa-eye align-middle ml-1"></i>پیش نمایش :
                                            </h4>
                                        </div>
                                    </div>

                                </div>
                                <div class="data-content-item">
                                    <div class="analysis-guide">
                                        <div class="d-flex">
                                            <i class="fa-solid fa-circle-question"></i>
                                            <h3>راهنمای استفاده از فیلتر داده ها</h3>
                                        </div>
                                        <p>1: ابتدا با کمک پرسشنامه، فیلتر مورد نظر خود را بسازید. 2: گزینه
                                            افزودن فیلتر را انتخاب کنید تا به لیست فیلتر های انتخابی افزوده شود.
                                        </p>
                                    </div>
                                    <div class="filter-list">
                                        <div>
                                            <select class="form-select">
                                                <option selected>انتخاب پرسشنامه</option>
                                            </select>
                                        </div>
                                        <a href="#" class="analysis-btn"><i
                                                class="fa-solid fa-plus align-middle"></i>
                                            افزودن به لیست فیلتر ها</a>
                                        <div class="filter-list-box">
                                            <h4><i class="fa-solid fa-plus align-middle ml-1"></i>لیست فیلترهای
                                                انتخابی:</h4>

                                        </div>
                                    </div>
                                    <div class="table-groups">
                                        <div
                                            class="d-flex justify-content-between border-bottom align-items-center">
                                            <h3>
                                                گروه ها
                                            </h3>
                                            <a href="#" class="analysis-btn">
                                                <i class="fa-solid fa-plus align-middle ml-1"></i>
                                                افزودن به گروه ها
                                            </a>
                                        </div>
                                        <div class="analysis-data mt-3">
                                            <button class="reload-groups"><i
                                                    class="fa-solid fa-arrows-rotate align-middle"></i></button>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>عنوان</th>
                                                        <th>کد فرم</th>
                                                        <th>ستون ها</th>
                                                        <th>شرط ها</th>
                                                        <th>عملیات</th>
                                                    </tr>
                                                </thead>
                                                <tbody>


                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td><i class="fa-solid fa-trash-can align-middle"></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-item" id="content-3">
                        <div class="analysis-data mt-3">
                            <button class="reload-groups"><i
                                    class="fa-solid fa-arrows-rotate align-middle"></i></button>
                            <table>
                                <thead>
                                    <tr>
                                        <th>کد فرم</th>
                                        <th>عنوان ستون</th>
                                        <th>کد ستون</th>
                                        <th>تعداد پاسخ ها</th>
                                        <th>تعداد پاسخ گم شده</th>
                                        <th>پاسخ گم شده(%)</th>
                                        <th>پَرش</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    <tr>
                                        <td>0</td>
                                        <td>نام و نام خانوادگی</td>
                                        <td>fullname</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0.00</td>
                                        <td>0</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>نام و نام خانوادگی</td>
                                        <td>fullname</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0.00</td>
                                        <td>0</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>نام و نام خانوادگی</td>
                                        <td>fullname</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0.00</td>
                                        <td>0</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>نام و نام خانوادگی</td>
                                        <td>fullname</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0.00</td>
                                        <td>0</i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>0</td>
                                        <td>نام و نام خانوادگی</td>
                                        <td>fullname</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>0.00</td>
                                        <td>0</i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="content-item" id="content-4"></div>
                </div>
            </div>
        </div>
    </div>
</div>

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
     @endpush
