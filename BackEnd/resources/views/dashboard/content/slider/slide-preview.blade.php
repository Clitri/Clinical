@extends('dashboard.layout.master')
@section('head')
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
@endsection

@section('pagetitle')
    @parent
    مشاهده  اسلایدر
@endsection
@section('content')

    <section class="content">
        <div class="content-body">

            <div class="container-fluid">
                <div class="row mx-0">
                    <div class="slide-preview">
                        <div class="">
                            <img src="{{ asset('/images/slider/' . $slider->img) }}" alt>
                            <div class="description-container mt-2 pb-4">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="slide_description_wrapper">
                                            <div class="slide_description highlight">
                                                <div class="intro-layer" data-animation="fadeInLeft">
                                                    <p class="yantramanov">
                                                        {{ $slider->title }}
                                                    </p>
                                                </div>
                                                <div class="intro-layer" data-animation="fadeInRight">
                                                    <p class="yantramanov">
                                                        {{ $slider->top_title }}
                                                    </p>
                                                </div>
                                                <div class="">
                                                    <p>{{ $slider->body }}</p>
                                                </div>
                                            </div>
                                            <!-- eof .slide_description -->
                                        </div>
                                        <!-- eof .slide_description_wrapper -->
                                    </div>
                                    <!-- eof .col-* -->
                                </div>
                                <!-- eof .row -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        @endsection

