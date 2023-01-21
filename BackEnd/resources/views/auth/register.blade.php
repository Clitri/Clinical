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
                        <h2 class="mt-4 color">ثبت نام</h2>
                    </div>

                    <div class="form-container">
                        <form method="POST" action="{{ route('register') }}" autocomplete="off">
                            @csrf
                            <div class="form-group">
                                <label class="mb-1"><strong>نام کاربری</strong></label>
                                <input type="text" class="form-control px-5" id="user-field" name="username"
                                    value="{{old('username')}}" placeholder="username" />
                                <i class="fa-solid fa-user"></i>
                                <div id="user-error" class=" text-danger fs-6">
                                    @error('username')
                                        {{ $message }}
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="mb-1"><strong>ایمیل</strong></label>
                                <input type="email" class="form-control px-5" id="email-field" name="email"
                                    value="{{old('email')}}" placeholder="hello@example.com">
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
                                <div id="pass-error" class=" text-danger fs-6">

                                </div>
                                <i class="show_pass fa-solid fa-eye"></i>
                            </div>
                            <div class="form-group">
                                <label class="mb-1"><strong>تکرار رمزعبور</strong></label>
                                <input type="password" class="form-control  px-5" name="password_confirmation"
                                    id="conf-pass-field" placeholder=" تکرار رمزعبور">
                                <i class="fa-solid fa-key"></i>
                                <div id="conf-pass-error" class="text-danger fs-6">

                                    @error('password')
                                    {{ $message }}
                                    @enderror

                                </div>
                                <i class="show_pass fa-solid fa-eye"></i>
                            </div>

                            @if (Laravel\Jetstream\Jetstream::hasTermsAndPrivacyPolicyFeature())
                                <div class="mt-4">
                                    <x-jet-label for="terms">
                                        <div class="flex items-center">
                                            <x-jet-checkbox name="terms" id="terms" />

                                            <div class="ml-2">
                                                {!! __('I agree to the :terms_of_service and :privacy_policy', [
                                                    'terms_of_service' =>
                                                        '<a target="_blank" href="' .
                                                        route('terms.show') .
                                                        '" class="underline text-sm text-gray-600 hover:text-gray-900">' .
                                                        __('Terms of Service') .
                                                        '</a>',
                                                    'privacy_policy' =>
                                                        '<a target="_blank" href="' .
                                                        route('policy.show') .
                                                        '" class="underline text-sm text-gray-600 hover:text-gray-900">' .
                                                        __('Privacy Policy') .
                                                        '</a>',
                                                ]) !!}
                                            </div>
                                        </div>
                                    </x-jet-label>
                                </div>
                            @endif
                            <div class="text-center mt-4">
                                <button type="submit" class="btn btn-primary btn-block">ثبت نام </button>
                            </div>
                        </form>
                    </div>
                    <div class="new-account mt-3">
                        <p>از قبل حساب کاربری دارید؟ <a class="text-primary pe-1" href="{{ route('login') }}">ورود</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
{{-- <script src="{{ asset('/js/auth/auth-validation.js') }}"></script> --}}
