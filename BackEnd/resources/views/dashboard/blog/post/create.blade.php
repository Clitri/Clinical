@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    ایجاد پست
@endsection
@section('head')
        <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet" />
@endsection
@section('content')
    <section class="content">
        <div class="content-body">

            <div class="container-fluid">
                <div class="row mx-0">
                    <form class="create-post d-flex flex-wrap" id="post-form" method="post"
                          enctype="multipart/form-data"
                          action="{{ route('post.store') }}">
                        @csrf
                        <div class="col-12 col-lg-8">
                            <div class="form-group py-3">
                                <label><strong>عنوان پست :</strong></label>
                                <input value="{{ old('title') }}" type="text" name="title" class="form-control"/>
                                <div class="errors text-danger">
                                    @error('title')
                                    {{ $message }}
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group py-3">
                                <label><strong>عنوان فرعی :</strong></label>
                                <input value="{{ old('sub_title') }}" type="text" name="sub_title"
                                       class="form-control"/>
                                <div class="errors text-danger">
                                    @error('sub_title')
                                    {{ $message }}
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group py-3">
                                <label><strong>بنر پست :</strong></label>
                                <input type="file" name="img" class="form-control"/>
                                <div class="errors text-danger">
                                    @error('img')
                                    {{ $message }}
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group py-3">
                                <label><strong>بدنه پست :</strong></label>
                                <div class="w-100 p-0">
                                    <textarea class="ckeditor" id="ckeditor1"
                                              name="content">{{ old('content') }}</textarea>
                                </div>
                                <div class="errors text-danger">
                                    @error('content')
                                    {{ $message }}
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group py-3">
                                <label class="mb-1"><strong>وضعیت:</strong></label>
                                <div class="col-12 py-0">
                                    <select name="status" class="form-select ">
                                        <option {{ old('status') == '1' ? 'selected' : '' }} value="1">فعال</option>
                                        <option {{ old('status') == '0' ? 'selected' : '' }} value="0">غیرفعال</option>
                                    </select>
                                </div>
                                <div class="errors text-danger">
                                    @error('status')
                                    {{ $message }}
                                    @enderror
                                </div>
                            </div>
                            <div class="form-group position-relative py-3">
                                <label><strong>تگ ها :</strong></label>
                                <input class="post-tags form-control" name="tags"/>
                                <i class="fa-solid fa-plus"></i>
                                <div class="text-danger errors">
                                    @error('tags')
                                    {{ $message }}
                                    @enderror
                                </div>
                                <ul class="search-tags">

                                </ul>
                                <div class="tags-container w-100">

                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 py-4">
                            <div class="form-group">
                                <div class="post-cats col-12 p-0">
                                    <div class="cats-head "><strong>دسته بندی ها</strong>
                                        <div class="cats-body col-12">
                                            @foreach (\App\Models\blog\Category::all() as $cat)
                                                <div>
                                                    <input value="{{ $cat->id }}" name="category_id" type="checkbox"
                                                           class="form-check-input ml-1"/>
                                                    <label><strong>{{ $cat->title }}</strong></label>
                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-2 pt-3">
                            <button type="submit" class="btn btn-primary">ایجاد پست</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
@endsection


@push('scripts')
    <script src="{{ asset('js/dashboard/ckeditor.js') }}"></script>

    <script src="{{ asset('/js/dashboard/blog/post.js') }}"></script>

    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('js/dashboard/ckeditor-init.js') }}"></script>
@endpush
