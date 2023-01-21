<div id="about-me"class="tab-pane fade active show ">
{{--    <div class="profile-about-me">--}}

{{--        <div class="pt-4 border-bottom-1 pb-3">--}}
{{--            <h4 class="text-primary">درباره من</h4>--}}
{{--            <p class="mb-2">آرامشی شگفت انگیز وجودم را گرفته است--}}
{{--                تمام روح، مثل این صبح های شیرین بهاری که من--}}
{{--                با تمام وجودم لذت ببرم من تنها هستم و جذابیت را احساس می کنم--}}
{{--                هستی برای سعادت روح هایی مانند من آفریده شده است. من هستم--}}
{{--                خیلی خوشحالم، دوست عزیزم، به معنایی عالی--}}
{{--                از وجود آرام صرف، که استعدادهایم را نادیده می گیرم.</p>--}}
{{--            <p>آرامشی شگفت انگیز وجودم را گرفته است--}}
{{--                تمام روح، مثل این صبح های شیرین بهاری که من--}}
{{--                با تمام وجودم لذت ببرم من تنها هستم و جذابیت را احساس می کنم--}}
{{--                هستی برای سعادت روح هایی مانند من آفریده شده است. من هستم--}}
{{--                خیلی خوشحالم، دوست عزیزم، به معنایی عالی--}}
{{--                از وجود آرام صرف، که استعدادهایم را نادیده می گیرم.</p>--}}
{{--        </div>--}}
{{--    </div>--}}

{{--     @if(auth()->user()->researcher()->exists())--}}

{{--    <div class="profile-skills mb-5">--}}
{{--        <h4 class="text-primary mb-2">اطلاعات تحصیلی</h4>--}}
{{--        <a href="javascript:void()"--}}
{{--            class="btn btn-primary light btn-xs mb-1">--}}

{{--        </a>--}}
{{--         <a href="javascript:void()"--}}
{{--         class="btn btn-primary light btn-xs mb-1">{{ $user->researcher->range }}</a>--}}
{{--            <a href="javascript:void()"--}}
{{--                class="btn btn-primary light btn-xs mb-1">{{$user->researcher->major}}</a>--}}
{{--            <a href="javascript:void()"--}}
{{--                class="btn btn-primary light btn-xs mb-1">{{$user->researcher->proficiency}}</a>--}}
{{--            <a href="javascript:void()"--}}
{{--                class="btn btn-primary light btn-xs mb-1"> {{$user->researcher->university}} </a>--}}

{{--    </div>--}}
{{--     @endif--}}


    @if ($profile)
        <div class="profile-personal-info">
            <h4 class="text-primary mb-4">اطلاعات شخصی</h4>
            <div class="row mb-2">

                <div class="col-3">
                    <h5 class="f-w-500">نام :
                    </h5>
                </div>
                <div class="col-9"><span id="name_profile">{{ $user->name }}</span>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-3">
                    <h5 class="f-w-500">ایمیل :
                    </h5>
                </div>
                <div class="col-9"><span id="email_profile"><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                            data-cfemail=>{{ $user->email }}</a></span>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-3">
                    <h5 class="f-w-500">  تلفن :
                    </h5>
                </div>
                <div class="col-9"><span id="phone_profile">{{ $user->profile->phone }}</span>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-3">
                    <h5 class="f-w-500">ادرس :
                    </h5>
                </div>
                <div class="col-9"><span id="address_profile">{{ $user->profile->address }}</span>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-3">
                    <h5 class="f-w-500">شهر :
                    </h5>
                </div>
                <div class="col-9"><span>{{ $state->name.' '.$city->name }}</span>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-3">
                    <h5 class="f-w-500">شغل :</h5>
                </div>
                <div class="col-9"><span id="job_profile">{{ $user->profile->job }}</span>
                </div>
            </div>
        </div>
    @endif
           @if (auth()->user()->researcher()->exists())
            <div class="profile-personal-info">
                <h4 class="text-primary mb-4">اطلاعات تحصیلی</h4>
                <div class="row mb-2">
                    <div class="col-3">
                        <h5 class="f-w-500">مرتبه علمی
                        </h5>
                    </div>
                    <div class="col-9"><span id="range_researcher">{{ $user->researcher->range }}</span>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-3">
                        <h5 class="f-w-500">رشته تحصیلی
                        </h5>
                    </div>
                    <div class="col-9"><span id="major_resercher">{{ $user->researcher->major }}</span>
                    </div>

                </div>
                <div class="row mb-2">
                    <div class="col-3">
                        <h5 class="f-w-500">تخصص
                        </h5>
                    </div>
                    <div class="col-9"><span id="proficiency_researcher">{{ $user->researcher->proficiency }}</span>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-3">
                        <h5 class="f-w-500">دانشگاه
                        </h5>
                    </div>
                    <div class="col-9"><span id="university_researcher">{{ $user->researcher->university }}</span>
                    </div>

                </div>

                <div class="row mb-2">
                    <div class="col-3">
                        <h5 class="f-w-500">سازمان
                        </h5>
                    </div>
                    <div class="col-9"><span id="organization_researcher">{{ $user->researcher->organization }}</span>
                    </div>
                </div>


        @endif

