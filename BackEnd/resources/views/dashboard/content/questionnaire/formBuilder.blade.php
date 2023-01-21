@extends('dashboard.layout.master')
@section('pagetitle', 'آنالیز داده ها')

@section('content')

    <section class="content"> <div class="content-body">
        <div class="container-fluid">
            <div class="row mx-0">
                <div class="form-builder">
                    <div id="form_builder"></div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')

{{--    <script data-cfasync="false" src="{{ asset('/js/dashboard/email-decode.min.js') }}"></script>
--}}
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
         <script src="{{ asset('js/dashboard/formio.js') }}"></script>
@endpush
