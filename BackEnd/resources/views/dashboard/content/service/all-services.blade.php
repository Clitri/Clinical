@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    سرویس ها
@endsection


@section('content')
    <section class="content">

        <div class="content-body">
            <div class="container-fluid">
                <div class="row">
                    @if($gold == null && $silver == null && $bronze == null)
                    <h5>سرویسی وجود ندارد !</h5>
                    @endif

                    @if($gold != null)
                        <div class="col-lg-4 col-sm-12 col-md-6">
                            <div class="content-main-box">
                                <div class="card bordered-pro bordered-pro-g ">
                                    <a href="{{route('service.detail' , ['id'=>$gold->id])}}" class="bg-transparent">
                                        <div class="wavegold wave"></div>
                                        <h1 class="text-center mb-2 text-pro-golden"> طلایی </h1>
                                        <div class="card-body">
                                            <div class="card-img">
                                                <img src="{{asset('/images/gold.png')}}" alt="">
                                            </div>
                                            <h4 class="text-center my-4">{{$gold->title}}</h4>
                                            <div class="box-tag-pro">
                                                <p>{!!$gold->content!!}</p>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <h3 class="text-center mb-2 btn-pro-golden svggolden">قیمت سه ماهه : {{($gold->price * 3) - ($gold->off * ($gold->price * 3) / 100)}}
                                                تومان</h3>
                                            <div class="justify-content-center d-flex mt-4">
                                                <button class="btn-eye-pro"><a
                                                        href="{{route('service.register' , ['id'=>$gold->id,'period'=>1])}}">
                                                        افزودن به
                                                        سبدخرید </a></button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    @endif
                    @if($silver != null)
                        <div class="col-lg-4 col-sm-12 col-md-6">
                            <div class="content-main-box">
                                <a href="{{route('service.detail' , ['id'=>$silver->id])}}" class="bg-transparent">
                                    <div class="card bordered-pro-s bordered-pro">
                                        <div class="wavesilver wave"></div>
                                        <h1 class="text-center mb-2 text-pro-silver"> نقره‌ای </h1>
                                        <div class="card-body">
                                            <div class="card-img">
                                                <img src="{{asset('/images/silver.png')}}" alt="">
                                            </div>
                                            <h4 class="text-center my-4">{{$silver->title}}</h4>
                                            <div class="box-tag-pro">
                                                <p>{!!$silver->content!!}</p>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <h3 class="text-center mb-2 btn-pro-silver">قیمت سه ماهه : {{($silver->price * 3) - ($silver->off * ($silver->price * 3) / 100)}}تومان </h3>
                                            <div class="justify-content-center d-flex mt-4">
                                                <button class="btn-eye-pro"><a
                                                        href="{{route('service.register' , ['id'=>$silver->id,'period'=>1])}}">
                                                        افزودن
                                                        به سبدخرید </a></button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    @endif
                    @if($bronze != null)
                        <div class="col-lg-4 col-sm-12 col-md-6">
                            <a href="{{route('service.detail' , ['id'=>$bronze->id])}}" class="bg-transparent">
                                <div class="content-main-box">
                                    <div class="card bordered-pro bordered-pro-b">
                                        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ef922a" fill-opacity="1" d="M0,288L60,277.3C120,267,240,245,360,224C480,203,600,181,720,160C840,139,960,117,1080,138.7C1200,160,1320,224,1380,256L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> -->
                                        <div class="wavebronze wave"></div>

                                        <h1 class="text-center mb-2 text-pro-bronze"> برنز </h1>
                                        <div class="card-body">
                                            <div class="card-img">
                                                <img src="{{asset('/images/bronze.png')}}" alt="">
                                            </div>
                                            <h4 class="text-center my-4">{{$bronze->title}}</h4>
                                            <div class="box-tag-pro">
                                                <p>{!!  $bronze->content!!}</p>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <h3 class="text-center mb-2 btn-pro-bronze">قیمت سه ماهه : {{($bronze->price * 3) - ($bronze->off * ($bronze->price * 3) / 100)}} تومان </h3>
                                            <div class="justify-content-center d-flex mt-4">
                                                <button class="btn-eye-pro"><a
                                                        href="{{route('service.register' , ['id'=>$bronze->id ,'period'=>1])}}">
                                                        افزودن
                                                        به سبدخرید </a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    @endif

                </div>
            </div>
        </div>

    </section>

@endsection


@push('scripts')

    <script src="{{ asset('/js/dashboard/content/service.js') }}"></script>
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
@endpush
