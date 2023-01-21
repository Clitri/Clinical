
@extends('layout.master')
@section('pagetitle','خدمات')
@section('content')
<x-pagehead text="خدمات"/>
{{--<x-service :services="$services"/> --}}
@include('layout.particlas.services')
@endsection




