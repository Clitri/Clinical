@extends('auth.master')
@section('content')
    <div class="signup">
        <div class="container">
            <div class="row justify-content-center">
                <div
                    class=" signup-container px-sm-3 px-md-4 px-lg-5 py-4 shadow-lg align-self-center col-sm-12 col-md-10 col-lg-8 col-xl-6">

                    <a href="{{route('index')}}" class="exit-btn"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                    <div class="logo-container text-center">
                        <img width="185" src="{{asset('/images/logo.png')}}" alt />
                        <h2 class="mt-4 color">فراموشی رمز</h2>
                    </div>



                    @if (session('status'))
                        <div class="mb-4 font-medium text-sm text-green-600">
                            {{ session('status') }}
                        </div>
                    @endif


                    <div class="form-container">
                        <form method="POST" action="{{ route('password.email') }}">
                            @csrf

                            <div class="form-group">
                                <label class="mb-1"><strong>ایمیل</strong></label>
                                <input type="email" class="form-control px-5" id="email-field" name="email" :value="old('email')" required autofocus
                                    placeholder="hello@example.com">
                                    <i class="fa-solid fa-envelope"></i>
                                <div id="email-error" class=" text-danger fs-6">
                                    @error('email'){{$message}}
                                    @enderror
                                </div>
                            </div>
                            <div class="text-center mt-4">
                                <button type="submit" class="btn btn-primary btn-block">بازیابی رمز</button>
                            </div>
                        </form>
                    </div>
                    <div class="new-account mt-3">
                        <p>میخواهید وارد شوید؟ <a class="text-primary pe-1" href="{{route('login')}}">ورود</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
