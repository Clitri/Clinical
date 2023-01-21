<section class="intro_section page_mainslider ">
    <div class="flexslider">
        <ul class="slides">
            @foreach ($sliders as $slider)
                <li>
                    <img src="{{asset('/images/slider/'.$slider->img)}}" alt>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="slide_description_wrapper">
                                    <div class="slide_description highlight">
                                        <div class="intro-layer" data-animation="fadeInLeft">
                                            <p class="yantramanov text-uppercase fontsize_35">
                                                {{$slider->top_title}}
                                            </p>
                                        </div>
                                        <div class="intro-layer" data-animation="fadeInRight">
                                            <p class="text-uppercase yantramanov big">
                                                {{$slider->title}}
                                            </p>
                                        </div>
                                        <div class="">
                                            <p>{{$slider->body}}</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </li>
            @endforeach
        </ul>
    </div>

</section>
