<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content>
    <meta name="author" content>
    <meta name="robots" content>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="MotaAdmin - Bootstrap Admin Dashboard">
    <meta property="og:title" content="MotaAdmin - Bootstrap Admin Dashboard">
    <meta property="og:description" content="MotaAdmin - Bootstrap Admin Dashboard">
    <meta property="og:image" content="{{ asset('/images/dashboard/social-image.png') }}">
    <meta name="format-detection" content="telephone=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>MotaAdmin - Bootstrap Admin Dashboard</title>


    <link rel="stylesheet" href="{{ asset('/css/fontawesome/css/solid.css') }}" />
    <link rel="shortcut icon" type="image/png" href="{{ asset('/images/logo1 - Copy.png') }}">

{{--    <link href="{{ asset('/css/dashboard/jquery.dataTables.min.css') }}" rel="stylesheet">--}}
{{--    <link rel="stylesheet" href="{{ asset('css/dashboard/buttons-datatable.css') }}" />--}}
{{--    <link rel="stylesheet" href="{{ asset('/css/dashboard/calendar/css/kamadatepicker.css') }}" />--}}
{{--    <link href="{{ asset('/css/dashboard/questionnaire.css') }}" rel="stylesheet" />--}}

    <link rel="stylesheet" href="{{ asset('/css/dashboard/bootstrap.css') }}" />
    <link href="{{ asset('/css/dashboard/style.css') }}" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('/css/fontawesome/css/all.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/dashboard/q_style.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/dashboard/dash-style/style.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/dashboard/dash-style/all-themes.css') }}" />

    @yield('head')
    @if (Request::RouteIs('dashboard.index'))
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="keywords" content>
        <meta name="author" content>
        <meta name="robots" content>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="MotaAdmin - Bootstrap Admin Dashboard">
        <meta property="og:title" content="MotaAdmin - Bootstrap Admin Dashboard">
        <meta property="og:description" content="MotaAdmin - Bootstrap Admin Dashboard">
        <meta property="og:image" content="{{ asset('/images/dashboard/social-image.png') }}">
        <meta name="format-detection" content="telephone=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="shortcut icon" type="image/png" href="{{ asset('/images/dashboard/favicon.png') }}">
        <link href="{{ asset('/css/dashboard/jquery.dataTables.min.css') }}" rel="stylesheet">
        <link href="{{ asset('/css/dashboard/style.css') }}" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/dashboard/dash-style/style.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/dashboard/dash-style/all-themes.css') }}" />
    @endif
</head>
