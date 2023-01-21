@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    مدیریت تگ و دسته بندی ها
@endsection

@section('head')
    <link href="{{ asset('/css/dashboard/jquery.dataTables.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/dashboard/buttons-datatable.css') }}" />
    <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet" />

@endsection

@section('content')
    <section class="content"> <div class="content-body">

        <div class="container-fluid">
            <div class="row mx-0">
                <div class="manage-tags content-main-box d-flex">
                    <div class="col-12">
                        <div class="d-flex justify-content-between pb-2  border-bottom">
                            <h2 class="tables-title">مدیریت تگ ها</h2>
                        </div>
                        <div>
                            <label class="label-in-search"> جستجو : </label>
                            <input type="search" class="in-search tag-search">
                        </div>
                        <div class="add-tag-error rounded"></div>
                        <div class="datatable-posts mt-4">
                            <div class="table-responsive">
                                <table class="display posts-table" style="min-width: 845px">
                                    <thead>
                                        <tr>
                                            <th>ردیف</th>
                                            <th>عنوان تگ</th>
                                            <th>وضعیت</th>
                                            <th>عملیات</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tag-table">
                                        <tr id="add-tag-tr">
                                            <td></td>
                                            <td><input class="add-input-tag" /></td>
                                            <td>
                                                <div class="activity-btn">
                                                    <span class="activity-switch"></span>
                                                    <input type="checkbox" class="d-none" />
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" class="btn btn-primary shadow btn-xs sharp"
                                                    id="add-tag"><i class="fa-solid fa-plus"></i></a>
                                            </td>
                                        </tr>
                                        @php($counter = 1)
                                        @foreach ($tags as $tag)
                                            <tr id="tag-{{ $tag->id }}" class="tag-record">
                                                <td>{{ $counter++ }}</td>
                                                <td><input class="add-input-tag" value="{{ $tag->title }}"
                                                        data-id="{{ $tag->id }}" /></td>
                                                <td>
                                                    <div class="activity-btn {{ $tag->status ? 'switch-to-active' : '' }}"
                                                        data-id="{{ $tag->id }}">
                                                        <span class="activity-switch"></span>
                                                        <input type="checkbox" class="d-none"
                                                            {{ $tag->status ? 'checked' : '' }} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-center ">
                                                        <a href="#"
                                                            class="btn btn-danger shadow btn-xs sharp delete-tag"
                                                            id="{{ $tag->id }}"><i class="fa-solid fa-trash"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach

                                    </tbody>
                                </table>
                                {{ $tags->links('pagination.default') }}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row mx-0 mt-4">
                <div class="manage-cats content-main-box d-flex">
                    <div class="col-12">
                        <div class="d-flex justify-content-between pb-2  border-bottom">
                            <h2 class="tables-title">مدیریت دسته بندی ها</h2>
                            <a class="add-user mb-0 text-white"><i
                                    class="fa-solid fa-plus align-middle ml-2"></i>
                                ایجاد دسته بندی</a>
                        </div>
                        <div>
                            <label class="label-in-search"> جستجو : </label>
                            <input type="search" class="in-search category">
                        </div>
                        <div class="datatable-posts mt-4">
                            <div class="table-responsive">
                                <table class="display posts-table" style="min-width: 845px">
                                    <thead>
                                        <tr>
                                            <th>ردیف</th>
                                            <th>عنوان دسته بندی</th>
                                            <th>والد</th>
                                            <th>وضعیت</th>
                                            <th>عملیات</th>
                                        </tr>
                                    </thead>
                                    <tbody id="cat-table">
                                        @php($counter = 1)
                                        @foreach ($categories as $cat)
                                            <tr id="cat-{{ $cat->id }}">
                                                <td>{{ $counter++ }}</td>
                                                <td>{{ $cat->title }}</td>
                                                <td>
                                                    {{ $cat->category->title != null ? $cat->category->title : 'ندارد' }}
                                                </td>
                                                <td>
                                                    <div class="activity-btn {{ $cat->status ? 'switch-to-active' : '' }}">
                                                        <span class="activity-switch"></span>
                                                        <input data-id="{{ $cat->id }}" type="checkbox" class="d-none"
                                                            {{ $cat->status ? 'checked' : '' }} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-center ">

                                                        <a class="edit-plan-btn shadow btn-xs sharp edit"
                                                            id="{{ $cat->id }}"><i class="fa-solid fa-pencil"></i></a>
                                                        <a class="btn btn-danger shadow btn-xs sharp delete-cat"
                                                            id="{{ $cat->id }}"><i class="fa-solid fa-trash"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach

                                    </tbody>
                                </table>
                                {{ $categories->links('pagination.default') }}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal fade in" id="add_cats">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <form method="post" id="cat-form">
                        @csrf
                        <div class="modal-header">
                            <h4 class="modal-title">ایحاد دسته بندی</h4>
                            <button type="button" class="close" data-dismiss="modal"
                                data-target="#add_cats"><span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form_add_cats">
                                <div class="form-group position-relative p-0">
                                    <div class="col-12 px-2">
                                        <label class="mb-1"><strong>دسته بندی والد</strong></label>
                                        <select class="form-select" id="cParent">
                                            <option selected disabled>انتخاب کنید</option>

                                        </select>
                                    </div>
                                </div>
                                <div class="form-group position-relative p-0">
                                    <div class="col-12 px-2">
                                        <label class="mb-1"><strong>عنوان دسته بندی:</strong></label>
                                        <input type="text" class="form-control" id="title" />
                                        <div class="errors text-danger fs-6">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group position-relative p-0">
                                    <div class="col-12 px-2">
                                        <label class="mb-1"><strong>زیر دسته بندی ها:</strong></label>
                                        <input class="form-control sub-cats" id="subCategories" />
                                        <i class="fa-solid fa-plus"></i>
                                        <div class="text-danger errors"></div>
                                        <div class="tags-container py-2 w-100">

                                        </div>
                                    </div>
                                </div>
                                <div class="form-group position-relative p-0">
                                    <div class="col-12 px-2">
                                        <label class="mb-1"><strong>وضعیت</strong></label>
                                        <select class="form-select" id="status">
                                            <option value="1" selected>فعال</option>
                                            <option value="0">غیرفعال</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">ثبت</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal"
                                data-target="#add_cats">بستن
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade in" id="edit_cats">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <form method="post" id="cat-edit-form">
                        @csrf
                        @method('put')
                        <div class="modal-header">
                            <h4 class="modal-title">ویرایش دسته بندی</h4>
                            <button type="button" class="close" data-dismiss="modal"
                                data-target="#edit_cats"><span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form_edit_cats">
                                <div class="form-group position-relative p-0">
                                    <div class="col-12 px-2">
                                        <label class="mb-1"><strong>دسته بندی والد</strong></label>
                                        <select class="form-select" id="eParent">
                                            <option selected disabled>انتخاب کنید</option>

                                        </select>
                                    </div>
                                </div>
                                <div class="form-group position-relative p-0">
                                    <div class="col-12 px-2">
                                        <label class="mb-1"><strong>عنوان دسته بندی:</strong></label>
                                        <input type="text" class="form-control" id="edit-title" />
                                        <div class="errors text-danger fs-6">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group position-relative p-0">
                                    <div class="col-12 px-2">
                                        <label class="mb-1"><strong>زیر دسته بندی ها:</strong></label>
                                        <input class="form-control sub-cats-edit" id="edit-subCategories" />
                                        <i class="fa-solid fa-plus"></i>
                                        <div class="text-danger errors"></div>
                                        <div class="tags-container py-2 w-100">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">ثبت</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal"
                                data-target="#edit_cats">بستن
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </section>
@endsection

@push('scripts')

    <script src="{{ asset('/js/dashboard/blog/tag.js') }}"></script>
    <script src="{{ asset('/js/dashboard/blog/category.js') }}"></script>
{{--    <script data-cfasync="false" src="{{ asset('/js/dashboard/email-decode.min.js') }}"></script>
--}}
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('/js/dashboard/dataTables.js') }}"></script>
    <script src="{{ asset('js/dashboard/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-html5.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-print.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons.js') }}"></script>
    <script src="{{ asset('/js/dashboard/datatables.init.js') }}"></script>
         <script src="{{ asset('js/dashboard/add-List.js') }}"></script>
@endpush
