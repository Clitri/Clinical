@extends('dashboard.layout.master')
@section('pagetitle')
    @parent
    جزئیات  طرح
@endsection

@section('content')

    <section class="content">
        <div class="content-body">
            <div class="container-fluid">
                {{--                <div class="row page-titles mx-0">--}}
                {{--                    <div class="col-sm-6 p-md-0">--}}
                {{--                        <div class="welcome-text">--}}
                {{--                            <h4>خانه > طرح > جزئیات طرح</h4>--}}
                {{--                        </div>--}}
                {{--                    </div>--}}
                {{--                </div>--}}
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="report-btns text-right"><a onClick="window.print()"
                                                                           class="report-btn button-print">چاپ</a>
                                        <a href="{{route('study.singlepdf' , ['id'=>$study->id])}}"
                                           class="report-btn button-pdf">pdf</a>
                                        <a href="{{route('study.word' , ['id'=>$study->id])}}"
                                           class="report-btn button-word">word</a></div>
                                    <div class="col-12 col-lg-4 order-md-2 mb-4 mt-3">
                                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                                            <span class="text-muted">مداخله ها</span>
                                            <span
                                                class="badge badge-primary badge-pill">{{count($study->interventions)}}</span>
                                        </h4>
                                        <ul class="list-group mb-3">
                                            @foreach($study->interventions as $intervention)
                                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                                    <div>
                                                        <h6 class="my-0">{{$intervention->type->name}}</h6>
                                                        <small class="text-muted">{{$intervention->content}}</small>
                                                    </div>
                                                </li>
                                            @endforeach
                                        </ul>
                                    </div>
                                    <div class="col-12 col-lg-8 order-md-1">
                                        <h2 class="mb-3">اطلاعات عمومی طرح</h2>
                                        <div class="box">
                                            <div class="row">
                                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                    <h4>عنوان</h4>
                                                    <p>{{ $study->title }}</p>
                                                </div>

                                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                    <h4>نام اختصاری</h4>
                                                    <p>{{ $study->name }}</p>
                                                </div>
                                                {{--                                            <div class="col-12 col-md-6 col-lg-4 mb-3">--}}
                                                {{--                                                <h4>ساختار کارآزمایی </h4>--}}
                                                {{--                                                <div class="input-group">--}}
                                                {{--                                                    <p>{{ $study->structure_plan }}</p>--}}
                                                {{--                                                </div>--}}
                                                {{--                                            </div>--}}
                                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                    <h4>طراحی مطالعه </h4>
                                                    <div class="input-group">
                                                        <p>{{ $study->study_design}}

                                                        </p>
                                                    </div>
                                                </div>
                                                {{--                                            <div class="col-12 col-md-6 col-lg-4 mb-3">--}}
                                                {{--                                                <h4 for="username">روش محاسبه نمونه</h4>--}}
                                                {{--                                                <div class="input-group">--}}
                                                {{--                                                    <p>--}}
                                                {{--                                                        @if ($study->sample == 'type1')--}}
                                                {{--                                                            قایسه میانگین دو--}}
                                                {{--                                                            جامعه--}}
                                                {{--                                                        @elseif($study->sample == 'type2')--}}
                                                {{--                                                            قایسه شیوع دو--}}
                                                {{--                                                            جامعه--}}
                                                {{--                                                        @elseif($study->sample == 'type3')--}}
                                                {{--                                                            مقایسه میانگین ها--}}
                                                {{--                                                            براساس اندازه اثر--}}
                                                {{--                                                        @elseif($study->sample == 'type4')--}}
                                                {{--                                                            تحلیل رگرسیون خطی--}}
                                                {{--                                                        @elseif($study->sample == 'type5')--}}
                                                {{--                                                            تحلیل رگرسیون--}}
                                                {{--                                                            لجستیک--}}
                                                {{--                                                        @else--}}
                                                {{--                                                            برآورد شیوع--}}
                                                {{--                                                        @endif--}}
                                                {{--                                                    </p>--}}
                                                {{--                                                </div>--}}
                                                {{--                                            </div>--}}
                                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                    <h4 for="username">تاریخ شروع کارآزمایی</h4>
                                                    <div class="input-group">
                                                        <p>{{ $study->start_date }}</p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                    <h4 for="username">تاریخ پایان کارآزمایی</h4>
                                                    <div class="input-group">
                                                        <p>{{ $study->end_date }}</p>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                    <h4 for="username">فایل</h4>
                                                    <div class="input-group">
                                                        <a href="{{ asset('/file/study/' . $study->file) }}">مشاهده فایل
                                                            پروپوزال</a>
                                                    </div>
                                                </div>
                                            </div>


                                            <hr class="mb-4">
                                            <h2 class="mb-3">اطلاعات تخصصی طرح</h2>
                                            <div class="box">
                                                <div class="row">
                                                    <div class="col-12 col-md-6 col-lg-4 mb-3">
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
                                                            @endif
                                                        </p>
                                                    </div>
                                                    <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                        <h4>فاز(مرحله)</h4>
                                                        <p>
                                                            @if ($study->phase_study == 1)
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

                                                    <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                        <h4 for="username">تصادفی‌سازی</h4>
                                                        <div class="input-group">
                                                            <p>
                                                                @if ($study->randomization == 1)
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
                                                    <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                        <h4 for="username">کورسازی</h4>
                                                        <div class="input-group">
                                                            <p>
                                                                @if ($study->blinding == 1)
                                                                    کور نشده است
                                                                @elseif($study->blinding == 2)
                                                                    افراد شرکت کننده در مطاله
                                                                @elseif($study->blinding == 2)
                                                                    افراد شرکت کننده و ارزیابی کننده پیامد در مطالعه
                                                                @else
                                                                    افراد شرکت کننده و ارزیابی کننده و تحلیلگر در مطالعه
                                                                @endif
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                        <h4 for="username">سایر مشخصات طراحی</h4>
                                                        @foreach ($spefiction as $spefiction)
                                                            <div class="input-group">
                                                                <p>{{ $spefiction->title }}</p>
                                                            </div>
                                                        @endforeach
                                                    </div>
                                                    <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                        <h4 for="username">دارونما</h4>
                                                        <div class="input-group">
                                                            <input type="checkbox" id="placebo"
                                                                   {{ $study->placebo ? 'checked' : '' }}
                                                                   readonly='readonly'/>
                                                        </div>
                                                    </div>
                                                </div>


                                                <hr class="mb-4">
                                                <h2 class="mb-3">اطلاعات شرکت‌کنندگان</h2>
                                                <div class="box">
                                                    <div class="row">

                                                        <div class="col-12 col-md-6 col-lg-4 mb-3">

                                                            <h4 for="firstName">شرایط ورود</h4>
                                                            @foreach ($entry as $entry)
                                                                <p>{{ $entry->title }}</p>
                                                            @endforeach
                                                        </div>


                                                        <div class="col-12 col-md-6 col-lg-4 mb-3">

                                                            <h4>شرط عدم ورود</h4>
                                                            @foreach ($failur as $failur)
                                                                <p>{{ $failur->title }}</p>
                                                            @endforeach
                                                        </div>

                                                        <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                            <h4 for="username"> تاریخ شروع بیمارگیری</h4>
                                                            <div class="input-group">
                                                                <p>{{ $study->start_date_illness }}</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                            <h4 for="username">تاریخ پایان بیمارگیری</h4>
                                                            <div class="input-group">
                                                                <p>{{ $study->end_date_illness }}</p>
                                                            </div>
                                                        </div>

                                                        <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                            <h4>جنسیت </h4>
                                                            <div class="input-group">
                                                                <p>{{ $study->gender->title }}</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-6 col-lg-4 mb-3">
                                                            <h4>حداکثر سن </h4>
                                                            <div class="input-group">
                                                                <p>{{ $study->maximum_age != null ? $study->maximum_age[0].'سال و '.$study->maximum_age[1].'ماه و '.$study->maximum_age[2].'روز' :'' }}</p>
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

    <script src="{{ asset('/js/dashboard/highlight.pack.min.js') }}"></script>
@endpush
