@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    مدیریت  طرح ها
@endsection

@section('head')
    <link href="{{ asset('/css/dashboard/jquery.dataTables.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/dashboard/buttons-datatable.css') }}" />
    <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet" />

@endsection

@section('content')

    <section class="content">
        <div class="content-body">
            <div class="container-fluid">


                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">جدول داده های طرح ها</h4>
                            </div>
                            <div class="row">
                                <div class="container">
                                    <form id="search" class="search-study">
                                        @csrf
                                        <div class="form-group">
                                            <div class="col-md-2">
                                                <label>
                                                    <strong>نوع طرح :</strong>
                                                </label>
                                                <select type="text" name="studies_type" class="form-select">
                                                    <option selected disabled>انتخاب کنید</option>
                                                    <option value="پرسشگری">پرسشگری</option>
                                                    <option value="نظرسنجی">نظرسنجی</option>
                                                </select>
                                            </div>
                                            <div class="col-md-2">
                                                <label><strong>طراحی مطالعه :</strong></label>
                                                <select name="study_design" class="form-select">
                                                    <option selected disabled>انتخاب کنید</option>
                                                    <option value="موازی">موازی</option>
                                                    <option value="متقاطع">متقاطع</option>
                                                    <option value="فاکتوریل">فاکتوریل</option>
                                                    <option value="واحد">واحد</option>
                                                </select>
                                            </div>
                                            <div class="col-md-2">
                                                <label><strong>هدف مطالعه</strong></label>
                                                <select name="purpose_study" class="form-select">
                                                    <option selected disabled>انتخاب کنید</option>
                                                    <option value="1">علوم
                                                        پایه
                                                    </option>
                                                    <option value="2">تشخیصی
                                                    </option>
                                                    <option value="3">تحقیقات
                                                        در
                                                        سیستم ارایه خدمات سلامت
                                                    </option>
                                                    <option value="4">پیشگیری
                                                    </option>
                                                    <option value="5">غربالگری
                                                    </option>
                                                    <option value="6">حمایتی
                                                    </option>
                                                    <option value="7">درمانی
                                                    </option>
                                                    <option value="8">آموزشی /
                                                        مشاوره
                                                        ای
                                                    </option>
                                                    <option value="9">موارد
                                                        دیگر
                                                    </option>
                                                </select>
                                            </div>

                                            <div class="col-md-2">
                                                <label><strong>تصادفی سازی</strong></label>
                                                <select class="form-select" name="randomization">
                                                    <option selected disabled>انتخاب کنید</option>
                                                    <option value="1">اختصاص
                                                        تصادفی
                                                        به
                                                        گروه های مداخله و کنترل
                                                    </option>
                                                    <option value="2">اختصاص
                                                        غیرتصادفی
                                                        به گروه های مداخله و
                                                        کنترل
                                                    </option>
                                                    <option value="3">مصداق
                                                        ندارد
                                                    </option>
                                                </select>
                                            </div>

                                            <div class="col-md-2">
                                                <label><strong>کور سازی</strong></label>
                                                <select class="form-select" name="blinding">
                                                    <option selected disabled>انتخاب کنید</option>
                                                    <option value="1">
                                                        کور نشده است
                                                    </option>
                                                    <option value="2">
                                                        افراد شرکت کننده در مطاله
                                                    </option>
                                                    <option value="3">
                                                        افراد شرکت کننده و ارزیابی کننده پیامد در مطالعه

                                                    </option>
                                                    <option value="4">
                                                        افراد شرکت کننده و ارزیابی کننده و تحلیلگر در مطالعه

                                                    </option>
                                                </select>
                                            </div>

                                            <div class="col-md-1">
                                                <label><strong>دارونما :</strong></label>
                                                <input type="checkbox" name="placebo" class="form-check-input" />

                                            </div>
                                            <div class="col-md-1">
                                                <button type="submit" class="btn btn-primary">جست‌وجو</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="example3" class="display">
                                        <thead>
                                        <tr>
                                            <th>ردیف</th>
                                            <th>عنوان طرح</th>
                                            <th>نوع طرح</th>
                                            <th>تاریخ شروع کار آزمایی</th>
                                            <th>تاریخ پایان کارآزمایی</th>
                                            <th>وضعیت</th>
                                        </tr>
                                        </thead>
                                        <tbody id="study-table">
                                        @php($counter = 1 )
                                        @foreach ( $studies as $study )
                                            <tr id="study-{{$study->id}}">
                                                <td>{{$counter++}}</td>
                                                <td>{{$study->title}}</td>
                                                <td>{{$study->studies_type}}</td>
                                                <td>{{$study->start_date}}</td>
                                                <td>{{$study->end_date}}</td>
                                                <td>
                                                        {{$study->status ? 'تایید شده' : 'تایید نشده'}}
                                                </td>

                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                    {{ $studies->links('pagination.default') }}
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
         <script src="{{ asset('/js/dashboard/content/search-study.js') }}"></script>
@endpush
