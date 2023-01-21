@extends('layout.master')

@section('pagetitle','وبلاگ')

@section('content')
    <x-pagehead text="وبلاگ" />

    <section class=" section_padding_top_50 ls section_padding_bottom_75">
        <div class="container">
            <div class="row owl-news mx-0">

                <div class="col-12 col-lg-9">
                    <div class="row top-offset with-nav">
                        @foreach($posts as $post)
                        <article
                            class="vertical-item content-padding  bottom-rouded-small col-sm-12 col-md-6 col-lg-4 my-0 py-3 px-2">
                            <div class="bg-light">

                                <div class="item-media">
                                    <img src="{{asset('/images/'.$post->img)}}" alt>
                                </div>
                                <div class="item-content ">
                                    <h4 class="entry-title ">
                                        <a href="{{route('blog.detail',['id'=>$post->id])}}">{{$post->title}}</a>
                                    </h4>

                                       {!!$post->content!!}
                                    <!-- <a href="blog-single-right.html"
                                        class="theme_button block_button color1 margin_0">جزئیات را مشاهده می
                                        کند</a> -->

                                    <div class="item-action text-start">
                                        <span class="like-num">{{count($post->likes)}}</span>
                                        <i class="{{\App\Models\blog\Like::where('post_id',$post->id)->where('user_id',auth()->id())->exists() ? 'fa-solid liked' : 'fa-regular'}} fa-heart fs-5 ms-1" data-id="{{$post->id}}"></i>
                                    </div>
                                </div>
                            </div>
                        </article>
                        @endforeach
                    </div>
                </div>
                @if(count(\App\Models\blog\Category::mainCategories()) >=1)
                <div class="col-12 col-lg-3 py-3 px-2">
                    <ul class="post-cats px-0">
                        <li class="cats-head "><strong>دسته بندی ها</strong>
                            <ul class="cats-body p-2">
                                @foreach (\App\Models\blog\Category::mainCategories() as $cat)
                                    <li class="cats-type"> <a href="{{route('blog.cat' , ['id'=>$cat->id])}}">{{$cat->title}}</a>
                                        @if(count($cat->activeSubCategories) != 0)
                                        <ul>
                                            @foreach ($cat->activeSubCategories as $subCat)
                                                <li><a href="{{route('blog.cat' , ['id'=>$subCat->id])}}">{{ $subCat->title }}</a></li>
                                            @endforeach
                                        </ul>
                                            @endif
                                    </li>
                                @endforeach
                            </ul>
                        </li>
                    </ul>
                </div>
                    @endif
            </div>
        </div>
    </section>

@endsection

@section('js')
    <script src="{{asset('/js/dashboard/blog/post.js')}}"></script>
@endsection
