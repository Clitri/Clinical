<div class="row topmargin_40">
    <div class="col-sm-4 to_animate" data-animation="pullDown">
        <div class="teaser text-center">
            <div class="teaser_icon highlight size_normal">
                <i class="rt-icon2-phone5"></i>
            </div>

            <p>
                <span class="grey">تلفن:</span> {{$phone}}
                <br>
                <span class="grey">فکس:</span> {{$fax}}
            </p>

        </div>
    </div>
    <div class="col-sm-4 to_animate" data-animation="pullDown">
        <div class="teaser text-center">
            <div class="teaser_icon highlight size_normal">
                <i class="rt-icon2-location2"></i>
            </div>

            <p>
               {{$mailbox}}
                <br> {{$address}},
                <br> {{$country}}
            </p>

        </div>
    </div>
    <div class="col-sm-4 to_animate" data-animation="pullDown">
        <div class="teaser text-center">
            <div class="teaser_icon highlight size_normal">
                <i class="rt-icon2-mail"></i>
            </div>

            <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                    data-cfemail="30595e565f70535f5d40515e491e535f5d">{{$email}}</a>
            </p>

        </div>
    </div>

</div>
