<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>


        * {
            margin: 0;
            padding: 0;
        }

        body {
            direction: rtl;
            font-size: 0.9em;
            font-family: 'examplefont', sans-serif;
            text-align: center;
        }

        .col-lg-4 {
            width: 33%;
            box-sizing: border-box;
            padding: 5px 10px;
            float: right;
        }

        .box {
            padding: 20px;
        }

        .box h4 {
            margin-bottom: 10px;
        }

        .box::after {
            content: "";
            display: block;
            clear: both;
        }

        .mb-3 {
            margin-bottom: 20px;
        }

        .mb-1 {
            margin-bottom: 10px;
        }

        .pdf-content h2 {
            padding: 20px;
        }

        .pagination {
            text-align: center;
            padding: 10px;
            border-radius: 5px;
            background-color: #2091bd;
            color: white;
            font-size: 1.3em;
        }
    </style>
</head>

<body>
<div class="pdf-content">
    <h2>اطلاعات طرح</h2>
    <div class="date">{{ $date }}</div>
    <h2 class="mb-1">اطلاعات عمومی طرح</h2>
    <div class="box">
        <div class="row">
            <div class="col-lg-4 mb-3">
                <h4>عنوان</h4>
                <p>{{$study->title}}</p>
            </div>

            <div class=" col-lg-4 mb-3">
                <h4>نام اختصاری</h4>
                <p>{{$study->name}}</p>
            </div>
            <div class=" col-lg-4 mb-3">
                <h4>طراحی مطالعه </h4>
                <div class="input-group">
                    <p>{{ $study->study_design}}</p>
                </div>
            </div>
            <div class=" col-lg-4 mb-3">
                <h4 for="username">فایل</h4>
                <div class="input-group">
                    <a href="{{ asset('/file/study/' . $study->file) }}">مشاهده فایل پروپوزال</a>
                </div>
            </div>
            <div class=" col-lg-4 mb-3">
                <h4 for="username">  تاریخ شروع کارآزمایی</h4>
                <div class="input-group">
                    <p>{{ $study->start_date }}</p>
                </div>
            </div>
            <div class=" col-lg-4 mb-3">
                <h4 for="username">  تاریخ پایان کارآزمایی</h4>
                <div class="input-group">
                    <p>{{ $study->end_date }}</p>
                </div>
            </div>
        </div>
    </div>

    <hr class="mb-4">
    <h2 class="mb-1">اطلاعات تخصصی طرح</h2>
    <div class="box">
        <div class="row">
            <div class=" col-lg-4 mb-3">
                <h4 for="firstName">هدف مطالعه</h4>
                <p>
                    @if ($study->purpose_study == 1)
                        علوم پایه
                    @elseif ($study->purpose_study == 2)
                        تشخیصی
                    @elseif ($study->purpose_study == 3)
                        حقیقات در
                        سیستم ارایه خدمات سلامت
                    @elseif ($study->purpose_study == 4)
                        پیشگیری
                    @elseif ($study->purpose_study == 5)
                        غربالگری
                    @elseif ($study->purpose_study == 6)
                        حمایتی
                    @elseif ($study->purpose_study == 7)
                        درمانی
                    @elseif ($study->purpose_study == 8)
                        آموزشی / مشاوره
                        ای
                    @else
                        موارد دیگر
                    @endif</p>
            </div>
            <div class=" col-lg-4 mb-3">
                <h4>فاز(مرحله)</h4>
                <p> @if ($study->phase_study == 1)
                        0
                    @elseif($study->phase_study == 2)
                        1
                    @elseif($study->phase_study == 3)
                        1-2
                    @elseif($study->phase_study == 4)
                        2
                    @elseif($study->phase_study == 5)
                        2-3
                    @elseif($study->phase_study == 6)
                        3
                    @elseif($study->phase_study == 7)
                        4
                    @elseif($study->phase_study == 8)
                        هم ارزی زیستی
                    @else
                        مصداق ندارد
                    @endif
                </p>
            </div>

            <div class=" col-lg-4 mb-3">
                <h4 for="username">تصادفی‌سازی</h4>
                <div class="input-group">
                    <p>@if ($study->randomization == 1)
                            اختصاص تصادفی به
                            گروه های مداخله و کنترل
                        @elseif($study->randomization == 2)
                            اختصاص غیرتصادفی
                            کنترلر
                        @else
                            مصداق ندارد
                        @endif
                    </p>
                </div>
            </div>
            <div class=" col-lg-4 mb-3">
                <h4 for="username">کورسازی</h4>
                <div class="input-group">
                    <p> @if ($study->blinding == 1)
                            کور نشده است
                        @elseif($study->blinding == 2)
                            یک
                            سویه کور
                        @elseif($study->blinding == 2)
                            دو سویه کور
                        @else
                            سویه کور
                        @endif
                    </p>
                </div>
            </div>

            <div class=" col-lg-4 mb-3">
                <h4 for="username">سایر مشخصات طراحی</h4>
                @foreach ($study->studyspecification as $spefiction)
                    <div class="input-group">
                        <p>{{ $spefiction->title }}</p>
                    </div>
                @endforeach

            </div>
            <div class=" col-lg-4 mb-3">
                <h4 for="username">دارونما</h4>
                <div class="input-group">
                    <!-- <input type="checkbox" id="دارونما" value="دارونما" /> -->
                    {{ $study->placebo ? 'فعال' : 'غیر فعال' }}
                </div>
            </div>
        </div>
    </div>

    <hr class="mb-4">
    <h2 class="mb-1">اطلاعات شرکت‌کنندگان</h2>
    <div class="box">
        <div class="row">
            <div class=" col-lg-4 mb-3">
                <h4 for="firstName">شرایط ورود</h4>
                @foreach ($study->entrystudy as $entry)
                    <p>{{ $entry->title }}</p>
                @endforeach
            </div>
            <div class=" col-lg-4 mb-3">
                <h4>شرط عدم ورود</h4>
                @foreach ($study->failurestudy as $failur)
                    <p>{{ $failur->title }}</p>
                @endforeach
            </div>

            <div class=" col-lg-4 mb-3">
                <h4 for="username">  تاریخ شروع بیمارگیری</h4>
                <div class="input-group">
                    <p>{{ $study->start_date_illness }}</p>
                </div>
            </div>

            <div class=" col-lg-4 mb-3">
                <h4 for="username">  تاریخ پایان بیمارگیری</h4>
                <div class="input-group">
                    <p>{{ $study->end_date_illness }}</p>
                </div>
            </div>
            <div class=" col-lg-4 mb-3">
                <h4>حداقل سن </h4>
                <div class="input-group">
                    <p>{{ $study->minimum_age != null ? $study->minimum_age[0].'سال و '.$study->minimum_age[1].'ماه و '.$study->minimum_age[2].'روز' :'' }}</p>
                </div>
            </div>
            <div class=" col-lg-4 mb-3">
                <h4>حداکثر سن </h4>
                <div class="input-group">
                    <p>{{ $study->maximum_age != null ? $study->maximum_age[0].'سال و '.$study->maximum_age[1].'ماه و '.$study->maximum_age[2].'روز' :'' }}</p>
                </div>
            </div>
            <div class=" col-lg-4 mb-3">
                <h4>جنسیت </h4>
                <div class="input-group">
                    <p>{{ $study->gender->title }}</p>
                </div>
            </div>
            <div class=" col-lg-4 mb-3">
                <h4 for="firstName">مداخله ها</h4>
                @foreach ($study->interventions as $intervention)
                    <p>{{ $intervention->content }}</p>
                @endforeach
            </div>
        </div>

    </div>
</div>
</body>

</html>
