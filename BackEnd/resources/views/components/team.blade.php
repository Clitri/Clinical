<section class="ls section_padding_top_75 section_padding_bottom_75 direction-ltr">
    <div class="container text-center">
        <div class="row direction-rtl our-team">
            <div class="col-md-10 mx-auto mb-5">
                <h2 class="section_header">تیم ما</h2>
                <p class="bold">
                    بنابراین انسان عاقل همیشه در این مسائل به این اصل انتخاب پایبند است: او
                    لذت ها را رد می کند تا لذت های بزرگتر را به دست آورد، وگرنه رنج هایی را تحمل می کند که
                    باید اجتناب کند
                    دردهای بدتر
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-10 mx-auto">
                <div class="owl-carousel team-carousel top-offset with-nav" data-nav="true"
                    data-responsive-lg="6" data-responsive-md="4" data-responsive-sm="3"
                    data-responsive-xs="1">
                    @foreach ($team as $teams )
                        
                    
                    <div class="thumbnail">
                        <img src="{{ asset('/images/' . $teams['img']) }}" alt>
                        <div class="caption">
                            <h4>
                                <a href="team-single.html">{{$teams['name']}}
                                    </a>
                            </h4>
                            <p class="small-text">{{$teams['job']}}</p>
                            <hr class="divider_10">
                            <div class="text-center">
                                <a class="details-btn" href="{{$teams['link']}}">{{$teams['details']}}</a>
                            </div>
                        </div>
                    </div>
                    @endforeach
                                    </div>


                <!-- <div class="owl-carousel">
                    <div> Your Content </div>
                    <div> Your Content </div>
                    <div> Your Content </div>
                    <div> Your Content </div>
                    <div> Your Content </div>
                    <div> Your Content </div>
                    <div> Your Content </div>
                </div> -->
            </div>
        </div>

    </div>
</section>