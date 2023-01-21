<!DOCTYPE html>

<html class="no-js">


@include('layout.particlas.title')
@include('layout.particlas.head')

<body>
@include('sweetalert::alert')
@include('layout.particlas.pageloader')
<div id="canvas">
    <div id="box_wrapper">
{{--        @include('layout.particlas.sectionhead')--}}
        @include('layout.particlas.header')

        @yield('content')
        @include('layout.particlas.footer')
        @include('layout.particlas.sectionfooter')
        <a id="toTop">
        </a>
    </div>
</div>
        @include('layout.particlas.query')

</body>
</html>
