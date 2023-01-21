<section class="ds ms section_padding_100 parallax page_testimonials columns_margin_0 direction-ltr">
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1 text-center mx-auto">
                <h2 class="section_header highlight3 direction-rtl">آنچه پژوهشگران در مورد clitri میگویند</h2>
                <div class="owl-carousel topmargin_60 owl-comments" data-dots="true" data-responsive-lg="1"
                    data-responsive-md="1" data-responsive-sm="1">
                    @foreach ($slider as $sliders)
                        <blockquote class="no-border">
                            <p class="yantramanov">
                                {{ $sliders['content'] }}
                            </p>
                            <div class="item-meta small-text2">


                                <span class="icon-user">
                                    <i class="fa-solid fa-user"></i>
                                </span>
                                {{ $sliders['title'] }}
                            </div>
                        </blockquote>
                    @endforeach


                </div>
            </div>
        </div>
    </div>
</section>
