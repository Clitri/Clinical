<div class="col-xl-8">
    <div class="card">
        <div class="card-body">
            <div class="profile-tab">
                <div class="custom-tab-1">
                    <ul class="nav nav-tabs">
                        @if ($user->researcher)
                            {{-- <li class="nav-item"><a href="#my-posts" data-toggle="tab"
                                    class="nav-link active show">پست ها</a>
                            </li> --}}
                            <li class="nav-item"><a href="#about-me" data-toggle="tab"
                                    class="nav-link">درباره من</a>
                            </li>
                            <li class="nav-item"><a href="#profile-settings"
                                    onclick="editrecord({{ $user->profile->id }})" data-toggle="tab"
                                    class="nav-link">ویرایش</a>
                                {{-- onclick="editrecord({{ $user->profile->id }})" --}}
                                {{-- <a class="nav-link" href="/dashboard/profile/{{$user->profile->id}}/edit">ویرایش</a> --}}
                            </li>
                    </ul>
                    <div class="tab-content">

                        @include('dashboard.layout.particals.profile.mypost')

                        @include('dashboard.layout.particals.profile.aboutprofile')
                        {{-- <div id="profile-settings" class="tab-pane fade">
                         <div class="modal fade" id="profileEditModal" tabindex="-1"
                            aria-labelledby="exampleModellable" aria-hidden="true">
                            <div class="modal-dialog">

                                @include('dashboard.layout.particals.profile.profileEditemodal')



                            </div> --}}
                        <div id="profile-settings" class="tab-pane fade">
                            {{-- <div class="pt-3">
                                <div class="settings-form">
                                    <h4 class="text-primary">ویرایش اطلاعات</h4>
                                    <form id="profileedit">

                                        @csrf
                                        @method('PUT')
                                        <div class="form-row">
                                            <input type="hidden" id="id" name="id">
                                            <div class="form-group col-md-6">
                                                <label>شغل</label>
                                                <input type="text" name="job" id="job"
                                                    placeholder="شغل" class="form-control">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label>تلفن</label>
                                                <input type="text" name="phone" id="phone"
                                                    placeholder="+98457632" class="form-control">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>آدرس</label>
                                            <input type="text" name="address" id="address"
                                                placeholder="1234 Main St" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label>محل کار</label>
                                            <input type="text" name="workoffice" id="workoffice"
                                                placeholder="محل کار" class="form-control">
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-4">
                                                <label>استان</label>
                                                <select class="form-control" name="province"
                                                    id="province-drop">
                                                    @foreach ($province as $province)
                                                        <option value="{{ $province->id }}"
                                                            {{ $profile->province == $province->id ? 'selected' : '' }}>
                                                            {{ $province->name }}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                            <div class="form-group col-md-2">
                                                <label>شهر</label>
                                                <select class="form-control" name="city" id="city-drop">
                                                    <option value="{{ $city->id }}" selected>
                                                        {{ $city->name }}</option>
                                                </select>
                                            </div>
                                        </div>

                                        <button class="btn btn-primary" onclick="updaterecord()"
                                            type="submit">ثبت
                                            نام</button>
                                    </form>
                                </div>
                            </div> --}}
                        </div>
                    @else


                    <div role="tabpanel" class="tab-pane" id="reserchersetting" aria-expanded="false">

                        <div class="card">

                            <a href="#" class="btn btn-primary" data-toggle="modal"
                                data-target="#resercherModal">تکمیل اطلاعات</a>
                        </div>







                                <div class="modal fade" id="#resercherModal" tabindex="-1"
                                    aria-labelledby="exampleModellable" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModallable">
                                    تکمیل اطلاعات</h5>
                                                <button type="button" class="close"
                                                    data-dismiss="modal" aria-lable="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>


                                            <div class="modal-body">


                                                <form action="{{ route('researcher.store') }}"
                                                    method="POST" id="profile"
                                                class="myform">
                                                    @csrf

                                                    <div class="form-group">
                                                        <div class="col-12 px-2">
                                                            <strong>ادرس:</strong>
                                                            <input type="text" name="address"
                                                                id="address"
                                                                class="form-control myinput"
                                                                placeholder="آدرس">

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
                                                            <input type="text" name="job"
                                                                id="username"
                                                                class="form-control myinput"
                                                                placeholder="شغل">
                                                            <div class="errors text-danger">
                                                                @error('job')
                                                                    {{ $message }}
                                                                @enderror
                                                            </div>
                                                        </div>

                                                        <div class="col-6 px-2">
                                                            <strong>تلفن:</strong>
                                                            <input type="text" name="phone"
                                                                id="phone"
                                                                class="form-control myinput"
                                                                placeholder="تلفن تماس">

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
                                                            <input type="text" name="workoffice"
                                                                id="workoffice" class="form-control"
                                                                placeholder="محل کار">
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
                                                            <input type="file" name="img"
                                                                id="img" class="form-control"
                                                                placeholder="image">

                                                            <div class="errors text-danger">
                                                                @error('img')
                                                                    {{ $message }}
                                                                @enderror
                                                            </div>
                                                        </div>
                                                    </div>


                                                    {{-- <div class="form-group">
                                                        <div class="col-6 px-2">
                                                            <label>استان:</label>
                                                            <select class="form-select" name="province"
                                                                id="province-drop">
                                                                <option value="">انتخاب استان
                                                                </option>
                                                                @foreach ($province as $provinces)
                                                                    <option value="{{ $provinces->id }}">
                                                                        {{ $provinces->name }}</option>
                                                                @endforeach

                                                            </select>
                                                        </div>
                                                        <div class="col-6 px-2">
                                                            <label>شهر</label>
                                                            <select class="form-select" name="city"
                                                                id="city-drop"></select>
                                                        </div>
                                                    </div> --}}




                                                    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                                                        <button type="submit" class="btn btn-primary">ثبت
                                                            نام</button>
                                                    </div>
                                                </form>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{{-- @if(!$researcher) --}}

                    {{-- @endif --}}
                </div>
