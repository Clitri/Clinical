@extends('dashboard.layout.master')
@section('pagetitle', 'مدیریت کاربران')

@section('head')
    <link href="{{ asset('/css/dashboard/jquery.dataTables.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/dashboard/buttons-datatable.css') }}" />
    <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet" />

@endsection

@section('content')
    {{ csrf_field() }}
    <section class="content">
        <div class="content-body">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title tables-title">جدول داده های {{__($role)}}</h4>
                                @if(request()->routeIs('report.*'))
                                    @php($flag=false)
                                @else
                                    @php($flag=true)
                                @endif
                                @if($flag)
                                    <a href="#" class="btn btn-primary" data-toggle="modal"
                                       data-target="#modal_adduser">
                                        <i class="fa-solid fa-plus align-middle"></i>
                                        ایجاد
                                        {{__($role)}} جدید</a>
                                @endif
                            </div>
                            @if($flag)
                                <div>
                                    <label class="label-in-search"> جستجو : </label>
                                    <input type="search" class="in-search" data-role="{{$role_id}}"
                                           data-type="{{$role}}">
                                </div>
                            @endif
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="{{$flag ? 'users' : "usertable"}}"
                                           class="display{{$flag ? " posts-table" : ''}}">
                                        <thead>
                                        <tr>

                                            <th>ردیف</th>
                                            <th>نام کاربری</th>
                                            <th>ایمیل</th>
                                            <th>نقش</th>
                                            <th>وضعیت</th>
                                            @if($flag)
                                                @can('delete-user')
                                                    <th>عمل</th>
                                                @endcan
                                            @endif
                                        </tr>
                                        </thead>
                                        <tbody class="search-table">
                                        @php($counter = 1)
                                        @foreach ($user as $temp)

                                            @if ($temp->id != auth()->id())

                                                <tr id="user-{{ $temp->id }}">

                                                    <td>{{ $counter++ }}</td>
                                                    <td>{{ $temp->username }}</td>
                                                    <td>{{ $temp->email }}</td>
                                                    <td>
                                                        @if(!$flag || !auth()->user()->hasPermissionTo('edit-user-role'))
                                                            {{__($role)}}
                                                        @else
                                                            <select name="role" class="form-select"
                                                                    data-id="{{ $temp->id }}">
                                                                <option value="0"
                                                                    {{ $temp->hasRole('User') ? 'selected' : '' }}>کاربر
                                                                </option>
                                                                <option value="1"
                                                                    {{ $temp->hasRole('Supervisor') ? 'selected' : '' }}>
                                                                    ناظر
                                                                </option>
                                                                <option value="2"
                                                                    {{ $temp->hasRole('Agent') ? 'selected' : '' }}>
                                                                    بیمارگیر
                                                                </option>
                                                                <option value="3"
                                                                    {{ $temp->hasRole('Admin') ? 'selected' : '' }}>
                                                                    ادمین
                                                                </option>
                                                            </select>
                                                        @endif
                                                    </td>
                                                    <td>
                                                        @if(!$flag || !auth()->user()->hasPermissionTo('edit-user'))
                                                            {{$temp->enabled ? 'تایید شده' : 'تایید نشده'}}
                                                        @else
                                                            <div
                                                                class="activity-btn {{ $temp->enabled ? 'switch-to-active' : '' }}">
                                                                <span class="activity-switch"></span>
                                                                <input data-id="{{ $temp->id }}" type="checkbox"
                                                                       class="d-none" {{ $temp->enabled ? 'checked' : '' }} />
                                                            </div>
                                                        @endif
                                                    </td>
                                                    @if($flag)

                                                        @can('delete-user')
                                                            <td>
                                                                <div class="d-flex justify-content-center">
                                                                    @if($role != 'User')
                                                                        <a class="btn btn-primary text-white shadow btn-xs sharp edit-permission"
                                                                           data-id="{{$temp->id}}"><i
                                                                                class="fa-solid fa-pencil"></i></a>
                                                                    @endif
                                                                    <a onclick="deleterecord({{ $temp->id }})"
                                                                       class="btn btn-danger text-white shadow btn-xs sharp"><i
                                                                            class="fa-solid fa-trash"></i></a>
                                                                </div>
                                                            </td>
                                                        @endcan
                                                    @endif
                                                </tr>
                                            @endif
                                        @endforeach

                                        </tbody>
                                    </table>
                                    {{ $user->links('pagination.default') }}

                                </div>

                                <div class="modal fade" id="modal_adduser" aria-hidden="true"
                                     aria-labelledby="exampleModellable">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <form id="user" method="post" action="">
                                                @csrf
                                                <div class="modal-header">
                                                    <h4 class="modal-title">ایجاد {{__($role)}}</h4>
                                                    <button type="button" class="close" data-dismiss="modal"
                                                            data-dimiss="#modal_adduser"><span>&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="form_adduser">
                                                        <div class="form-group py-2">
                                                            <label class="mb-1"><strong>نام کاربری</strong></label>
                                                            <input type="text" class="form-control px-5" name="username"
                                                                   id="name" placeholder="نام کاربری"/>
                                                            <i class="fa-solid fa-user"></i>
                                                            <div id="user-error" class="errors p-0 text-danger  fs-6">
                                                            </div>
                                                        </div>

                                                        <div class="form-group py-2">
                                                            <label class="mb-1"><strong>ایمیل</strong></label>
                                                            <input type="email" class="form-control px-5" name="email"
                                                                   autocomplete="off" id="email"
                                                                   placeholder="hello@example.com">
                                                            <i class="fa-solid fa-envelope"></i>
                                                            <div id="email-error" class="errors p-0 text-danger fs-6">
                                                            </div>
                                                        </div>
                                                        <div class="form-group py-2">
                                                            <label class="mb-1"><strong>رمزعبور</strong></label>
                                                            <input type="password" class="form-control px-5"
                                                                   name="password"
                                                                   autocomplete="off" id="password"
                                                                   placeholder="رمزعبور">
                                                            <i class="fa-solid fa-key"></i>
                                                            <div id="pass-error" class=" errors p-0 text-danger fs-6">
                                                            </div>
                                                            <i class="show_pass fa-solid fa-eye"></i>
                                                        </div>
                                                        {{--                                                    @if ($role == 'User')--}}
                                                        {{--                                                        <div class="form-group py-2">--}}
                                                        {{--                                                            <label class="mb-1"><strong>نقش</strong></label>--}}
                                                        {{--                                                            <div class="w-100 py-0">--}}
                                                        {{--                                                                <select name="role" class="form-select" id="role">--}}
                                                        {{--                                                                    <option value="0" selected>کاربر</option>--}}
                                                        {{--                                                                    <option value="1">ناظر</option>--}}
                                                        {{--                                                                    <option value="2">بیمارگیر</option>--}}
                                                        {{--                                                                    <option value="3">ادمین</option>--}}
                                                        {{--                                                                </select>--}}
                                                        {{--                                                            </div>--}}
                                                        {{--                                                            <div id="pass-error" class=" errors p-0 text-danger fs-6">--}}
                                                        {{--                                                            </div>--}}
                                                        {{--                                                        </div>--}}
                                                        {{--                                                    @endif--}}
                                                        <div class="form-group d-block py-2">
                                                            <label class="mb-1"><strong>وضعیت:</strong></label>
                                                            <select name="enabled" id="enabled"
                                                                    class="form-select  px-5">
                                                                <option value="1">فعال</option>
                                                                <option value="0">غیرفعال</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger light"
                                                            data-dismiss="modal"
                                                            data-dimiss="#modal_adduser">بستن
                                                    </button>
                                                    <button type="submit" class="btn btn-primary" id="user-btn"
                                                            data-role="{{ $role }}">ارسال
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal fade" id="access_permission" aria-hidden="true"
                                     aria-labelledby="exampleModellable">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <form id="permission" method="post" action="">
                                                @csrf
                                                <div class="modal-header">
                                                    <h4 class="modal-title">تعیین سطح دسترسی</h4>
                                                    <button type="button" class="close" data-dismiss="modal"
                                                            data-dimiss="#access_permission"><span>&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="access_form">
                                                        <div class="form-group">

                                                            @foreach(\Spatie\Permission\Models\Role::where('name' , $role)->first()->permission as $permission)
                                                                <div class="checkList-item col-12">
                                                                    <div class="checkList-item-group">
                                                                        <input type="checkbox"
                                                                               class="form-check-input ml-1"/>
                                                                        <label><strong>{{$permission->fa_name}}</strong></label>
                                                                    </div>
                                                                    <div class="checkList-item-single pr-1">
                                                                        @foreach($permission->subpermissions as $subPermission)
                                                                            <div class="col-12">
                                                                                <input type="checkbox"
                                                                                       value="{{$subPermission->name}}"
                                                                                       name="permissions[]"
                                                                                       class="form-check-input ml-1"/>
                                                                                <label>{{$subPermission->fa_name}}</label>
                                                                            </div>
                                                                        @endforeach
                                                                    </div>
                                                                </div>
                                                            @endforeach

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger light close-modal"
                                                            data-dismiss="modal"
                                                            data-dimiss="#access_permission">بستن
                                                    </button>
                                                    <button type="submit" class="btn btn-primary">ارسال
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal fade" id="edit_permission" aria-hidden="true"
                                     aria-labelledby="exampleModellable">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <form id="permission" method="post" action="" data-id="">
                                                @csrf
                                                <div class="modal-header">
                                                    <h4 class="modal-title">ویرایش سطح دسترسی</h4>
                                                    <button type="button" class="close" data-dismiss="modal"
                                                            data-dimiss="#access_permission"><span>&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="access_form">
                                                        <div class="form-group" id="permissions">

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger light close-modal"
                                                            data-dismiss="modal"
                                                            data-dimiss="#edit_permission">بستن
                                                    </button>
                                                    <button type="submit" class="btn btn-primary">ارسال
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>


@endsection

@push('scripts')

    {{--    <script data-cfasync="false" src="{{ asset('/js/dashboard/email-decode.min.js') }}"></script>
    --}}
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>

    <script src="{{ asset('/js/dashboard/dataTables.js') }}"></script>
    <script src="{{ asset('js/dashboard/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-html5.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-print.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons.js') }}"></script>
    <script src="{{ asset('/js/dashboard/datatables.init.js') }}"></script>

    <script src="{{ asset('/js/dashboard/actor/user.js') }}"></script>

    </script>
@endpush
