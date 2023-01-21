<div class="row">
    <div class="col-lg-12">
        <div class="profile card card-body px-3 pt-3 pb-0">
            <div class="profile-head">

                <div class="profile-info align-items-center">
                    <div class="profile-photo rounded-circle">
                        @if (!$profile)
                            <img id="photo" src="{{ asset('/images/dashboard/user.png') }}" class="img-fluid " alt>
                        @elseif($profile->img == '')
                            <img id="imgpath" src="{{ asset('/images/dashboard/user.png') }}" class="img-fluid " alt>
                            <div class="profile-edit">
                                <i onclick="editimg({{ $user->profile->id }})"
                                    class="fa-solid fa-camera no-profile"></i>
                            </div>
                        @else
                            <img id="imgpath" src="{{ asset('/images/profile/' . $user->profile->img) }}"
                                class="img-fluid" alt />
                            <div class="profile-edit icons">
                                <i onclick="editimg({{ $user->profile->id }})" class="fa-solid fa-camera"></i>
                                <i onclick="deleterecord({{ $user->profile->id }})" class="fa-solid fa-trash"></i>
                            </div>
                        @endif

                    </div>


                    <div class="profile-details">
                        <div class="profile-name px-3 pt-2">
                            <h4 class="text-primary mb-0">{{ $user->name }}</h4>
                            {{-- <p>UX / UI طراح</p> --}}
                        </div>
                        <div class="profile-email px-2 pt-2">
                            <h4 class="text-muted mb-0"><a href="/cdn-cgi/l/email-protection" class="__cf_email__"
                                    data-cfemail=>{{ $user->email }}</a>
                            </h4>
                            <p>ایمیل</p>
                        </div>


{{--                        <div class="dropdown mr-auto">--}}
{{--                            <a href="#" class="btn btn-primary light sharp" data-toggle="dropdown"--}}
{{--                                aria-expanded="true">--}}
{{--                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"--}}
{{--                                    width="18px" height="18px" viewBox="0 0 24 24" version="1.1">--}}
{{--                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">--}}
{{--                                        <rect x="0" y="0" width="24" height="24" />--}}
{{--                                        <circle fill="#000000" cx="5" cy="12" r="2" />--}}
{{--                                        <circle fill="#000000" cx="12" cy="12" r="2" />--}}
{{--                                        <circle fill="#000000" cx="19" cy="12" r="2" />--}}
{{--                                    </g>--}}
{{--                                </svg>--}}
{{--                            </a>--}}
{{--                            <ul class="dropdown-menu dropdown-menu-right" x-placement="bottom-end"--}}
{{--                                style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-169px, 30px, 0px);">--}}
{{--                                <li class="dropdown-item"><i class="fa-solid fa-user-circle text-primary mr-2"></i>--}}
{{--                                    مشاهده نمایه--}}
{{--                                </li>--}}
{{--                                <li class="dropdown-item"><i class="fa-solid fa-users text-primary mr-2"></i>--}}
{{--                                    به دوستان نزدیک اضافه کنید--}}
{{--                                </li>--}}
{{--                                <li class="dropdown-item"><i class="fa-solid fa-plus text-primary mr-2"></i>--}}
{{--                                    به گروه اضافه کنید--}}
{{--                                </li>--}}
{{--                                <li class="dropdown-item"><i class="fa-solid fa-ban text-primary mr-2"></i>--}}
{{--                                    بلاک--}}
{{--                                </li>--}}
{{--                            </ul>--}}
{{--                        </div>--}}
                    </div>

                    <div class="modal fade" id="imgEditModal" aria-hidden="true" aria-labelledby="exampleModellable">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <form id="editImg" method="post" enctype="multipart/form-data">
                                    @csrf
                                    @method('put')
                                    <input type="hidden" id="id" name="id">
                                    <div class="modal-header">
                                        <h4 class="modal-title">ویرایش عکس</h4>
                                        <button type="button" class="close" data-dismiss="modal"
                                            data-target='#imgEditModal'><span>&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <div class="col-12 px-2">
                                                <label><strong>عکس :</strong></label>
                                                <input type="file" name="img" id="img" class="form-control"
                                                    placeholder="عکس" />
                                                <div class="errors text-danger"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger light" data-dismiss="modal"
                                            data-target='#imgEditModal'>بستن
                                        </button>
                                        <button type="submit" class="btn btn-primary">ارسال</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
                @if (auth()->user()->hasRole('User') ||
                    (!auth()->user()->profile()->exists()))
                    <div class="text-end pb-3 pr-3">
                        @if (auth()->user()->hasRole('User'))
                            <a href="#" class="btn btn-primary" data-toggle="modal"
                                data-target="#resercherModal">تکمیل اطلاعات</a>
                        @endif
                        @if (!auth()->user()->profile()->exists())
                            <a href="#" class="btn btn-primary" data-toggle="modal"
                                data-target="#userModal">تکمیل پروفایل</a>
                        @endif
                    </div>

                @endif
            </div>
        </div>
    </div>
</div>
