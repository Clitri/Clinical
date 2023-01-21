<footer class="page_footer parallax ds ms section_padding_50 columns_padding_25" id="contact">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-12">
                <a href="index" class="logo bottommargin_20">
                    <img src="{{asset('/images/logo.png')}}" alt>
                </a>
                <p>
                    Clitri به عنوان یک سیستم‌های الکترونیکی جمع‌آوری داده‌ها(EDC) ، یک دستیار تحقیقات بالینی است که برای افزایش ظرفیت های پایه جهت نوآوری و کمک به تولید دانش ملی در حوزه سلامت، مدیریت و هماهنگی مطالعات بالینی مصوب در دانشگاهها و شرکت های خصوصی فعال در زمینه محصولات دارویی و پزشک است.
                </p>
            </div>

            <div class="col-md-4 col-sm-6">
                <div class="topmargin_20">
                    <h5 class="bottommargin_30">پیشنهادات </h5>
                    <form id="suggestion-form" method="post" action="{{route('suggestion.store')}}" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="footer-email"> ایمیل
                                <span class="required">*</span>
                            </label>
                            <i class="rt-icon2-mail2"></i>
                            <input type="email" aria-required="true" size="30" value name="email" id="footer-email" class="form-control" placeholder>
                        </div>
                        <div class="form-group">
                            <label for="footer-message">پیام</label>
                            <i class="rt-icon2-pencil3"></i>
                            <textarea name="content" id="footer-message" class="form-control" placeholder></textarea>
                        </div>
                        <div class="form-div form-group">
                            <label for="">فایل</label>
                            <label for="file" class="input-label form-control"> <i class="fa-solid fa-paperclip"></i>
                                <span id="label-span"></span>
                            </label>
                            <input type="file" class="" name="file" id="file" multiple="true">
                        </div>
                        <div class="contact-form-submit topmargin_40">
                            <button type="submit" id="footer_contact_form_submit" name="contact_submit" class="theme_button color1">ارسال
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <div class="col-md-4 col-sm-6">
                <div class="topmargin_20">
                    <h5 class="bottommargin_30">مخاطبین</h5>

                    <div class="media small-teaser">
                        <div class="media-left">
                            <i class="rt-icon2-map2 highlight fontsize_24"></i>
                        </div>
                        <div class="media-body">
                            صندوق پستی 97845 Some str. 567, لس آنجلس, کالیفرنیا, ایالات متحده است
                        </div>
                    </div>

                    <div class="media small-teaser">
                        <div class="media-left">
                            <i class="rt-icon2-device-phone highlight fontsize_24"></i>
                        </div>
                        <div class="media-body">
                            +65 (800) 695-2684
                        </div>
                    </div>

                    <div class="media small-teaser">
                        <div class="media-left">
                            <i class="rt-icon2-printer2 highlight fontsize_24"></i>
                        </div>
                        <div class="media-body">
                            +65 (800) 695-2686
                        </div>
                    </div>

                    <div class="media small-teaser">
                        <div class="media-left">
                            <i class="rt-icon2-mail2 highlight fontsize_24"></i>
                        </div>
                        <div class="media-body">
                            <a href="/cdn-cgi/l/email-protection#83faecf6f1c3eee2eaefade0ecee"><span
                                    class="__cf_email__"
                                    data-cfemail="8af3e5fff8cae7ebe3e6a4e9e5e7">[email&#160;protected]</span></a>
                        </div>
                    </div>

                    <div class="topmargin_30">
                        <a href="#" class="social-icon color-bg-icon soc-facebook"></a>
                        <a href="#" class="social-icon color-bg-icon soc-twitter"></a>
                        <a href="#" class="social-icon color-bg-icon soc-google"></a>
                        <a href="#" class="social-icon color-bg-icon soc-linkedin"></a>
                        <a href="#" class="social-icon color-bg-icon soc-pinterest"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
