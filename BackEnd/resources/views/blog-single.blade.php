@extends('layout.master')

@section('pagetitle','جزییات وبلاگ')

@section('content')
    <x-pagehead text="وبلاگ / جزئیات پست"/>


    <section class=" section_padding_top_50 section_padding_bottom_75">
        <div class="container">
            <div class="row mx-0 d-flex justify-content-center">
                <div class="col-12 col-lg-8">
                    <div class="post-content row">
                        <div class="post-banner justify-content-center d-flex">
                            <div class="col-lg-7">
                                <img src="{{asset('/images/'.$post->img)}}" class="d-block"/>
                            </div>
                        </div>
                        <div class="post-body py-4 row">
                            <h5 class=" text-center justify-content-center title-post">
                                <p class=" text-center justify-content-center pb-2">{{$post->title}} </p>
                            </h5>
                            <div class="text-center box-cate-post pt-1">
                                <p class="cate-post">{{$post->category->title}}
                                    @if(count($post->category->subCategories) >=1 )
                                        @foreach($post->category->subCategories as $cat)
                                            {{' / '.$cat->title}}
                                        @endforeach
                                    @endif
                                </p>
                            </div>

                            <div class="post-text">
                               {!! $post->content !!}
                                <br/>

                                <div class="post-footer mt-3">
                                    @foreach($post->tags as $tag)
                                    <a class="ps-tag" href="#">{{$tag->title}}</a>
                                    @endforeach
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection
