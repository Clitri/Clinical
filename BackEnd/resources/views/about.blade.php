@extends('layout.master')

@section('pagetitle','درباره ما')

@section('content')
    <x-pagehead text="درباره ما" />
    <x-service :services="$services" />

    <x-slider :slider="$slider" />

    <x-team :team="$team" />
@endsection
