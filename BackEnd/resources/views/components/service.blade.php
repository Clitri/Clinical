<section class="ls section_padding_top_100 section_padding_bottom_100 features position-relative">
    <div class="features-bg"></div>
    <div class="container">
        <div class="row justify-content-center">
            <div class=" col-md-10 mt-5 zindex-10">
                <h2 class="section_header mb-3 text-center">چه چیزی ما را متفاوت می کند
                </h2>
                <p class="bold bottommargin_30 mb-5 text-center">از سوی دیگر، ما با خشم عادلانه آن را محکوم
                    می کنیم
                    و از مردانی که از جذابیت های لحظه ای آنقدر فریب خورده و روحیه شان را تضعیف می کنند،
                    بیزار باشید.</p>
                    
                <div class="row my-4">
                    @foreach ($services as $service)

                       
                            <div class="col-sm-4 text-center">
                                <div class="media img-media-teaser">
                                    <div class="media-left media-middle">
                                        <img src="{{ asset('/images/' . $service['img']) }}" alt>
                                    </div>
                                    <div class="media-body media-middle">
                                        <h4 class="bold text-uppercase mb-2">
                                            <a href="{{ $service['link'] }}">{{ $service['title'] }}</a>
                                        </h4>
                                        <p class="">{{ $service['content'] }}</p>
                                    </div>
                                </div>

                            </div>
                        @endforeach 

                 
                </div>
            </div>
        </div>
</section>
