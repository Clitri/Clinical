<section class="ls page_info_banners">
    <div class="container position-relative">
        <div class="row services-banner ">
            @foreach ($banners as $banner)
                <div class="col-sm-12 col-md-4 my-1 px-0 ">
                    <div class="services-item px-2 mx-3 text-center">
                        <div class="d-flex justify-content-center">
{{--                            <i class="{{ $banner['icon'] }} fs-3"></i>--}}
                            <img src="/images/{{$banner['icon']}}" class="fs-3" >
                            <h2 class="mb-0 mt-1 pe-2 fs-6">{{ $banner['title'] }}</h2>
                        </div>
                        <p class="px-3">{{ $banner['content'] }}</p>
                    </div>

                </div>
            @endforeach

        </div>
    </div>
</section>
