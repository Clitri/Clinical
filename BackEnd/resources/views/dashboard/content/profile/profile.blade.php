@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    پروفایل
@endsection

@section('head')
    <link href="{{ asset('/css/dashboard/bootstrap-select.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet" />
@endsection

@section('content')
    {{ csrf_field() }}

    <section class="content">
        <div class="content-body">
            <div class="container-fluid">

                {{--            @include('dashboard.layout.particals.profile.pagetitlleprofile') --}}

                @include('dashboard.layout.particals.profile.headprofile')

                <div class="row align-items-start">

                    @if (auth()->user()->profile()->exists() ||
                        auth()->user()->researcher()->exists())
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="profile-tab">

                                        @if (auth()->user()->profile()->exists() ||
                                            auth()->user()->researcher()->exists())
                                            <div class="custom-tab-1">
                                                <ul class="nav nav-tabs">
                                                    @if (auth()->user()->profile()->exists())
                                                        {{--                                                    <li class="nav-item"><a href="#my-posts" data-toggle="tab" --}}
                                                        {{--                                                                            class="nav-link active show">پست ها</a> --}}
                                                        {{--                                                    </li> --}}

                                                        <li class="nav-item"><a href="#about-me" data-toggle="tab"
                                                                class="nav-link active show">درباره من</a>
                                                        </li>

                                                        <li class="nav-item"><a href="#profile-settings"
                                                                onclick="editrecord({{ $user->profile->id }})"
                                                                data-toggle="tab" class="nav-link">ویرایش پروفایل</a>
                                                        </li>
                                                    @endif
                                                    @if (auth()->user()->researcher()->exists())
                                                        @if (!auth()->user()->profile()->exists())
                                                            <li class="nav-item"><a href="#about-me" data-toggle="tab"
                                                                    class="nav-link">درباره من</a>
                                                            </li>
                                                        @endif
                                                        <li class="nav-item"><a
                                                                onclick="EditResearcher({{ $user->researcher->id }})"
                                                                href="#profile-settings-researcher" data-toggle="tab"
                                                                class="nav-link">ویرایش طراح</a>
                                                        </li>
                                                    @endif
                                                </ul>
                                                <div class="tab-content">
                                                    @if (auth()->user()->researcher()->exists() &&
                                                        auth()->user()->profile()->exists())
                                                        @include('dashboard.layout.particals.profile.profileEditetab')
                                                        @include('dashboard.layout.particals.profile.researcheredeate')
                                                        {{--                                                    @include('dashboard.layout.particals.profile.mypost') --}}
                                                        @include('dashboard.layout.particals.profile.aboutprofile')
                                                    @elseif(auth()->user()->researcher()->exists())
                                                        @include('dashboard.layout.particals.profile.researcheredeate')
                                                        @include('dashboard.layout.particals.profile.aboutprofile')
                                                    @else
                                                        @include('dashboard.layout.particals.profile.profileEditetab')


                                                        {{--                                                    @include('dashboard.layout.particals.profile.mypost') --}}

                                                        @include('dashboard.layout.particals.profile.aboutprofile')
                                                    @endif
                                                </div>
                                            </div>
                                        @endif
                                    </div>
                                </div>
                            </div>

                        </div>
                    @endif
                </div>
            </div>

            @if (!auth()->user()->profile()->exists())
                <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="exampleModellable"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModallable">
                                    تکمیل پروفایل</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-lable="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>


                            <div class="modal-body">

                                <form action="{{ route('profile.store') }}" method="POST" id="profile"
                                    enctype="multipart/form-data" class="myform">
                                    @csrf

                                    <div class="form-group">
                                        <div class="col-12 px-2">
                                            <strong>ادرس:</strong>

                                            <input value="{{ old('address') }}" type="text" name="address" id="address"
                                                class="form-control myinput" placeholder="آدرس">


                                            <div class="errors text-danger">
                                                @error('address')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group ">
                                        <div class="col-6 px-2">
                                            <strong>شغل:</strong>

                                            <input value="{{ old('job') }}" type="text" name="job" id="username"
                                                class="form-control myinput" placeholder="شغل">

                                            <div class="errors text-danger">
                                                @error('job')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>

                                        <div class="col-6 px-2">
                                            <strong>تلفن:</strong>

                                            <input value="{{ old('phone') }}" type="text" name="phone" id="phone"
                                                class="form-control myinput" placeholder="تلفن تماس">


                                            <div class="errors text-danger">
                                                @error('phone')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-12 px-2">
                                            <strong>محل کار:</strong>

                                            <input value="{{ old('workoffice') }}" type="text" name="workoffice"
                                                id="workoffice" class="form-control" placeholder="محل کار">

                                            <div class="errors text-danger">
                                                @error('workoffice')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-12 px-2">
                                            <strong>عکس:</strong>
                                            <input type="file" name="img" id="img" class="form-control"
                                                placeholder="image">

                                            <div class="errors text-danger">
                                                @error('img')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <div class="col-6 px-2">
                                            <label>استان:</label>
                                            <div>
                                                <select class="form-select" name="province" id="province-drop">
                                                    <option value="">انتخاب استان
                                                    </option>
                                                    @foreach ($province as $provinces)
                                                        <option value="{{ $provinces->id }}">
                                                            {{ $provinces->name }}</option>
                                                    @endforeach

                                                </select>
                                            </div>
                                            <div class="text-danger errors">
                                            </div>
                                        </div>
                                        <div class="col-6 px-2">
                                            <label>شهر</label>
                                            <div>
                                                <select class="form-select" name="city" id="city-drop"></select>
                                            </div>
                                            <div class="text-danger errors"></div>
                                        </div>
                                    </div>


                                    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                                        <button type="submit" class="btn btn-primary">ثبت
                                            نام
                                        </button>
                                    </div>
                                </form>
                                {{-- @endif --}}

                            </div>

                        </div>
                    </div>
                </div>
            @endif
            @if (auth()->user()->hasRole('User'))
                <div class="modal fade" id="resercherModal" tabindex="-1" aria-labelledby="exampleModellable"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModallable">
                                    تکمیل اطلاعات</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-lable="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div class="modal-body">
                                <form action="{{ route('researcher.store') }}" method="POST" id="researcher"
                                    class="myform">
                                    @csrf
                                    <div class="form-group">
                                        <div class="col-12 px-2">
                                            <strong>نام:</strong>

                                            <input value="{{ old('name') }}" type="text" name="name"
                                                id="name" class="form-control myinput" placeholder="نام">

                                            <div class="errors text-danger">
                                                @error('name')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group ">
                                        <div class="col-6 px-2">
                                            <strong>نام خانوادگی:</strong>
                                            <input value="{{ old('f_name') }}" type="text" name="f_name"
                                                id="f_name" class="form-control myinput" placeholder="نام خانوادگی">
                                            <div class="errors text-danger">
                                                @error('f_name')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>

                                        <div class="col-6 px-2">
                                            <strong>کدملی:</strong>

                                            <input value="{{ old('n_number') }}" type="text" name="n_number"
                                                id="n_numebr" class="form-control myinput" placeholder=" کدملی">


                                            <div class="errors text-danger">
                                                @error('n_number')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-12 px-2">
                                            <strong>مرتبه علمی:</strong>
                                            <div>
                                                <select class="form-select" name="range">
                                                    <option {{ old('range') == 'مربی' ? 'selected' : '' }} value="مربی">
                                                        مربی
                                                    </option>
                                                    <option {{ old('range') == 'دانشیار' ? 'selected' : '' }}
                                                        value="دانشیار">
                                                        دانشیار
                                                    </option>
                                                    <option {{ old('range') == 'استادیار' ? 'selected' : '' }}
                                                        value="استادیار">
                                                        استادیار
                                                    </option>
                                                    <option {{ old('range') == 'استاد' ? 'selected' : '' }}
                                                        value="استاد">
                                                        استاد
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="errors text-danger">
                                                @error('range')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-12 px-2">
                                            <strong>رشته تحصیلی:</strong>

                                            <input value="{{ old('major') }}" type="text" name="major"
                                                id="major" class="form-control" placeholder="رشته تحصیلی">


                                            <div class="errors text-danger">
                                                @error('major')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <div class="col-6 px-2">

                                            <strong>تخصص:</strong>

                                            <input value="{{ old('proficiency') }}" type="text" name="proficiency"
                                                id="proficiency" class="form-control" placeholder="تخصص">


                                            <div class="errors text-danger">
                                                @error('proficiency')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="col-6 px-2">
                                            <strong>دانشگاه:</strong>

                                            <input value="{{ old('university') }}" type="text" name="university"
                                                id="university" class="form-control" placeholder="دانشگاه">


                                            <div class="errors text-danger">
                                                @error('university')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>

                                        <div class="col-6 px-2">
                                            <strong>سازمان</strong>

                                            <input value="{{ old('organization') }}" type="text" name="organization"
                                                id="organization" class="form-control" placeholder="سازمان">

                                            <div class="errors text-danger">
                                                @error('organization')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                                        <button type="submit" class="btn btn-primary">ثبت
                                            نام
                                        </button>
                                    </div>
                                </form>
                                {{-- @endif --}}

                            </div>

                        </div>
                    </div>
                </div>
        </div>
        @endif
    </section>
