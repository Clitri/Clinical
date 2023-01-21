<head>
    <title>RCT</title>
    <meta charset="utf-8">

    <meta name="description" content>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ asset('/css/bootstrap.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/main.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/animations.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/fonts.css') }}" />
    <link rel="shortcut icon" type="image/png" href="{{ asset('/images/logo1 - Copy.png') }}">

    <link rel="stylesheet" href="{{ asset('/css/fontawesome/css/all.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/fontawesome/css/fontawesome.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/fontawesome/css/brands.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/fontawesome/css/solid.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/fontawesome/css/regular.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/upload-file.css') }}" />
    <script src="{{ asset('/js/modernizr-2.6.2.min.js') }}"></script>
    @if (Request::RouteIs('team'))
        <link rel="stylesheet" href="{{ asset('/css/owl.carousel.css') }}" />
        <link rel="stylesheet" href="{{ asset('/css/owl.theme.default.css') }}" />
        <link rel="stylesheet" href="{{ asset('/css/owl.theme.green.css') }}" />
        <script src="{{ asset('/js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('/js/owl.carousel.js') }}"></script>
    @endif


</head>
