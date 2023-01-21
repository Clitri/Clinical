@extends('layout.master')
@section('pagetitle', 'خانه')

@section('content')


    <x-mainslider :sliders="$sliders" />

    <x-banner :banners="$banners" />

    @include('layout.particlas.services')

{{--    @include('layout.particlas.pageservices')--}}
    @include('layout.particlas.analytics')

{{--    @include('layout.particlas.sectionpage')--}}



{{--    <x-blog :blogs="$blogs" />--}}

    <x-slider :slider="$slider" />

    <x-sectionimage :images="$images" />



@section('js')
    <script src="{{ asset('/js/news.js') }}"></script>
    <script src="{{ asset('/js/dashboard/sweetalert2@9.js') }}"></script>

@endsection

@endsection
