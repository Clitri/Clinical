<!DOCTYPE html>
<html lang="en">
@include('dashboard.layout.particals.title')
@include('dashboard.layout.particals.head')

<body class="light rtl mainBody">
@include('sweetalert::alert')
@include('dashboard.layout.particals.preloader')


<div id="main-wrapper">
{{--    @include('dashboard.layout.particals.nav-header')--}}
{{--    @include('dashboard.layout.particals.contentbox')--}}
{{--    @include('dashboard.layout.particals.header')--}}
{{--    @include('dashboard.layout.particals.deznav')--}}
    @include('dashboard.layout.particals.nav')
    @include('dashboard.layout.particals.sidebar')
    @include('dashboard.layout.particals.chatbox')
{{--    @include('dashboard.layout.particals.deznav')--}}
    @yield('content')
  
</div>
@include('dashboard.layout.particals.footer')

@include('dashboard.layout.particals.query')
@stack('scripts')
</body>
</html>
