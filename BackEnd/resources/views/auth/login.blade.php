@extends('auth.master')
@section('content')
    <div class="signup">
        <div class="container">
            <div class="row justify-content-center">
                <div
                    class=" signup-container px-sm-3 px-md-4 px-lg-5 py-4 shadow-lg align-self-center col-sm-12 col-md-10 col-lg-8 col-xl-6">

                    <a href="{{ route('index') }}" class="exit-btn"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    <div class="logo-container text-center">
                        <img width="185" src="{{ asset('/images/logo.png') }}" alt />
                        <h2 class="mt-4 color">ورود</h2>
                    </div>



                    @if (session('status'))
                        <div class="mb-4 font-medium text-sm text-green-600">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div class="form-container">
                        <form class="login" method="POST" action="{{ route('login') }}">
                            @csrf
                            <div class="form-group">
                                <label class="mb-1"><strong>ایمیل</strong></label>
                                <input type="text" value="{{old('email')}}" class="form-control px-5" id="email-field" name="email"
                                    placeholder="ایمیل" />
                                <i class="fa-solid fa-envelope"></i>
                                <div id="email-error" class=" text-danger fs-6">
                                    @error('email')
                                        {{ $message }}
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="mb-1"><strong>رمزعبور</strong></label>
                                <input type="password" class="form-control px-5" name="password" id="pass-field"
                                    placeholder="رمزعبور">
                                <i class="fa-solid fa-key"></i>
                                <div id="pass-error" class="pass-error text-danger fs-6">
                                    @error('password')
                                        {{ $message }}
                                    @enderror
                                </div>
                                <i  class="show_pass fa-solid fa-eye"></i>
                            </div>

                            <div class="forgot-pass mt-3 d-flex justify-content-between mx-2">
                                @if (Route::has('password.request'))
                                    <a href="{{ route('password.request') }}">رمز خود را فراموش کرده اید؟</a>
                                @endif
                                <div class="remember-me">
                                    <p class="float-end my-0">من را به خاطر بسپار</p>
                                    <input type="checkbox" name="remember" class="float-end form-check-input" />
                                </div>
                            </div>

                            <div class="text-center mt-4">
                                <button type="submit" class="btn btn-primary btn-block">ورود</button>
                            </div>
                        </form>
                    </div>
                    <div class="new-account mt-3">
                        <p>حساب کاربری ندارید؟<a class="text-primary pe-1" href="{{ route('register') }}">ثبت نام</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
