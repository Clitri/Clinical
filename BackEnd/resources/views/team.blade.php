@extends('layout.master')
@section('pagetitle','تیم')

@section('content')

<x-pagehead text="تیم"/>				
<x-team :team="$team"/>

@endsection
			


		

	