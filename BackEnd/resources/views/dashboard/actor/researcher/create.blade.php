@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    ایجاد  طراح
@endsection

@section('head')
    <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet" />
@endsection

@section('content')
    <section class="content">
        <div class="content-body">

        <div class="container-fluid">
            <div class="row mx-0">
                <div class="create-designer content-main-box col-12">
                    <div class="create-designer-head">
                        <h2>ایجاد طراح</h2>
                    </div>
                    <div class="create-designer-content">
                        <form id="create_designer" action="{{ route('researcher.store-admin') }}" method="POST"
                            autocomplete="off">
                            @csrf

                            <div class="form-group">
                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>نام کاربری</strong></label>
                                    <input value="{{ old('username') }}" type="text" class="form-control" name="username"
                                        id="username" placeholder="نام کاربری" />
                                    <div id="user-error" class="errors text-danger ">
                                        @error('username')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>ایمیل</strong></label>
                                    <input value="{{ old('email') }}" type="email" class="form-control" name="email"
                                        autocomplete="off" id="email" placeholder="hello@example.com">
                                    <div id="email-error" class="errors text-danger">
                                        @error('email')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 px-2 position-relative">
                                    <label><strong>رمزعبور</strong></label>
                                    <input type="password" class="form-control" name="password" autocomplete="off"
                                        id="password" placeholder="رمزعبور">
                                    <div id="pass-error" class=" errors text-danger">
                                        @error('password')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                    <i class="show_pass fa-solid fa-eye"></i>
                                </div>

                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>وضعیت:</strong></label>
                                    <select name="enabled" id="enabled" class="form-select ">
                                        <option {{ old('enabled') == '1' ? 'selected' : '' }} value="1">فعال</option>
                                        <option {{ old('enabled') == '0' ? 'selected' : '' }} value="0">غیرفعال
                                        </option>
                                    </select>
                                </div>

                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>نام :</strong></label>
                                    <input value="{{ old('name') }}" type="text" class="form-control" name="name"
                                        placeholder="نام" />
                                    <div class="errors text-danger">
                                        @error('name')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4  px-2">
                                    <label><strong>نام خانوادگی :</strong></label>
                                    <input value="{{ old('f_name') }}" type="text" class="form-control" name="f_name"
                                        placeholder="نام خانوادگی" />
                                    <div class="errors text-danger">
                                        @error('f_name')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>کدملی :</strong></label>
                                    <input value="{{ old('n_number') }}" type="text" class="form-control"
                                        name="n_number" placeholder="کدملی" />
                                    <div class="errors text-danger">
                                        @error('n_number')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>مرتبه علمی :</strong></label>
                                    <select name="range" class="form-select">
                                        <option {{ old('range') == 'مربی' ? 'selected' : '' }} value="مربی">
                                            مربی
                                        </option>
                                        <option {{ old('range') == 'دانشیار' ? 'selected' : '' }} value="دانشیار">
                                            دانشیار
                                        </option>
                                        <option {{ old('range') == 'استادیار' ? 'selected' : '' }} value="استادیار">
                                            استادیار
                                        </option>
                                        <option {{ old('range') == 'استاد' ? 'selected' : '' }} value="استاد">
                                            استاد
                                        </option>
                                    </select>
                                    <div class="errors text-danger">
                                        @error('range')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>رشته تحصیلی :</strong></label>
                                    <input value="{{ old('major') }}" type="text" name="major" class="form-control"
                                        placeholder="رشته" />
                                    <div class="errors text-danger">
                                        @error('major')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>تخصص :</strong></label>
                                    <input value="{{ old('proficiency') }}" type="text" name="proficiency"
                                        class="form-control" placeholder="تخصص" />
                                    <div class="errors text-danger">
                                        @error('proficiency')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>دانشگاه :</strong></label>
                                    <input value="{{ old('university') }}" type="text" name="university"
                                        class="form-control" placeholder="دانشگاه" />
                                    <div class="errors text-danger">
                                        @error('university')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-12 col-md-6 col-lg-4 px-2">
                                    <label><strong>سازمان :</strong></label>
                                    <input value="{{ old('organization') }}" type="text" name="organization"
                                        class="form-control" placeholder="سازمان" />
                                    <div class="errors text-danger">
                                        @error('organization')
                                            {{ $message }}
                                        @enderror
                                    </div>
                                </div>
{{--                                <div class="col-12 col-md-6 col-lg-4 px-2">--}}
{{--                                    <label><strong>سطح دسترسی :</strong></label>--}}
{{--                                    <div class="checklist-permission">--}}

{{--                                            @foreach(\Spatie\Permission\Models\Role::where('name','Assistant')->first()->permission as $permission)--}}
{{--                                            <div class="checkList-item col-12 ">--}}
{{--                                                <div class="checkList-item-group">--}}
{{--                                                    <input {{!empty(old('mPermission')) ? (in_array($permission->name ,old('mPermission')) ? 'checked' : '') : ''}} name="mPermission[]" type="checkbox" value="{{$permission->name}}" class="form-check-input ml-1" />--}}
{{--                                                    <label><strong>{{$permission->fa_name}}</strong></label>--}}
{{--                                                </div>--}}
{{--                                                <div class="checkList-item-single pr-1">--}}
{{--                                                    @foreach($permission->subpermissions as $subPermission)--}}
{{--                                                        <div class="col-12">--}}
{{--                                                            <input {{!empty(old('permissions')) ? (in_array($subPermission->name ,old('permissions')) ? 'checked' : '') : ''}} value="{{$subPermission->name}}" name="permissions[]" type="checkbox" class="form-check-input ml-1" />--}}
{{--                                                            <label>{{$subPermission->fa_name}}</label>--}}
{{--                                                        </div>--}}

{{--                                                    @endforeach--}}
{{--                                                </div>--}}
{{--                                            </div>--}}
{{--                                            @endforeach--}}

{{--                                    </div>--}}
{{--                                    <div class="errors text-danger">--}}
{{--                                        @error('role')--}}
{{--                                        {{ $message }}--}}
{{--                                        @enderror--}}
{{--                                    </div>--}}
{{--                                </div>--}}

                            </div>
                    </div>
                    <div class="px-2 pt-3">
                        <button type="submit" class="btn btn-primary">ایجاد طراح</button>
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
    <script src="{{ asset('/js/dashboard/designer-validation.js') }}"></script>
@endpush
