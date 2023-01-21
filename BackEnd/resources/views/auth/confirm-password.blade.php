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
                        <h2 class="mt-4 color">تایید رمزعبور</h2>
                    </div>

                    <div class="mb-4 text-sm text-gray-600">
                        {{ __('This is a secure area of the application. Please confirm your password before continuing.') }}
                    </div>

                    <x-jet-validation-errors class="mb-4" />
                    <div class="form-container">

                        <form method="POST" action="{{ route('password.confirm') }}">
                            @csrf
                            <div class="form-group">
                                <label class="mb-1"><strong>رمزعبور</strong></label>
                                <input type="password" class="form-control px-5" id="pass-field" name="password" required
                                    autocomplete="current-password" autofocus placeholder="رمزعبور">
                                <i class="fa-solid fa-key"></i>
                                <div id="pass-error" class="pass-error text-danger fs-6">
                                    @error('password')
                                        {{ $message }}
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="mb-1"><strong>تکرار رمزعبور</strong></label>
                                <input type="password" name="password" class="form-control  px-5" id="conf-pass-field"
                                    placeholder=" تکرار رمزعبور">
                                <i class="fa-solid fa-key"></i>
                                <div id="conf-pass-error" class="text-danger fs-6">
                                    @error('password')
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
