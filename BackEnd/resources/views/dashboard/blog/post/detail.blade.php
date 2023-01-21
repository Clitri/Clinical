@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    جزئیات پست
@endsection

@section('content')
    <section class="content">

        <div class="content-body">
            <div class="container-fluid">
                <div class="row page-titles mx-0 justify-content-center">
                    <div class="col-12 col-xl-12 py-3 px-2">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6 col-md-6 col-12 px-4">
                                    <img src="{{asset('/images/'.$post->img)}}" class="img-post-det" alt="">
                                </div>
                                <div class="col-lg-6 col-md-6 col-12 px-4">
                                    <h3 class="title-post mb-1">{{$post->title}}</h3>
                                    <a href="#" class="mr-5 tcate"> {{$post->category->title}}
                                        @if(count($post->category->subCategories) >=1 )
                                            @foreach($post->category->subCategories as $cat)
                                                {{' / '.$cat->title}}
                                            @endforeach
                                        @endif </a>
                                    <p class="mt-3">
                                        {!! $post->content !!}
                                    </p>
                                    <p class="">
                                    <div class="cate-post d-flex">
                                    </div>
                                    <div class="post-footer">
                                        @foreach($post->tags as $tag)
                                            <a class="ps-tag" href="#">{{$tag->title}}</a>
                                        @endforeach
                                    </div>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div class="modal fade" id="ticket_send">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">
                            <h4 class="modal-title">ارسال تیکت</h4>
                            <button type="button" class="close" data-dismiss="modal" data-target="#ticket_send"><span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form_ticket_send">
                                <div class="form-group position-relative p-0">
                                    <div class="col-12 px-2">
                                        <label class="mb-1"><strong>موضوع :</strong></label>
                                        <input type="text" class="" name="subject" placeholder=""/>
                                        <div class="errors text-danger fs-6">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group position-relative p-0">
                                    <div class="col-12 px-2">
                                        <label class="mb-1"><strong>پیام :</strong></label>
                                        <textarea name="message" class=""></textarea>
                                        <div class="errors text-danger fs-6">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="upload-main-wrapper px-1 pt-4">
                                        <div class="upload-wrapper">
                                            <input type="file" name="file" id="upload-file">
                                            <svg version="1.1" id="upload-icon" xmlns="http://www.w3.org/2000/svg"
                                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                                 preserveAspectRatio="xMidYMid meet"
                                                 viewBox="224.3881704980842 176.8527621722847 221.13266283524905 178.8472378277154"
                                                 width="221.13" height="178.85">
                                                <defs>
                                                    <path
                                                        d="M357.38 176.85C386.18 176.85 409.53 204.24 409.53 238.02C409.53 239.29 409.5 240.56 409.42 241.81C430.23 246.95 445.52 264.16 445.52 284.59C445.52 284.59 445.52 284.59 445.52 284.59C445.52 309.08 423.56 328.94 396.47 328.94C384.17 328.94 285.74 328.94 273.44 328.94C246.35 328.94 224.39 309.08 224.39 284.59C224.39 284.59 224.39 284.59 224.39 284.59C224.39 263.24 241.08 245.41 263.31 241.2C265.3 218.05 281.96 199.98 302.22 199.98C306.67 199.98 310.94 200.85 314.93 202.46C324.4 186.96 339.88 176.85 357.38 176.85Z"
                                                        id="b1aO7LLtdW"></path>
                                                    <path
                                                        d="M306.46 297.6L339.79 297.6L373.13 297.6L339.79 255.94L306.46 297.6Z"
                                                        id="c4SXvvMdYD">
                                                    </path>
                                                    <path
                                                        d="M350.79 293.05L328.79 293.05L328.79 355.7L350.79 355.7L350.79 293.05Z"
                                                        id="b11si2zUk"></path>
                                                </defs>
                                                <g>
                                                    <g>
                                                        <g>
                                                            <use xlink:href="#b1aO7LLtdW" opacity="1" fill="#ccc"
                                                                 fill-opacity="1"></use>
                                                        </g>
                                                        <g>
                                                            <g>
                                                                <use xlink:href="#c4SXvvMdYD" opacity="1" fill="#115169"
                                                                     fill-opacity="1"></use>
                                                            </g>
                                                            <g>
                                                                <use xlink:href="#b11si2zUk" opacity="1" fill="#115169"
                                                                     fill-opacity="1">
                                                                </use>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span class="file-upload-text">بارگذاری فایل</span>
                                            <div class="file-success-text">
                                                <svg class="mx-2" version="1.1" id="check"
                                                     xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                     viewBox="0 0 100 100" xml:space="preserve">
                                                    <circle
                                                        style="fill:rgba(0,0,0,0);stroke:#115169;stroke-width:10;stroke-miterlimit:10;"
                                                        cx="49.799" cy="49.746" r="44.757"/>
                                                    <polyline
                                                        style="fill:rgba(0,0,0,0);stroke:#115169;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
                                                        points="
                                                27.114,51 41.402,65.288 72.485,34.205 "/>
                                                </svg>
                                                <span class="success-text">موفقیت آمیز</span>
                                            </div>
                                            <div>
                                                <a id="file-upload-name" href="#"></a>
                                            </div>
                                        </div>
                                        <div class="errors text-danger fs-6"></div>
                                        <!-- <p id="file-upload-name"></p> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">فرستادن</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal"
                                    data-target="#ticket_send">حذف
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="copyright">
                <p>کپی رایت © طراحی شده است &amp; توسعه یافته توسط <a href="http://dexignlab.com/" target="_blank">DexignLab</a>
                    2021
                </p>
            </div>
        </div>

    </section>

@endsection


@push('scripts')
    <script src="{{ asset('js/dashboard/ckeditor.js') }}"></script>

    <script src="{{ asset('/js/dashboard/blog/post.js') }}"></script>
{{--    <script data-cfasync="false" src="{{ asset('/js/dashboard/email-decode.min.js') }}"></script>
--}}
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('js/dashboard/ckeditor-init.js') }}"></script>
@endpush
