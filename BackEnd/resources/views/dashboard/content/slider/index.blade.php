@extends('dashboard.layout.master')
@section('pagetitle')
    @parent
    مدیریت  اسلایدر
@endsection

@section('head')
    <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet" />
@endsection

@section('content')
    <section class="content">
        <div class="content-body">

            <div class="container-fluid">
                <div class="row mx-0">
                    <div class="manage-slider w-100">
                        <div class="manage-slider-head d-flex align-items-center justify-content-between">
                            <h2>مدیریت اسلایدر</h2>
                            <!-- <a href="#" class="add-slide-btn">افزودن اسلاید
                                                                        <i class="fa-solid fa-plus align-middle"></i>
                                                                    </a> -->
                        </div>
                        <div class="manage-slider-content">
                            <div class="row mx-0">
                                @if(count($sliders) != 3)
                                    <div class="col-12 col-md-6 col-lg-4 py-2 add-slide">
                                        <div id="add-slide" class="manage-slide-item">
                                            <a data-toggle="modal" data-target="#new-slide">
                                                <i class="fa-solid fa-circle-plus"></i><br/>
                                                افزودن اسلاید
                                            </a>
                                        </div>
                                    </div>
                                @endif
                                @foreach ($sliders as $slider)
                                    <div id="slide-{{ $slider->id }}" class="col-12 col-md-6 col-lg-4 py-2 slide">

                                        <div class="manage-slide-item">

                                            <img src="{{ asset('/images/slider/' . $slider->img) }}" alt/>
                                            <div class="slide-name">
                                                <h3>{{ $slider->title }}</h3>
                                                <p>{{ $slider->body }}</p>
                                            </div>
                                            <div class="slide-info">
                                                <div class="slide-icons">
                                                    <a href="/dashboard/slider/{{ $slider->id }}/show">
                                                        <i class="fa-solid fa-eye"></i>
                                                    </a>

                                                    <i data-toggle="modal" onclick="Edit({{ $slider->id }})"
                                                       class="fa-solid fa-pen-clip edit-slide-btn"></i>

                                                    <i class="fa-solid fa-trash-can delete-slide-btn"
                                                       data-id="{{ $slider->id }}"></i>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                @endforeach

                                <div class="modal fade" id="edit-slide">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <form id="Editslider" method="POST" enctype="multipart/form-data">
                                                @csrf
                                                @method('put')
                                                <input type="hidden" id="id" name="id">
                                                <div class="modal-header">
                                                    <h4 class="modal-title">ویرایش اسلاید</h4>
                                                    <button type="button" class="close close-btn" data-dismiss="modal"
                                                            data-target="#edit-slide"><span>&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">

                                                    <div class="form-group">
                                                        <div class="col-12 px-2">
                                                            <label><strong>عنوان :</strong></label>
                                                            <input type="text" id="titles" name="title"
                                                                   class="form-control" placeholder="عنوان"/>
                                                            <div class="errors text-danger">
                                                                @error('title')
                                                                {{ $message }}
                                                                @enderror
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="col-12 px-2">
                                                            <label><strong>زیرعنوان :</strong></label>
                                                            <input type="text" id="top_titles" name="top_title"
                                                                   class="form-control" placeholder="زیرعنوان"/>
                                                            <div class="errors text-danger">
                                                                @error('top_title')
                                                                {{ $message }}
                                                                @enderror
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group d-flex flex-wrap">
                                                        <div class="col-12 px-2">
                                                            <label><strong>متن :</strong></label>
                                                            <input type="text" id="bodys" name="body"
                                                                   placeholder="متن" class="form-control"/>
                                                            <div class="errors text-danger">
                                                                @error('body')
                                                                {{ $message }}
                                                                @enderror
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="form-group">
                                                        <div class="col-12 px-2">
                                                            <label><strong>عکس :</strong></label>
                                                            <input type="file" id="img" name="img"
                                                                   class="form-control" placeholder="عکس"/>
                                                            <div class="errors text-danger">
                                                                @error('img')
                                                                {{ $message }}
                                                                @enderror
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger light close-btn"
                                                            data-dismiss="modal" data-target="#edit-slide">بستن
                                                    </button>
                                                    <button type="submit" class="btn btn-primary">ارسال</button>
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
    <div class="modal fade" id="new-slide">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <form id="slider" autocomplete="off" enctype="multipart/form-data">
                    <div class="modal-header">
                        <h4 class="modal-title">افزودن اسلاید</h4>
                        <button type="button" class="close close-btn"
                                data-dismiss="modal"
                                data-target="#new-slide"><span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="form-group">
                            <div class="col-12 px-2">
                                <label><strong>عنوان :</strong></label>
                                <input type="text" name="title" class="form-control"
                                       placeholder="عنوان"/>
                                <div class="errors text-danger">

                                    @error('title')
                                    {{ $message }}
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-12 px-2">
                                <label><strong>زیرعنوان :</strong></label>
                                <input type="text" name="top_title"
                                       class="form-control"
                                       placeholder="زیرعنوان"/>
                                <div class="errors text-danger">
                                    @error('top_title')
                                    {{ $message }}
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="form-group d-flex flex-wrap">
                            <div class="col-12 px-2">
                                <label><strong>متن :</strong></label>
                                <input type="text" name="body" placeholder="متن"
                                       class="form-control"/>
                                <div class="errors text-danger">
                                    @error('body')
                                    {{ $message }}
                                    @enderror
                                </div>
                            </div>

                        </div>
                        <div class="form-group">
                            <div class="col-12 px-2">
                                <label><strong>عکس :</strong></label>
                                <input type="file" name="img" class="form-control"
                                       placeholder="عکس"/>
                                <div class="errors text-danger">
                                    @error('img')
                                    {{ $message }}
                                    @enderror
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger light close-btn"
                                data-dismiss="modal" data-target="#new-slide">بستن
                        </button>
                        <button type="submit" class="btn btn-primary">ارسال</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection
@push('scripts')

    <script src="{{ asset('/js/dashboard/content/slider.js') }}"></script>

    <script src="{{ asset('/js/dashboard/add-slide-validation.js') }}"></script>
    <script> if (window.performance) {
            var navEntries = window.performance.getEntriesByType('navigation');
            if (navEntries.length > 0 && navEntries[0].type === 'back_forward') {
                console.log('As per API lv2, this page is load from back/forward');
            } else if (window.performance.navigation && window.performance.navigation.type == window.performance.navigation.TYPE_BACK_FORWARD) {
                console.log('As per API lv1, this page is load from back/forward');
            } else {
                console.log('This is normal page load');
                @if (Session::has('sweet_alert.alert')) swal({!! Session::get('sweet_alert.alert') !!});
                {{ Session::forget('sweet_alert.alert') }} // This will forget the alert data after displaying it :) @endif } } else { console.log("Unfortunately, your browser doesn't support this API"); } </script>

@endpush
