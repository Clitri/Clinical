@extends('layout.master')
@section('pagetitle','سوالات متداول')
@section('text', 'FAQ')
@section('content')
    <x-pagehead text="سوالات متداول" />

    @include('layout.particlas.panelfaq')

@endsection
