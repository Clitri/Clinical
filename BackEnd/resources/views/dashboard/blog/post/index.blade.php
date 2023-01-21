@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    مدیریت پست ها
@endsection


@section('head')
    <link href="{{ asset('/css/dashboard/jquery.dataTables.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/dashboard/buttons-datatable.css') }}" />
@endsection

@section('content')
    <section class="content"> <div class="content-body">

        <div class="container-fluid">

            <div class="row mx-0">
                <div class="manage-posts d-flex">
                    <div class="col-12">
                        <div class="d-flex border-bottom pb-2 justify-content-between">
                            <h4>مدیریت پست ها</h4>
                            <a id="add_post" href="{{ route('post.create') }}" class="btn btn-primary text-white"><i
                                    class="fa-solid fa-plus align-middle ml-1"></i>ایجاد پست جدید</a>
                        </div>
                        <div>
                            <label class="label-in-search"> جستجو : </label>
                            <input type="search" class="in-search">
                        </div>
                        <div class="datatable-posts mt-4">
                            <div class="table-responsive">
                                <table class="display posts-table" style="min-width: 845px">
                                    <thead>
                                        <tr>

                                            <th>ردیف</th>
                                            <th>عنوان پست</th>
                                            <th>عنوان فرعی</th>
                                            {{-- <th>محتوای پست</th> --}}
                                            <th>برچسب ها</th>
                                            <th>دسته بندی</th>
                                            <th>وضعیت</th>
                                            <th>عملیات</th>
                                        </tr>
                                    </thead>
                                    <tbody class="search-table">
                                        @php($counter = 1)
                                        @foreach ($posts as $post)
                                            <tr id="post-{{ $post->id }}">
                                                <td>{{ $counter++ }}</td>
                                                <td>{{ $post->title }}</td>
                                                <td>{{ $post->sub_title }}</td>
                                                <td>{{ $post->tags }}</td>
                                                <td>{{ $post->category->title }}</td>
                                                <td>
                                                    <div data-id="{{ $post->id }}"
                                                        class="activity-btn {{ $post->status ? 'switch-to-active' : '' }}">
                                                        <span class="activity-switch"></span>
                                                        <input type="checkbox" class="d-none"
                                                            {{ $post->status ? 'checked' : '' }} />
                                                    </div>

                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="{{route('post.detail' , ['id'=>$post->id])}}"
                                                           class="view-plan-btn shadow btn-xs sharp">
                                                            <i class="fa-solid fa-eye"></i>
                                                        </a>
                                                        <a href="{{ route('post.edit', ['id' => $post->id]) }}"
                                                            class="btn btn-primary shadow btn-xs sharp"><i
                                                                class="fa-solid fa-pencil"></i></a>
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"
                                                            id="{{ $post->id }}"><i class="fa-solid fa-trash"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach

                                    </tbody>
                                </table>
                                {{ $posts->links('pagination.default') }}
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

    <script src="{{ asset('/js/dashboard/blog/post.js') }}"></script>
{{--    <script data-cfasync="false" src="{{ asset('/js/dashboard/email-decode.min.js') }}"></script>
--}}
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('/js/dashboard/dataTables.js') }}"></script>
    <script src="{{ asset('js/dashboard/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-html5.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-print.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons.js') }}"></script>
    <script src="{{ asset('/js/dashboard/datatables.init.js') }}"></script>
     @endpush
