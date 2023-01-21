@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    ایجاد  بیمار
@endsection

@section('head')
    <link rel="stylesheet" href="{{ asset('/css/dashboard/calendar/css/kamadatepicker.css') }}" />
    <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet" />
@endsection

@section('content')
    <section class="content">
        <div class="content-body">

            <div class="container-fluid">
                <div class="row mx-0">
                    <div class="create-designer content-main-box col-12">
                        {{--                        <div class="create-designer-head">--}}
                        {{--                            <h2>ایجاد بیمار</h2>--}}
                        {{--                        </div>--}}
                        <div class="create-designer-head">
                            <h2>مشخصات‌کاربری :</h2>
                        </div>
                        <form id="create_patient" action="{{ route('patient.store') }}" method="POST"
                              autocomplete="off">
                            @csrf
                            <div class="create-designer-content">

                                <input type="hidden" name="dates" value="{{ $now }}">

                                <div class="form-group">
                                    <div class="col-12 col-md-6 col-lg-4 px-2">
                                        <label class="mb-1"><strong>نام‌کاربری</strong></label>
                                        <input value="{{old('username')}}" type="text" class="form-control"
                                               name="username" id="username"
                                               placeholder="نام کاربری"/>
                                        <div id="user-error" class="errors text-danger ">
                                            @error('username')
                                            {{ $message }}
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 px-2">
                                        <label class="mb-1"><strong>ایمیل</strong></label>
                                        <input value="{{old('email')}}" type="email" class="form-control" name="email"
                                               autocomplete="off"
                                               id="email" placeholder="hello@example.com">
                                        <div id="email-error" class="errors text-danger">
                                            @error('email')
                                            {{ $message }}
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 px-2 position-relative">
                                        <label class="mb-1"><strong>رمزعبور</strong></label>
                                        <input type="password" class="form-control" name="password" autocomplete="off"
                                               id="password" placeholder="رمزعبور">
                                        <div id="pass-error" class=" errors text-danger">
                                            @error('password')
                                            {{ $message }}
                                            @enderror
                                        </div>
                                        <i class="show_pass fa-solid fa-eye"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="create-designer-head">
                                <h2>اطلاعات‌هویتی :</h2>
                            </div>
                            <div class="create-designer-content">
                                <div class="form-group">
                                    <div class="col-12 col-md-6 col-lg-4 px-2">
                                        <label><strong>نام :</strong></label>
                                        <input value="{{old('name')}}" type="text" class="form-control" name="name"
                                               placeholder="نام"/>
                                        <div class="errors text-danger">
                                            @error('name')
                                            {{ $message }}
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4  px-2">
                                        <label><strong>نام‌خانوادگی :</strong></label>
                                        <input value="{{old('f_name')}}" type="text" class="form-control" name="f_name"
                                               placeholder="نام خانوادگی"/>
                                        <div class="errors text-danger">
                                            @error('f_name')
                                            {{ $message }}
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-4 px-2">
                                        <label><strong>کدملی :</strong></label>
                                        <input value="{{old('n_number')}}" type="text" class="form-control"
                                               name="n_number" placeholder="کدملی"/>
                                        <div class="errors text-danger">
                                            @error('n_number')
                                            {{ $message }}
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="create-designer-head">
                                <h2>اطلاعات‌شخصی :</h2>
                            </div>
                            <div class="create-designer-content">
                                <div class="form-group">
                                    <div class="col-12 col-md-6 col-lg-4 px-2">
                                        <label><strong>تاریخ‌تولد :</strong></label>
                                        <input value="{{old('birthdate')}}" type="text" id="date2"
                                               class="dates form-control"
                                               name="birthdate" placeholder="1378/06/25"/>
                                        <div class="errors text-danger">
                                            @error('birthdate')
                                            {{ $message }}
                                            @enderror
                                        </div>
                                    </div>


                                    <div class="col-12 col-md-6 col-lg-4 px-2">
                                        <label><strong> جنسیت :</strong></label>
                                        <select name="gender_id" class="form-select">
                                            @foreach (\App\Models\Gender::all() as $gender)
                                                <option value="{{ $gender->id }}"
                                                    {{ old('gender_id') == $gender->id ? 'selected' : '' }}>
                                                    {{ $gender->title }}
                                                </option>
                                            @endforeach
                                        </select>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-4 px-2">
                                        <label><strong> وضعیت‌تاُهل :</strong></label>
                                        <select name="marriage" class="form-select">
                                            <option value="0"
                                                {{ old('marriage') == 0 ? 'selected' : '' }}>
                                                مجرد
                                            </option>
                                            <option value="1"
                                                {{ old('marriage') == 1 ? 'selected' : '' }}>
                                                متاُهل
                                            </option>
                                        </select>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-4 px-2">
                                        <label><strong>قد :</strong></label>
                                        <input value="{{old('height')}}" type="number" class="form-control"
                                               name="height" placeholder="170"/>
                                        <div class="errors text-danger">
                                            @error('height')
                                            {{ $message }}
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-4 px-2">
                                        <label><strong>وزن :</strong></label>
                                        <input value="{{old('weight')}}" type="number" class="form-control"
                                               name="weight" placeholder="70"/>
                                        <div class="errors text-danger">
                                            @error('weight')
                                            {{ $message }}
                                            @enderror
                                        </div>
                                    </div>


                                    <div class="col-12 col-md-6 col-lg-4 px-2">
                                        <label><strong> شهر :</strong></label>
                                        <select name="province_id" class="form-select">
                                            @foreach (\App\Models\Province::all() as $province)
                                                <option value="{{ $province->id }}"
                                                    {{ old('province_id') == $province->id ? 'selected' : '' }}>
                                                    {{ $province->name }}
                                                </option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 px-2 position-relative">
                                        <label><strong> نوع‌عارضه :</strong></label>
                                        <input value="{{old('sickness_id')}}" class="sickness form-control" name="sickness_id"/>
                                        <span class="clear-input">
                                            <i class="fa-solid fa-xmark fs-5"></i>
                                        </span>
                                        <ul class="search-tags">
                                        </ul>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-4 px-2">
                                        <label><strong>توضیحات :</strong></label>
                                        <textarea type="text" class="form-control" name="description"
                                                  placeholder="توضیحات">{{old('description')}} </textarea>
                                        <div class="errors text-danger">
                                            @error('description')
                                            {{ $message }}
                                            @enderror
                                        </div>
                                    </div>
{{--                                    <div class="col-12 col-md-6 col-lg-4 px-2">--}}
{{--                                        <label><strong> نوع‌عارضه :</strong></label>--}}
{{--                                        <select name="sickness_id" class="form-select">--}}
{{--                                            @foreach (\App\Models\content\Sickness::all() as $sickness)--}}
{{--                                                <option value="{{ $sickness->id }}"--}}
{{--                                                    {{ old('sickness_id') == $sickness->id ? 'selected' : '' }}>--}}
{{--                                                    {{ $sickness->name }}--}}
{{--                                                </option>--}}
{{--                                            @endforeach--}}
{{--                                        </select>--}}
{{--                                    </div>--}}
                                </div>
                            </div>
                            <div class="px-2 pt-3">
                                <button type="submit" class="btn btn-primary">ایجاد بیمار</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        </div>

    </section>
@endsection

@push('scripts')

    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('/js/dashboard/kamadatepicker.js') }}"></script>
    <script src="{{ asset('/js/dashboard/calendar-init.js') }}"></script>
    <script src="{{ asset('/js/dashboard/patient.js') }}"></script>

@endpush
