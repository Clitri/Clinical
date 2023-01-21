@extends('dashboard.layout.master')

@section('pagetitle','ویرایش طراح')

@section('head')
    <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet" />
@endsection

@section('content')

    <section class="content"> <div class="content-body">

        <div class="container-fluid">
            <div class="row mx-0">
                <div class="create-designer col-12">
                    <div class="create-designer-head">
                        <h2>ویرایش طراح</h2>
                    </div>
                    <div class="create-designer-content">
                        @if ($errors->any())
                            <div class="alert alert-danger myalert">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                        <form id="create_designer" action="/dashboard/researcher/{{ $research->id }}/edit" method="POST"
                            autocomplete="off">
                            @csrf
                            @method('PUT')

                            <div class="form-group">
                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>نام :</strong></label>
                                    <input type="text" class="form-control" value="{{ $research->name }}" name="name"
                                        placeholder="نام" />
                                    <div class="errors text-danger">
                                        @error('name')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4  px-2">
                                    <label><strong>نام خانوادگی :</strong></label>
                                    <input type="text" class="form-control" value="{{ $research->username }}"
                                        name="username" placeholder="نام خانوادگی" />
                                    <div class="errors text-danger">
                                        @error('username')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>کدملی :</strong></label>
                                    <input type="text" class="form-control" value="{{ $research->n_number }}"
                                        name="n_number" placeholder="کدملی" />
                                    <div class="errors text-danger">
                                        @error('n_number')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>مرتبه علمی :</strong></label>
                                    <input type="text" name="range" value="{{ $research->range }}" class="form-control"
                                        placeholder="مرتبه" />
                                    <div class="errors text-danger">
                                        @error('range')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>رشته تحصیلی :</strong></label>
                                    <input type="text" name="major" value="{{ $research->major }}"
                                        class="form-control" placeholder="رشته" />
                                    <div class="errors text-danger">
                                        @error('major')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>تخصص :</strong></label>
                                    <input type="text" name="proficiency" value="{{ $research->proficiency }}"
                                        class="form-control" placeholder="تخصص" />
                                    <div class="errors text-danger">
                                        @error('proficiency')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-12 col-md-6 px-2">
                                    <label><strong>دانشگاه :</strong></label>
                                    <input type="text" name="university" value="{{ $research->university }}"
                                        class="form-control" placeholder="دانشگاه" />
                                    <div class="errors text-danger">
                                        @error('university')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 px-2">
                                    <label><strong>سازمان :</strong></label>
                                    <input type="text" name="organization" value="{{ $research->organization }}"
                                        class="form-control" placeholder="سازمان" />
                                    <div class="errors text-danger">
                                        @error('organization')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="px-2 text-center">
                                <button type="submit" class="btn btn-primary">ویرایش طراح</button>
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



    <script src="{{asset('/js/dashboard/custom-select.js')}}"></script>
    <script src="{{ asset('/js/dashboard/designer-validation.js') }}"></script>
@endpush
