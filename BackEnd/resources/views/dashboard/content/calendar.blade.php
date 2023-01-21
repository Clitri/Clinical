@extends('dashboard.layout.master')
@section('pagetitle')
    @parent
    تقویم
@endsection

@section('head')
    <link rel="stylesheet" href="{{ asset('css/dashboard/calendar-style1.css') }}"/>
@endsection

@section('content')

    <section class="content">
        <div class="content-body">

            <div class="container-fluid">
                <div class="row">
                    <div class="calendar-page content-main-box">
                        <div class="calendar-header">
                            <h2 class="border-bottom pb-2 mb-4">تقویم شمسی</h2>
                        </div>
                        <div id="generalMainWrap">

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
@endsection

@push('scripts')

    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('js/dashboard/calendar-1.js') }}"></script>
    <script src="{{ asset('js/dashboard/calendar-init-1.js') }}"></script>
@endpush
