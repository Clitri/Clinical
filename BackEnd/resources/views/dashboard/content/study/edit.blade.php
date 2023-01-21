@extends('dashboard.layout.master')
@section('pagetitle')
    @parent
    ویرایش طرح
@endsection

@section('head')
    <link rel="stylesheet" href="{{ asset('/css/dashboard/fontawesome/calendar/css/kamadatepicker.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/dashboard/userGuide.css') }}" />
    <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet" />
    <link rel="stylesheet" href="{{ asset('/css/dashboard/calendar/css/kamadatepicker.css') }}" />
@endsection

@section('content')
    <section class="content">
        <div class="content-body">

            <div class="questionnaire">
                <div class="container-fluid">
                    <div class="row questionnaire-box justify-content-center h-100 align-items-center">
                        <div class="col-12 col-md-10 row px-0">
                            <div class="col-12 col-md-2 h-100 px-0 ">
                                <div class="steps px-0">

                                    <ol class="px-0 my-0 row ">

                                        <li class="step py-3" id="step1" data-step="1">
                                            <div>
                                                1
                                            </div>
                                        </li>
                                        <li class="step py-3" id="step2" data-step="2">
                                            <div>
                                                2
                                            </div>
                                        </li>
                                        <li class="step py-3" id="step3" data-step="3">
                                            <div>
                                                3
                                            </div>
                                        </li>
                                    </ol>
                                    <ol class="nav-form justif y-content-between mt-auto">
                                        <li class="nav-prev btn "><i class="fa-solid fa-angle-up align-middle"></i>
                                        </li>
                                        <li class="nav-next btn "><i class="fa-solid fa-angle-down align-middle"></i>
                                        </li>
                                    </ol>
                                </div>
                            </div>

                            <div class="col-12 col-md-10 ">
                                <div class="questions-container">
                                    <form id="study-form" action="/dashboard/study/{{ $study->id }}/edit" method="POST"
                                        autocomplete="off" enctype="multipart/form-data" class="form-questions col-12"
                                        data-id="{{ $study->id }}">
                                        @csrf
                                        @method('PUT')

                                        <div class="step-container" id="1">
                                            <h4 class="pb-2 step-title"><span></span><strong>اطلاعات عمومی طرح</strong>
                                            </h4>
                                            <div class="form-group">
                                                <div class="col-12 col-md-6 px-2">

                                                    <input type="hidden" name="dates" value="{{ $dates }}">

                                                    <label>
                                                        <strong>عنوان طرح :</strong>
                                                    </label>
                                                    <input type="text" name="title"
                                                        value="{{ old('title', $study->title) }}" class="form-control"
                                                        placeholder="عنوان" />
                                                    <div class="errors text-danger fs-6">
                                                        @error('title')
                                                            {{ $message }}
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 px-2">
                                                    <label><strong>نام اختصاری :</strong></label>
                                                    <input type="text" class="form-control"
                                                        value="{{ old('name', $study->name) }}" name="name"
                                                        placeholder="نام اختصاری" />
                                                    <div class="errors text-danger fs-6">
                                                        @error('name')
                                                            {{ $message }}
                                                        @enderror
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">

                                                <div class="col-12 col-md-6 px-2 ">
                                                    <label>
                                                        <strong>نوع طرح :</strong>
                                                    </label>
                                                    <select type="text" name="studies_type" class="form-select">

                                                        <option value="پرسشگری"
                                                            {{ old('studies_type', $study->studies_type) == 'پرسشگری' ? 'selected' : '' }}>
                                                            پرسشگری
                                                        </option>
                                                        <option value="نظر سنجی"
                                                            {{ old('studies_type', $study->studies_type) == 'نظر سنجی' ? 'selected' : '' }}>
                                                            نظرسنجی
                                                        </option>
                                                    </select>
                                                </div>

                                                <div class="col-12 col-md-6 px-2">
                                                    <label><strong>طراحی مطالعه :</strong></label>
                                                    <select name="study_design" class="form-select">
                                                        <option value="موازی"
                                                            {{ old('study_design', $study->study_design) == 'موازی' ? 'selected' : '' }}>
                                                            موازی
                                                        </option>
                                                        <option value="متقاطع"
                                                            {{ old('study_design', $study->study_design) == 'متقاطع' ? 'selected' : '' }}>
                                                            متقاطع
                                                        </option>
                                                        <option value="فاکتوریل"
                                                            {{ old('study_design', $study->study_design) == 'فاکتوریل' ? 'selected' : '' }}>
                                                            فاکتوریل
                                                        </option>
                                                        <option value="واحد"
                                                            {{ old('study_design', $study->study_design) == 'واحد' ? 'selected' : '' }}>
                                                            واحد
                                                        </option>
                                                    </select>

                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-12 col-md-6 px-2 position-relative date-inputs">
                                                    <label>
                                                        <strong>تاریخ شروع کارآزمایی :</strong>
                                                    </label>
                                                    <input type="text" class="form-control dates"
                                                        value="{{ old('start_date', $startdate) }}" id="date1"
                                                        name="start_date" placeholder="تاریخ شروع" />
                                                    <i class="fa-solid fa-calendar-days fs-4"></i>
                                                    <div class="errors text-danger fs-6">

                                                        @error('start_date')
                                                            {{ $message }}
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 px-2 position-relative date-inputs">
                                                    <label>
                                                        <strong>تاریخ پایان کارآزمایی :</strong>
                                                    </label>
                                                    <input type="text" class="form-control dates"
                                                        value="{{ old('end_date', $enddate) }}" id="date2"
                                                        name="end_date" placeholder="تاریخ پایان" />
                                                    <i class="fa-solid fa-calendar-days fs-4"></i>
                                                    <div class="errors text-danger fs-6">

                                                        @error('end_date')
                                                            {{ $message }}
                                                        @enderror
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group px-2">
                                                <div class="col-12 position-relative">
                                                    <label><strong>برچسب ها :</strong></label>
                                                    <input class="plan-tags form-control" name="tags" />
                                                    <i class="fa-solid fa-plus"></i>
                                                    <div class="text-danger errors">
                                                        @error('tags')
                                                            {{ $message }}
                                                        @enderror
                                                    </div>
                                                    <ul class="search-tags">

                                                    </ul>
                                                    <div class="tags-container py-1 w-100">
                                                        @foreach ($study->tags as $tag)
                                                            <a class="tag-item">
                                                                <i class="fa-solid fa-xmark align-middle"></i>
                                                                {{ $tag->title }}
                                                            </a>
                                                        @endforeach
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="form-group">
                                                <div class="upload-main-wrapper px-1 pt-4">
                                                    <div class="upload-wrapper">
                                                        <input type="file" name="file" id="upload-file">
                                                        <svg version="1.1" id="upload-icon"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            viewBox="224.3881704980842 176.8527621722847 221.13266283524905 178.8472378277154"
                                                            width="221.13" height="178.85">
                                                            <defs>
                                                                <path
                                                                    d="M357.38 176.85C386.18 176.85 409.53 204.24 409.53 238.02C409.53 239.29 409.5 240.56 409.42 241.81C430.23 246.95 445.52 264.16 445.52 284.59C445.52 284.59 445.52 284.59 445.52 284.59C445.52 309.08 423.56 328.94 396.47 328.94C384.17 328.94 285.74 328.94 273.44 328.94C246.35 328.94 224.39 309.08 224.39 284.59C224.39 284.59 224.39 284.59 224.39 284.59C224.39 263.24 241.08 245.41 263.31 241.2C265.3 218.05 281.96 199.98 302.22 199.98C306.67 199.98 310.94 200.85 314.93 202.46C324.4 186.96 339.88 176.85 357.38 176.85Z"
                                                                    id="b1aO7LLtdW"></path>
                                                                <path
                                                                    d="M306.46 297.6L339.79 297.6L373.13 297.6L339.79 255.94L306.46 297.6Z"
                                                                    id="c4SXvvMdYD">
                                                                </path>
                                                                <path
                                                                    d="M350.79 293.05L328.79 293.05L328.79 355.7L350.79 355.7L350.79 293.05Z"
                                                                    id="b11si2zUk"></path>
                                                            </defs>
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <use xlink:href="#b1aO7LLtdW" opacity="1"
                                                                            fill="#ccc" fill-opacity="1"></use>
                                                                    </g>
                                                                    <g>
                                                                        <g>
                                                                            <use xlink:href="#c4SXvvMdYD" opacity="1"
                                                                                fill="#115169" fill-opacity="1"></use>
                                                                        </g>
                                                                        <g>
                                                                            <use xlink:href="#b11si2zUk" opacity="1"
                                                                                fill="#115169" fill-opacity="1">
                                                                            </use>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                        <span class="file-upload-text">بارگذاری فایل پروپوزال</span>
                                                        <div class="file-success-text">
                                                            <svg class="mx-2" version="1.1" id="check"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                                                y="0px" viewBox="0 0 100 100"
                                                                xml:space="preserve">
                                                                <circle
                                                                    style="fill:rgba(0,0,0,0);stroke:#115169;stroke-width:10;stroke-miterlimit:10;"
                                                                    cx="49.799" cy="49.746" r="44.757" />
                                                                <polyline
                                                                    style="fill:rgba(0,0,0,0);stroke:#115169;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                                                                    points="
                                                            27.114,51 41.402,65.288 72.485,34.205 " />
                                                            </svg>
                                                            <span class="success-text">موفقیت آمیز</span>
                                                        </div>
                                                        <div><a id="file-upload-name"
                                                                href="{{ asset('/file/study/' . $study->file) }}">{{ $study->file }}</a>
                                                        </div>
                                                    </div>

                                                    <div class="errors text-danger fs-6">
                                                        @error('file')
                                                            {{ $message }}
                                                        @enderror

                                                    </div>
                                                    <!-- <p id="file-upload-name"></p> -->
                                                </div>
                                            </div>
                                        </div>

                                        <div class="step-container" id="2">
                                            <h4 class="pb-2 step-title"><span></span><strong>اطلاعات تخصصی طرح</strong>
                                            </h4>

                                            <div class="form-group">
                                                <div class="col-12 col-md-6 col-lg-5 px-2">
                                                    <label><strong>هدف مطالعه</strong></label>
                                                    <select name="purpose_study" class="form-select">

                                                        <option value="1"
                                                            {{ old('purpose_study', $study->purpose_study) == '1' ? 'selected' : '' }}>
                                                            علوم پایه
                                                        </option>
                                                        <option value="2"
                                                            {{ old('purpose_study', $study->purpose_study) == '2' ? 'selected' : '' }}>
                                                            تشخیصی
                                                        </option>
                                                        <option value="3"
                                                            {{ old('purpose_study', $study->purpose_study) == '3' ? 'selected' : '' }}>
                                                            تحقیقات در سیستم ارایه خدمات سلامت
                                                        </option>
                                                        <option value="4"
                                                            {{ old('purpose_study', $study->purpose_study) == '4' ? 'selected' : '' }}>
                                                            پیشگیری
                                                        </option>
                                                        <option value="5"
                                                            {{ old('purpose_study', $study->purpose_study) == '5' ? 'selected' : '' }}>
                                                            غربالگری
                                                        </option>
                                                        <option value="6"
                                                            {{ old('purpose_study', $study->purpose_study) == '6' ? 'selected' : '' }}>
                                                            حمایتی
                                                        </option>
                                                        <option value="7"
                                                            {{ old('purpose_study', $study->purpose_study) == '7' ? 'selected' : '' }}>
                                                            درمانی
                                                        </option>
                                                        <option value="8"
                                                            {{ old('purpose_study', $study->purpose_study) == '8' ? 'selected' : '' }}>
                                                            آموزشی / مشاوره ای
                                                        </option>
                                                        <option value="9"
                                                            {{ old('purpose_study', $study->purpose_study) == '9' ? 'selected' : '' }}>
                                                            موارد دیگر
                                                        </option>

                                                    </select>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-5 px-2">
                                                    <label><strong>فاز مطالعه</strong></label>
                                                    <select name="phase_study" class="form-select">
                                                        <option value="1"
                                                            {{ old('phase_study', $study->phase_study) == '1' ? 'selected' : '' }}>
                                                            0
                                                        </option>
                                                        <option value="2"
                                                            {{ old('phase_study', $study->phase_study) == '2' ? 'selected' : '' }}>
                                                            1
                                                        </option>
                                                        <option value="3"
                                                            {{ old('phase_study', $study->phase_study) == '3' ? 'selected' : '' }}>
                                                            1-2
                                                        </option>
                                                        <option value="4"
                                                            {{ old('phase_study', $study->phase_study) == '4' ? 'selected' : '' }}>
                                                            2
                                                        </option>
                                                        <option value="5"
                                                            {{ old('phase_study', $study->phase_study) == '5' ? 'selected' : '' }}>
                                                            2-3
                                                        </option>
                                                        <option value="6"
                                                            {{ old('phase_study', $study->phase_study) == '6' ? 'selected' : '' }}>
                                                            3
                                                        </option>
                                                        <option value="7"
                                                            {{ old('phase_study', $study->phase_study) == '7' ? 'selected' : '' }}>
                                                            4
                                                        </option>
                                                        <option value="8"
                                                            {{ old('phase_study', $study->phase_study) == '8' ? 'selected' : '' }}>
                                                            هم ارزی زیستی
                                                        </option>
                                                        <option value="9"
                                                            {{ old('phase_study', $study->phase_study) == '9' ? 'selected' : '' }}>
                                                            مصداق ندارد
                                                        </option>
                                                    </select>

                                                </div>
                                                <div class="col-12 col-lg-2 px-2 align-self-end pb-3">
                                                    <label><strong>دارونما :</strong></label>
                                                    <input {{ old('placebo') == 'on' || $study->placebo ? 'checked' : '' }}
                                                        type="checkbox" name="placebo" class="form-check-input" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-12 col-md-6 px-2">
                                                    <label><strong>تصادفی سازی (نظر محقق)</strong></label>
                                                    <select class="form-select" name="randomization">
                                                        <option value="1"
                                                            {{ old('randomization', $study->randomization) == '1' ? 'selected' : '' }}>
                                                            اختصاص تصادفی به گروه های مداخله و کنترل
                                                        </option>
                                                        <option value="2"
                                                            {{ old('randomization', $study->randomization) == '2' ? 'selected' : '' }}>
                                                            اختصاص غیرتصادفی به گروه های مداخله و
                                                            کنترل
                                                        </option>
                                                        <option value="3"
                                                            {{ old('randomization', $study->randomization) == '3' ? 'selected' : '' }}>
                                                            مصداق ندارد
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="col-12 col-md-6 px-2">
                                                    <label><strong>کور سازی (نظر محقق)</strong></label>
                                                    <select class="form-select" name="blinding">
                                                        <option value="1"
                                                            {{ old('blinding', $study->blinding) == '1' ? 'selected' : '' }}>
                                                            کور
                                                            نشده است
                                                        </option>
                                                        <option value="2"
                                                            {{ old('blinding', $study->blinding) == '2' ? 'selected' : '' }}>
                                                            افراد شرکت کننده در مطاله
                                                        </option>
                                                        <option value="3"
                                                            {{ old('blinding', $study->blinding) == '3' ? 'selected' : '' }}>
                                                            افراد شرکت کننده و ارزیابی کننده پیامد در مطالعه

                                                        </option>
                                                        <option value="4"
                                                            {{ old('blinding', $study->blinding) == '4' ? 'selected' : '' }}>
                                                            افراد شرکت کننده و ارزیابی کننده و تحلیلگر در مطالعه

                                                        </option>
                                                    </select>

                                                </div>


                                            </div>
                                            <div class="form-group border rounded mb-2 pb-1">
                                                <div class="col-12 px-2 pb-0 position-relative">
                                                    <label><strong>سایر مشخصات طراحی مطالعه :</strong></label>
                                                    <input type="text" class="form-control"
                                                        name="study_specifications" />
                                                    <i class="fa-solid fa-plus"></i>
                                                    <div class="errors text-danger fs-6">
                                                        @error('study_specifications')
                                                            {{ $message }}
                                                        @enderror
                                                    </div>
                                                </div>
                                                <div class="specifications">

                                                    <div class="col-12 px-3 py-0 entry-toggle3">
                                                        <i
                                                            class="fa-solid fa-angle-up align-middle  mt-1 fs-5 float-left"></i>
                                                    </div>

                                                    <div id="s-d-specifications" class="col-12 px-2 pt-2">

                                                        <div class="row mx-0">
                                                            @foreach ($spefiction as $spefiction)
                                                                <div class="col-12 entry-item">
                                                                    <p>{{ $spefiction->title }}</p>
                                                                    <span class="entry-close"><i
                                                                            class="fa-solid fa-xmark"></i></span>
                                                                </div>
                                                            @endforeach
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="form-group mt-2">
                                                <div id="intervention_box" class="px-0">

                                                    <div class="intervention-head">
                                                        ایجاد مداخله
                                                    </div>
                                                    <div id="intervention_table" class="col-12 mt-2">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>شماره</th>
                                                                    <th>نوع مداخله</th>
                                                                    <th>شرح مداخله - فارسی</th>
                                                                    <th>طبقه بندی</th>
                                                                    <th>عملیات</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                            </tbody>
                                                        </table>
                                                        <div class="text-danger errors fs-6"></div>
                                                    </div>
                                                    <div class="intervention-body">
                                                        <div class="intervention-type">
                                                            <div class="col-12 type-item">
                                                                <input type="radio" id="intervention_type"
                                                                    value="intervention"
                                                                    class="group-intervention form-check-input" />
                                                                <label>
                                                                    گروه مداخله
                                                                </label>
                                                            </div>
                                                            <div class="col-12 type-item">
                                                                <input type="radio" id="intervention_type"
                                                                    value="control"
                                                                    class="control-intervention form-check-input" />
                                                                <label>گروه کنترل</label>
                                                            </div>
                                                            <div class="col-12 pt-2">
                                                                <button type="button" class="btn btn-danger"
                                                                    id="delete_type">حذف این مورد</button>
                                                            </div>
                                                        </div>
                                                        <div class="row intervention-fields">
                                                            <div class="col-12 col-md-6">
                                                                <label><strong>شرح مداخله - فارسی</strong></label>
                                                                <input type="text" class="form-control"
                                                                    id="intervention_desc" />
                                                                <div class="text-danger errors fs-6"></div>
                                                            </div>
                                                            <div class="col-12 col-md-6">
                                                                <label><strong>طبقه بندی</strong></label>
                                                                <select id="Classification" class="form-select">
                                                                    <option value="0" selected>رفتاری</option>
                                                                    <option value="1">تشخیصی</option>
                                                                    <option value="2">تشخیص زودرس</option>
                                                                    <option value="3">شیوه زندگی</option>
                                                                    <option value="4">دارو نما</option>
                                                                    <option value="5">پیشگیری</option>
                                                                    <option value="6">توانبخشی</option>
                                                                    <option value="7">درمانی - وسایل</option>
                                                                    <option value="8">درمانی - داروها</option>
                                                                    <option value="9">درمانی جراحی</option>
                                                                    <option value="10">درمانی - غیره</option>
                                                                    <option value="11">غیره</option>
                                                                    <option value="12">مصداق ندارد</option>
                                                                </select>
                                                            </div>
                                                            <div class=" col-12 pt-2">
                                                                <button type="button" class="btn btn-danger"
                                                                    id="delete_fields">حذف این مورد</button>
                                                                <button type="button" class="btn btn-primary mr-2"
                                                                    id="record_intervention">افزودن این مورد</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 py-2">
                                                        <button type="button" id="add_intervention"
                                                            class="btn btn-primary"><i
                                                                class="fa-solid fa-plus align-middle ml-1"></i>ایجاد
                                                            مداخله</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="step-container flex-grow-1" id="3">
                                            <div class="d-flex flex-column h-100">
                                                <h4 class="pb-2 step-title"><span></span><strong>اطلاعات شرکت
                                                        کنندگان</strong></h4>


                                                <div class="form-group border rounded mb-2 pb-1">
                                                    <div class="col-12 px-2 pb-0 position-relative">
                                                        <label><strong>شرایط ورود به مطالعه :</strong></label>
                                                        <input type="text" class="form-control" name="entry_study" />
                                                        <i class="fa-solid fa-plus"></i>
                                                        <div class="errors text-danger fs-6">
                                                            @error('entry_study')
                                                                {{ $message }}
                                                            @enderror
                                                        </div>
                                                    </div>
                                                    <div class="specifications">
                                                        <div class="col-12 px-3 py-0 entry-toggle1">
                                                            <i
                                                                class="fa-solid fa-angle-up align-middle mt-1 fs-5 float-left"></i>
                                                        </div>
                                                        <div id="entry-container" class="col-12 px-2 pt-2">
                                                            <div class="row mx-0">
                                                                @foreach ($entry as $entry)
                                                                    <div class="col-12 entry-item">
                                                                        <p>{{ $entry->title }}</p>
                                                                        <span class="entry-close"><i
                                                                                class="fa-solid fa-xmark"></i></span>
                                                                    </div>
                                                                @endforeach
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group border rounded mb-2 pb-1">
                                                    <div class="col-12 px-2 pb-0 position-relative">
                                                        <label><strong>شرایط عدم ورود به مطالعه :</strong></label>
                                                        <input type="text" class="form-control"
                                                            name="failure_entry_study" />
                                                        <i class="fa-solid fa-plus"></i>
                                                        <div class="errors text-danger fs-6">
                                                            @error('failure_entry_study')
                                                                {{ $message }}
                                                            @enderror
                                                        </div>
                                                    </div>
                                                    <div class="specifications">
                                                        <div class="col-12 px-3 py-0 entry-toggle2">
                                                            <i
                                                                class="fa-solid fa-angle-up align-middle  mt-1 fs-5 float-left"></i>
                                                        </div>
                                                        <div id="fail-entry-container" class="col-12 px-2 pt-2">
                                                            <div class="row mx-0">
                                                                @foreach ($failur as $failur)
                                                                    <div class="col-12 entry-item">
                                                                        <p>{{ $failur->title }}</p>
                                                                        <span class="entry-close"><i
                                                                                class="fa-solid fa-xmark"></i></span>
                                                                    </div>
                                                                @endforeach
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group">

                                                    <div class="col-12 px-2">
                                                        <input type="checkbox"
                                                            {{ old('termination_illness') == 'on' || !empty($study->start_get_sick_ended) ? 'checked' : '' }}
                                                            name="termination_illness" class="form-check-input" />
                                                        <label><strong>بیمارگیری خاتمه یافته است</strong></label>
                                                    </div>
                                                    <div class="col-12 col-md-6 px-2 position-relative date-inputs">
                                                        <label>
                                                            <strong>{{ old('termination_illness') == 'on' || !empty($study->start_get_sick_ended) ? 'تاریخ شروع بیمارگیری خاتمه یافته :' : 'تاریخ شروع بیمارگیری :' }}</strong>
                                                        </label>
                                                        <input type="text" class="form-control dates"
                                                            value="{{ old($study->start_date_illness != null ? 'start_date_illness' : 'start_get_sick_ended', $study->start_date_illness != null ? $datestartillness : $datestart) }}"
                                                            id="date3"
                                                            name="{{ old('termination_illness') == 'on' || !empty($study->start_get_sick_ended) ? 'start_get_sick_ended' : 'start_date_illness' }}"
                                                            placeholder="تاریخ شروع" />
                                                        <i class="fa-solid fa-calendar-days fs-4"></i>
                                                        <div class="errors text-danger fs-6">

                                                            @if ($errors->has('start_get_sick_ended'))
                                                                @error('start_get_sick_ended')
                                                                    {{ $message }}
                                                                @enderror
                                                            @elseif($errors->has('start_date_illness'))
                                                                @error('start_date_illness')
                                                                    {{ $message }}
                                                                @enderror
                                                            @endif
                                                            @if (Session::has('error'))
                                                                {{ Session::get('error') }}
                                                            @endif
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6 px-2 position-relative date-inputs">
                                                        <label>
                                                            <strong>{{ old('termination_illness') == 'on' || !empty($study->start_get_sick_ended) ? 'تاریخ پایان بیمارگیری خاتمه یافته :' : 'تاریخ پایان بیمارگیری :' }}</strong>
                                                        </label>
                                                        <input type="text" class="form-control dates"
                                                            value="{{ old($study->end_date_illness != null ? 'end_date_illness' : 'end_get_sick_ended', $study->end_date_illness != null ? $dateendillness : $dateend) }}"
                                                            id="date4"
                                                            name="{{ old('termination_illness') == 'on' || !empty($study->end_get_sick_ended) ? 'end_get_sick_ended' : 'end_date_illness' }}"
                                                            placeholder="تاریخ پایان" />
                                                        <i class="fa-solid fa-calendar-days fs-4"></i>
                                                        <div class="errors text-danger fs-6">
                                                            @if ($errors->has('end_date_illness'))
                                                                @error('end_date_illness')
                                                                    {{ $message }}
                                                                @enderror
                                                            @elseif($errors->has('end_get_sick_ended'))
                                                                @error('end_get_sick_ended')
                                                                    {{ $message }}
                                                                @enderror
                                                            @endif
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="form-group">
                                                    <div class="col-12 col-md-6 px-2">
                                                        <label><strong>جنسیت :</strong></label>
                                                        <select name="gender" class="form-select">
                                                            @foreach ($genders as $gender)
                                                                <option value="{{ $gender->id }}"
                                                                    {{ $study->gender_id == $gender->id ? 'selected' : '' }}>
                                                                    {{ $gender->title }}
                                                                </option>
                                                            @endforeach

                                                        </select>

                                                    </div>
                                                    <div
                                                        class="col-6 col-md-3 px-2 mb-2 align-self-end position-relative text-center">
                                                        <label><strong>حداقل سن :</strong></label>
                                                        <input type="checkbox" name="minimum_age"
                                                            class="form-check-input" id="min-age-check"
                                                            {{ old('minimum_age') == 'on' || $study->minimum_age != null ? 'checked' : '' }} />

                                                        <div class="date-box">
                                                            <div class="row mx-0 my-2">
                                                                <label class="col-6 pt-1">
                                                                    <strong>سال :</strong>
                                                                </label>
                                                                <input
                                                                    value="{{ $study->minimum_age != null ? old('min_year', $study->minimum_age[0]) : old('min_year', 0) }}"
                                                                    min="1" type="number" disabled
                                                                    name="min_year"
                                                                    class="col-6 form-control age-fields" />
                                                                <div class="errors text-danger fs-6"></div>
                                                            </div>
                                                            <div class="row mx-0 my-2">
                                                                <label class="col-6 pt-1">
                                                                    <strong>ماه:</strong>
                                                                </label>
                                                                <input
                                                                    value="{{ $study->minimum_age != null ? old('min_month', $study->minimum_age[1]) : old('min_year', 0) }}"
                                                                    min="1" max="12" type="number" disabled
                                                                    name="min_month"
                                                                    class="col-6 form-control age-fields" />
                                                                <div class="errors text-danger fs-6"></div>
                                                            </div>
                                                            <div class="row mx-0 my-2">
                                                                <label class="col-6 pt-1">
                                                                    <strong>روز :</strong>
                                                                </label>
                                                                <input
                                                                    value="{{ $study->minimum_age != null ? old('min_day', $study->minimum_age[2]) : old('min_year', 0) }}"
                                                                    min="1" max="31" type="number" disabled
                                                                    name="min_day"
                                                                    class="col-6 form-control age-fields" />
                                                                <div class="errors text-danger fs-6"></div>
                                                            </div>
                                                            <div class="row mx-0 my-2">
                                                                <button class="btn btn-primary"
                                                                    id="submit-min-age">ثبت</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="col-6 col-md-3 px-2 mb-2 align-self-end position-relative text-center">
                                                        <label><strong>حداکثر سن :</strong></label>
                                                        <input type="checkbox" name="maximum_age"
                                                            class="form-check-input" id="max-age-check"
                                                            {{ old('maximum_age') == 'on' || $study->maximum_age != null ? 'checked' : '' }} />

                                                        <div class="date-box">
                                                            <div class="row mx-0 my-2">
                                                                <label class="col-6 pt-1">
                                                                    <strong>سال :</strong>
                                                                </label>
                                                                <input
                                                                    value="{{ $study->maximum_age != null ? old('max_year', $study->maximum_age[0]) : old('min_year', 0) }}"
                                                                    min="1" type="number" disabled
                                                                    name="max_year"
                                                                    class="col-6 form-control age-fields" />
                                                                <div class="errors text-danger fs-6"></div>
                                                            </div>
                                                            <div class="row mx-0 my-2">
                                                                <label class="col-6 pt-1">
                                                                    <strong>ماه:</strong>
                                                                </label>
                                                                <input
                                                                    value="{{ $study->maximum_age != null ? old('max_month', $study->maximum_age[1]) : old('min_year', 0) }}"
                                                                    min="1" max="12" type="number" disabled
                                                                    name="max_month"
                                                                    class="col-6 form-control age-fields" />
                                                                <div class="errors text-danger fs-6"></div>
                                                            </div>
                                                            <div class="row mx-0 my-2">
                                                                <label class="col-6 pt-1">
                                                                    <strong>روز :</strong>
                                                                </label>
                                                                <input
                                                                    value="{{ $study->maximum_age != null ? old('max_day', $study->maximum_age[2]) : old('min_year', 0) }}"
                                                                    min="1" max="31" type="number" disabled
                                                                    name="max_day"
                                                                    class="col-6 form-control age-fields" />
                                                                <div class="errors text-danger fs-6"></div>
                                                            </div>
                                                            <div class="row mx-0 my-2">
                                                                <button class="btn btn-primary"
                                                                    id="submit-max-age">ثبت</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="pt-3 px-2 text-center mt-auto">
                                                    <button id="submit-plan">ثبت طرح</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="shortNext" class="text-center">
                                            <button type="button" class="btn btn-primary">بعدی<i
                                                    class="fa-solid fa-angles-left align-middle mr-1"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="wrapper">
                                <div class="preloader"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="user_guide">

                <div id="step_guide_box">
                    <span id="guide_open">
                        <i class="fa-solid fa-question align-middle text-white fs-4"></i>
                    </span>
                    <span class="step-guide" data-step="0">1</span>
                    <span class="step-guide" data-step="1">2</span>
                    <span class="step-guide" data-step="2">3</span>
                </div>

                <div id="guide_cover">
                    <span class="close">
                        <i class="fa-solid fa-xmark"></i>
                    </span>
                    <div id="guide_box">
                        <div class="guide-head">
                            <h3></h3>
                        </div>
                        <div class="guide-body">
                            <h4></h4>
                        </div>
                    </div>
                    <div id="background_guide"></div>
                </div>
            </div>

        </div>
    </section>
@endsection

@push('scripts')
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('/js/dashboard/questionnaire.js') }}"></script>
    <script src="{{ asset('/js/dashboard/kamadatepicker.js') }}"></script>
    <script src="{{ asset('/js/dashboard/formula-control.js') }}"></script>
    <script src="{{ asset('/js/dashboard/calendar-init.js') }}"></script>
    <script src="{{ asset('/js/dashboard/validation-plan.js') }}"></script>
    <script src="{{ asset('/js/dashboard/specification-submit.js') }}"></script>
    <script src="{{ asset('js/dashboard/study.js') }}"></script>
    <script src="{{ asset('/js/dashboard/userGuide.js') }}"></script>

    <script src="{{ asset('js/dashboard/intervention-control.js') }}"></script>
    <script src="{{ asset('js/dashboard/fetch-intervention.js') }}"></script>
@endpush
