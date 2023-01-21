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
                        <h2 class="mt-4 color">بازیابی رمز</h2>
                    </div>

                    <div class="form-container">
                        <form method="POST" action="{{ route('password.update') }}">
                            @csrf
                            <input type="hidden" name="token" value="{{ $request->route('token') }}">

                            <div class="form-group">
                                <label class="mb-1"><strong>ایمیل</strong></label>
                                <input type="email" class="form-control px-5" id="email-field" name="email"
                                    :value="old('email', $request - > email)" required autofocus
                                    placeholder="hello@example.com">
                                <i class="fa-solid fa-envelope"></i>
                                <div id="email-error" class=" text-danger fs-6">
                                    @error('email')
                                        {{ $message }}
                                    @enderror
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="mb-1"><strong>رمزعبور</strong></label>
                                <input type="password" class="form-control px-5" id="pass-field" name="password" required
                                    autocomplete="new-password" placeholder="رمزعبور">
                                <i class="fa-solid fa-key"></i>
                                <div id="pass-error" class="pass-error text-danger fs-6">
                                    @error('password')
                                        {{ $message }}
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="mb-1"><strong>تکرار رمزعبور</strong></label>
                                <input type="password" class="form-control  px-5" id="conf-pass-field"
                                    name="password_confirmation" required autocomplete="new-password"
                                    placeholder=" تکرار رمزعبور">
                                <i class="fa-solid fa-key"></i>
                                <div id="conf-pass-error" class="text-danger fs-6">
                                    @error('password_confirmation')
                                        {{ $message }}
                                    @enderror
                                </div>
                            </div>
                            <div class="text-center mt-4">
                                <button type="submit" class="btn btn-primary btn-block">تایید</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
