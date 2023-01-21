@extends('auth.master')
@section('content')
    <div class="signup">
        <div class="container">
            <div class="row justify-content-center">
                <div
                    class=" signup-container px-sm-3 px-md-4 px-lg-5 py-4 shadow-lg align-self-center col-sm-12 col-md-10 col-lg-8 col-xl-6">

                    <a href="/index.html" class="exit-btn"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    <form method="POST" action="{{ route('verification.send') }}">
                        @csrf
                        <div class="logo-container text-center">
                            <img width="185" src="{{ asset('/images/logo.png') }}" alt />
                            <h2 class="mt-4 color">ارسال مجدد ایمیل</h2>
                        </div>
                    </form>
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf

                        <div class="container-login100-form-btn">
                            <button class="login100-form-btn">
                                خروج
                            </button>
                        </div>
                    </form>
                    <div class="text-center">
                        <p class="text-secondary">از ثبت‌نام شما سپاسگزاریم! قبل از شروع آیا می توانید آدرس ایمیل خود را
                            با
                            کلیک بر روی پیوندی
                            که به تازگی برای شما ایمیل کرده ایم تأیید کنید؟ اگر ایمیلی را دریافت نکردید، ایمیل دیگری
                            برای شما ارسال میکنیم</p>
                    </div>
                    <div class="text-center mt-4">
                        <button type="submit" id="send-verify-email" class="btn btn-primary btn-block ">ارسال تاییدیه
                            ایمیل</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
