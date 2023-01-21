<!DOCTYPE html>
<html>

<head>

    <meta name="viewport" content="width=device-width,initial-scale=1.0" />

    <link rel="stylesheet" href="{{ asset('/css/bootstrap.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/formstyles.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/fontawesome/css/all.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/fontawesome/css/fontawesome.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/fontawesome/css/brands.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/fontawesome/css/solid.css') }}" />
    <link rel="stylesheet" href="{{ asset('/css/fontawesome/css/regular.css') }}" />
    @if (Request::RouteIs('register'))
        <link rel="stylesheet" href="{{ asset('/css/bootstrap.css') }}" />
        <link rel="stylesheet" href="{{ asset('/css/formstyles.css') }}" />
    @endif
</head>

<body>
    @yield('content')
    <script src="{{ asset('/js/dashboard/jquery-3.6.0.js') }}"></script>
    <script src="{{ asset('/js/auth/auth-validation.js') }}"></script>
</body>

</html>
