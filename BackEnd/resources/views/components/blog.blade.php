<section class="ls ms section_padding_top_100 section_padding_bottom_100 section-news">
    <div class="container">
        <div class="row">
            <div class="col-md-10 text-center mx-auto">
                <h2 class="section_header">آخرین اخبار و وبلاگ ما</h2>
                <p class="bold">
                    اما به خاطر صداقت و با تسلط، به زبان یونانی، گویی می خواهد به او بیاموزد یا از دیگری می
                    ترسد.
                    یا به او در هر زمان برای لذت ها یا لذت هایی که برخی از آنها شهروندان خوب هستند.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 mx-auto mt-5 see-more-container">
                <div class="row owl-news top-offset with-nav" data-nav="true" data-responsive-lg="3"
                    data-responsive-md="2" data-responsive-sm="2" data-responsive-xs="1">
                    @foreach ($blogs as $blog)
                        <article
                            class="vertical-item content-padding bottom-rouded-small col-sm-12 col-md-6 col-lg-4 col-xl-3 my-0 py-3">

                            <div class="bg-light">



                                <div class="item-media">
                                    <img src="{{ asset('/images/' . $blog['img']) }}" alt>
                                </div>
                                <div class="item-content">
                                    <h4 class="entry-title bottommargin_10">
                                        <a href="{{ $blog['link'] }}">{{ $blog['title'] }}</a>
                                    </h4>

                                    <p class="">
                                        {{ $blog['content'] }}
                                    </p>
                                    <div class="item-action text-start">
                                        <i class="fa-regular fa-heart fs-5 ms-1"></i>
                                        <i class="fa-regular fa-comments fs-5"></i>
                                    </div>
                                </div>
                            </div>
                        </article>
                    @endforeach
                </div>

            </div>
        </div>
        <div class="see-more text-center mt-4">
            <a>مشاهده بیشتر</a>
            <i class="fa-solid fa-angle-down pe-1"></i>
        </div>

    </div>
</section>
