@extends('layout.master')

@section('pagetitle','تماس با ما')

@section('content')
    <x-pagehead text="تماس با ما" />
    <section class="ls section_padding_top_100 section_padding_bottom_75">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <section id="map" class="ls ms" data-address="14 Harriet Walk Belgravia, London">
                        <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no"
                                marginheight="0" marginwidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=iran+(My%20Business%20Name)&amp;t=&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                                    href="https://www.maps.ie/distance-area-calculator.html">measure distance on
                                    map</a></iframe></div>

                    </section>
                </div>
            </div>


            <x-contact phone="+12 345 678 9123" fax="+12 345 678 9123" mailbox="صندوق پستی 54378" address="4321 آدرس شما"
                country="شهر شما، کشور شما" email="info@company.com" />


{{--            <div class="row">--}}
{{--                <div class="col-sm-12 to_animate">--}}
{{--                    <form class="contact-form columns_padding_5" method="post" action="./">--}}
{{--                        <div class="row">--}}

{{--                            <div class="col-sm-6">--}}
{{--                                <p class="contact-form-name">--}}
{{--                                    <label for="name">نام و نام خانوادگی--}}
{{--                                        <span class="required">*</span>--}}
{{--                                    </label>--}}
{{--                                    <input type="text" aria-required="true" size="30" value name="name"--}}
{{--                                        id="name" class="form-control" placeholder="نام و نام خانوادگی">--}}
{{--                                </p>--}}
{{--                                <p class="contact-form-email">--}}
{{--                                    <label for="email">آدرس ایمیل--}}
{{--                                        <span class="required">*</span>--}}
{{--                                    </label>--}}
{{--                                    <input type="email" aria-required="true" size="30" value name="email"--}}
{{--                                        id="email" class="form-control" placeholder="آدرس ایمیل">--}}
{{--                                </p>--}}
{{--                                <p class="contact-form-subject">--}}
{{--                                    <label for="subject">موضوع--}}
{{--                                        <span class="required">*</span>--}}
{{--                                    </label>--}}
{{--                                    <input type="text" aria-required="true" size="30" value name="subject"--}}
{{--                                        id="subject" class="form-control" placeholder="موضوع">--}}
{{--                                </p>--}}
{{--                            </div>--}}
{{--                            <div class="col-sm-6">--}}

{{--                                <p class="contact-form-message">--}}
{{--                                    <label for="message">پیام</label>--}}
{{--                                    <textarea aria-required="true" rows="7" cols="45" name="message" id="message" class="form-control"--}}
{{--                                        placeholder="پیام"></textarea>--}}
{{--                                </p>--}}
{{--                            </div>--}}
{{--                        </div>--}}
{{--                        <div class="row">--}}
{{--                            <div class="col-sm-12">--}}

{{--                                <p class="contact-form-submit text-center topmargin_30">--}}
{{--                                    <button type="submit" id="contact_form_submit" name="contact_submit"--}}
{{--                                        class="theme_button color1">ارسال پیام</button>--}}
{{--                                </p>--}}
{{--                            </div>--}}

{{--                        </div>--}}
{{--                    </form>--}}
{{--                </div>--}}
{{--            </div>--}}
        </div>
    </section>





    <!-- to Top Button -->
    <a id="toTop">
    </a>
@endsection
