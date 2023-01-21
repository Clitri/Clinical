<section class="ds ms section_padding_top_100 section_padding_bottom_100 page_services parallax">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center mx-auto">
                <h2 class="section_header highlight3">خدمات پزشکی ما</h2>
                <p class="bold grey">
                    با این حال، در مواقع خاص، اغلب به دلیل الزامات یا ضروریات زندگی
                    چنین خواهد شد که هم لذت ها را باید نفی کرد و هم آزارها را نپذیرفت
                </p>
            </div>
        </div>
        <div class="row topmargin_50 columns_margin_bottom_60">
            @foreach ($medicals as $medical )
                
           
            <div class="col-md-4 col-sm-6 text-center">
                <div class="teaser">
                    <img src="{{asset('/images/'.$medical['img'])}}" alt>
                    <h4 class="grey">
                        <a href="{{$medical['link']}}">{{$medical['title']}}</a>
                    </h4>
                    <p>
                       {{$medical['content']}}
                    </p>
                </div>
            </div>
            @endforeach
            {{-- <div class="col-md-4 col-sm-6 text-center">
                <div class="teaser">
                    <img src="{{asset('/images/medical.png')}}" alt>
                    <h4 class="grey">
                        <a href="single-service.html">خدمات پزشکی ما</a>
                    </h4>
                    <p>
                        این موارد کاملا ساده و آسان برای تشخیص یک ساعت رایگان زمانی که قدرت ما است
                    </p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 text-center">
                <div class="teaser">
                    <img src="{{asset('/images/emergency.png')}}" alt>
                    <h4 class="grey">
                        <a href="single-service.html">خدمات پزشکی ما</a>
                    </h4>
                    <p>
                        این موارد کاملا ساده و آسان برای تشخیص یک ساعت رایگان زمانی که قدرت ما است
                    </p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 text-center lg-clearfix">
                <div class="teaser">
                    <img src="{{asset('/images/symptom.png')}}" alt>
                    <h4 class="grey">
                        <a href="single-service.html">خدمات پزشکی ما</a>
                    </h4>
                    <p>
                        این موارد کاملا ساده و آسان برای تشخیص یک ساعت رایگان زمانی که قدرت ما است
                    </p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 text-center">
                <div class="teaser">
                    <img src="images/laboratory.png" alt>
                    <h4 class="grey">
                        <a href="single-service.html">خدمات پزشکی ما</a>
                    </h4>
                    <p>
                        این موارد کاملا ساده و آسان برای تشخیص یک ساعت رایگان زمانی که قدرت ما است
                    </p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 text-center">
                <div class="teaser">
                    <img src="images/general.png" alt>
                    <h4 class="grey">
                        <a href="single-service.html">خدمات پزشکی ما</a>
                    </h4>
                    <p>
                        این موارد کاملا ساده و آسان برای تشخیص یک ساعت رایگان زمانی که قدرت ما است
                    </p>
                </div>
            </div> --}}
        </div>
    </div>
</section>