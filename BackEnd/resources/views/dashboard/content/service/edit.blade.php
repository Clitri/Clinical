@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    ویرایش سرویس
@endsection

@section('head')
    <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet"/>
@endsection

@section('content')
    <section class="content">
        <div class="content-body">

            <div class="container-fluid">
                <div class="row mx-0">
                    <div class="create-designer content-main-box  col-12">
                        <div class="create-designer-head">
                            <h2>ویرایش سرویس</h2>
                        </div>
                        <div class="create-designer-content">
                            <form id="create_designer" action="{{ route('service.update' , ['id'=>$service->id]) }}"
                                  method="POST"
                                  autocomplete="off" enctype="multipart/form-data">
                                @csrf
                                @method('put')
                                <div class="form-group justify-content-center d-flex">
                                    <div class="col-12 col-md-6 col-lg-5 px-2">
                                        <label><strong>عنوان سرویس</strong></label>
                                        <input value="{{old('title' , $service->title)}}" type="text"
                                               class="form-control" name="title"
                                               id="username"
                                               placeholder="عنوان سرویس"/>
                                        <div id="user-error" class="errors text-danger ">
                                            @error('title')
                                            {{$message}}
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-5 px-2 position-relative">
                                        <label><strong>عکس سرویس :</strong></label>
                                        <input type="file" name="img" class="form-control"/>
                                        <a href="{{asset('/images/service/'.$service->img)}}">{{$service->img}}</a>
                                        <div id="pass-error" class=" errors text-danger">
                                            @error('img')
                                            {{$message}}
                                            @enderror
                                        </div>
                                        <i class="show_pass fa-solid fa-eye"></i>
                                    </div>

                                    <div class="col-12 col-md-6 col-lg-5 px-2">
                                        <label><strong>تگ ها :</strong></label>
                                        <input class="service-tags form-control" name="tags"/>
                                        <i class="fa-solid fa-plus"></i>
                                        <div class="text-danger errors">
                                            @error('tags')
                                            {{ $message }}
                                            @enderror
                                        </div>
                                        <ul class="search-tags">

                                        </ul>
                                        <div class="tags-container w-100">
                                            @foreach ($service->tags as $tag)
                                                <a class="tag-item">
                                                    <i class="fa-solid fa-xmark align-middle"></i>
                                                    {{ $tag->title }}
                                                </a>
                                            @endforeach
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-5  px-2">
                                        <label><strong> قیمت یک ماهه سرویس </strong></label>
                                        <input value="{{old('price' , $service->price)}}" type="number"
                                               class="form-control" name="price"
                                               placeholder="2500 "/>
                                        <div class="errors text-danger">
                                            @error('price')
                                            {{$message}}
                                            @enderror
                                        </div>
                                    </div>

                                    {{--                                    <div class="col-12 col-md-6 col-lg-5 px-2">--}}
                                    {{--                                        <label><strong>مدت : </strong></label>--}}
                                    {{--                                        <select name="period" class="form-select">--}}
                                    {{--                                            @foreach(\App\Models\service\ServicePeriod::all() as $period)--}}
                                    {{--                                                <option--}}
                                    {{--                                                    value="{{$period->id}}" {{old('period' , $service->period->id) == $period->id ? 'selected' : ''}}>--}}
                                    {{--                                                    {{$period->month.' '}}ماهه--}}
                                    {{--                                                </option>--}}
                                    {{--                                            @endforeach--}}
                                    {{--                                        </select>--}}
                                    {{--                                        <div class="errors text-danger">--}}
                                    {{--                                            @error('period')--}}
                                    {{--                                            {{$message}}--}}
                                    {{--                                            @enderror--}}
                                    {{--                                        </div>--}}
                                    {{--                                    </div>--}}
                                    <div class="col-12 col-md-6 col-lg-5 px-2">
                                        <label><strong>نوع سرویس : </strong></label>
                                        <select name="type" class="form-select">
                                            @foreach(\App\Models\service\ServiceType::all() as $type)
                                                <option
                                                    value="{{$type->id}}" {{old('type' , $service->type->id) == $type->id ? 'selected' : ''}}>
                                                    {{$type->name}}
                                                </option>
                                            @endforeach
                                        </select>
                                        <div class="errors text-danger">
                                            @error('type')
                                            {{$message}}
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-5 px-2">
                                        <label><strong> وضعیت :</strong></label>
                                        <select name="status" class="form-select">
                                            <option
                                                value="1" {{old('status' , $service->status) == 1 ? 'selected' : ''}}>
                                                فعال
                                            </option>
                                            <option
                                                value="0" {{old('status' , $service->status) == 0 ? 'selected' : ''}}>
                                                غیر فعال
                                            </option>
                                        </select>
                                        <div class="errors text-danger">
                                            @error('status')
                                            {{$message}}
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-10 px-2">
                                        <label><strong> تخفیف ماهانه (درصد)</strong></label>
                                        <input value="{{old('off' , $service->off)}}" type="text" class="form-control"
                                               name="off"
                                               id="username"
                                               placeholder=""/>
                                        <div id="user-error" class="errors text-danger ">
                                            @error('off')
                                            {{$message}}
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-10 px-2">
                                        <label><strong> محتوای سرویس :</strong></label>

                                        <textarea class="ckeditor" id="ckeditor2"
                                                  name="content">{{old('content' , $service->content)}}</textarea>
                                        <div class="errors text-danger">
                                            @error('content')
                                            {{$message}}
                                            @enderror
                                        </div>
                                    </div>
                                </div>

                                <div class="pt-3 col-12 col-md-6 col-lg-10 px-2 btn-crt-pro">
                                    <button type="submit" class="btn btn-primary">ویرایش سرویس</button>
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
    <script src="{{ asset('js/dashboard/ckeditor.js') }}"></script>

    <script src="{{ asset('/js/dashboard/content/service.js') }}"></script>
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('js/dashboard/ckeditor-init.js') }}"></script>
@endpush