@endsection
@push('scripts')


    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('/js/dashboard/edit-profile-validation.js') }}"></script>

    <script src="{{ asset('/js/dashboard/designer-validation.js') }}"></script>
    <script src="{{ asset('/js/dashboard/researcher/researcher.js') }}"></script>

    <script src="{{ asset('/js/dashboard/profile.js') }}"></script>
    @if (Session::has('message'))
        <script>
            Swal.fire({
                title: "{{ Session::get('message') }}",
                icon: "warning",
                confirmButtonColor: "#DD6B55",
                showCancelButton: true,
                confirmButtonText: "تکمیل اطلاعات",
                cancelButtonText: "بستن",
            }).then((result) => {
                if (result.isConfirmed) {
                    $('#resercherModal').modal('show');
                }
            });
        </script>
    @endif
    <script>
        if (window.performance) {
            var navEntries = window.performance.getEntriesByType('navigation');
            if (navEntries.length > 0 && navEntries[0].type === 'back_forward') {
                console.log('As per API lv2, this page is load from back/forward');
            } else if (window.performance.navigation && window.performance.navigation.type == window.performance.navigation
                .TYPE_BACK_FORWARD) {
                console.log('As per API lv1, this page is load from back/forward');
            } else {
                console.log('This is normal page load');
                @if (Session::has('sweet_alert.alert'))
                    swal({!! Session::get('sweet_alert.alert') !!});
                    {{ Session::forget('sweet_alert.alert') }} // This will forget the alert data after displaying it :)
                @endif
            }
        } else {
            console.log("Unfortunately, your browser doesn't support this API");
        }
    </script>


    <script>
        $(document).ready(function() {

            $('#province-drop').on('change', function() {
                var province_id = this.value;
                $("#city-drop").html('');
                $.ajax({
                    url: "/dashboard/profile/city",
                    type: "POST",
                    data: {
                        province_id: province_id,
                        _token: '{{ csrf_token() }}'
                    },
                    dataType: 'json',
                    success: function(result) {
                        $.each(result.cities, function(key, value) {
                            $("#city-drop").append('<option value="' +
                                value.id + '">' + value.name +
                                '</option>');
                        });


                        $("#city-drop").next(".custom-dropdown").find('li').remove();
                        const options = $("#city-drop").find("option");

                        options.each((index, item) => {
                            if ($(item).prop("selected")) {
                                $("#city-drop")
                                    .next(".custom-dropdown")
                                    .append(
                                        `<li data-val="${item.value}" class="selected-option">${$(item).text()}</li>`
                                    );
                            } else {
                                $("#city-drop")
                                    .next(".custom-dropdown")
                                    .append(
                                        `<li data-val="${item.value}">${$(item).text()}</li>`
                                    );
                            }
                        });


                        $("#city-drop")
                            .next(".custom-dropdown").find("li").on("mousedown", function(
                                event) {
                                event.preventDefault();
                                event.stopPropagation();
                                $("#city-drop").val($(event.target).data("val"));
                                $("#city-drop").change();
                            }).on('click', function(event) {
                                event.stopPropagation();
                                event.preventDefault();
                                $("#city-drop").blur();
                            });
                    }
                });
            });

            $('#city-drop').on('change', selectChange);

            function selectChange(event) {
                const options = $("#city-drop").find("option");
                $("#city-drop")
                    .next(".custom-dropdown").find("li")
                    .removeClass("selected-option");
                options.each((index, item) => {
                    if ($(item).prop("selected")) {
                        $($("#city-drop")
                            .next(".custom-dropdown")
                            .find("li")[index]).addClass(
                            "selected-option");
                    }
                });
            }


        });
    </script>
@endpush