</div>



{{--<div id="about-me-research" class="tab-pane fade {{ !$profile && $user->researcher ? 'active show' : '' }}">--}}

{{--    <div class="profile-about-me">--}}
{{--        <div class="pt-4 border-bottom-1 pb-3">--}}
{{--            <h4 class="text-primary">درباره من</h4>--}}
{{--            <p class="mb-2">آرامشی شگفت انگیز وجودم را گرفته است--}}
{{--                تمام روح، مثل این صبح های شیرین بهاری که من--}}
{{--                با تمام وجودم لذت ببرم من تنها هستم و جذابیت را احساس می کنم--}}
{{--                هستی برای سعادت روح هایی مانند من آفریده شده است. من هستم--}}
{{--                خیلی خوشحالم، دوست عزیزم، به معنایی عالی--}}
{{--                از وجود آرام صرف، که استعدادهایم را نادیده می گیرم.</p>--}}
{{--            <p>آرامشی شگفت انگیز وجودم را گرفته است--}}
{{--                تمام روح، مثل این صبح های شیرین بهاری که من--}}
{{--                با تمام وجودم لذت ببرم من تنها هستم و جذابیت را احساس می کنم--}}
{{--                هستی برای سعادت روح هایی مانند من آفریده شده است. من هستم--}}
{{--                خیلی خوشحالم، دوست عزیزم، به معنایی عالی--}}
{{--                از وجود آرام صرف، که استعدادهایم را نادیده می گیرم.</p>--}}
{{--        </div>--}}
{{--    </div>--}}

{{--       @if ($user->researcher)--}}
{{--        <div class="profile-personal-info">--}}
{{--            <h4 class="text-primary mb-4">اطلاعات تحصیلی</h4>--}}
{{--            <div class="row mb-2">--}}
{{--                <div class="col-3">--}}
{{--                    <h5 class="f-w-500">مرتبه علمی--}}
{{--                    </h5>--}}
{{--                </div>--}}
{{--                <div class="col-9"><span id="range_researcher">{{ $user->researcher->range }}</span>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--            <div class="row mb-2">--}}
{{--                <div class="col-3">--}}
{{--                    <h5 class="f-w-500">رشته تحصیلی--}}
{{--                    </h5>--}}
{{--                </div>--}}
{{--                <div class="col-9"><span id="major_resercher">{{ $user->researcher->major }}</span>--}}
{{--                </div>--}}

{{--            </div>--}}
{{--            <div class="row mb-2">--}}
{{--                <div class="col-3">--}}
{{--                    <h5 class="f-w-500">تخصص--}}
{{--                    </h5>--}}
{{--                </div>--}}
{{--                <div class="col-9"><span id="proficiency_researcher">{{ $user->researcher->proficiency }}</span>--}}
{{--                </div>--}}
{{--            </div>--}}

{{--            <div class="row mb-2">--}}
{{--                <div class="col-3">--}}
{{--                    <h5 class="f-w-500">دانشگاه--}}
{{--                    </h5>--}}
{{--                </div>--}}
{{--                <div class="col-9"><span id="university_researcher">{{ $user->researcher->university }}</span>--}}
{{--                </div>--}}

{{--            </div>--}}

{{--            <div class="row mb-2">--}}
{{--                <div class="col-3">--}}
{{--                    <h5 class="f-w-500">سازمان--}}
{{--                    </h5>--}}
{{--                </div>--}}
{{--                <div class="col-9"><span id="organization_researcher">{{ $user->researcher->organization }}</span>--}}
{{--                </div>--}}
{{--            </div>--}}


{{--    @endif--}}
{{--</div>--}}
