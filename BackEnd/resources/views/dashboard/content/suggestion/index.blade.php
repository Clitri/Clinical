@extends('dashboard.layout.master')

@section('pagetitle')
    @parent
    مدیریت پیشنهادات
@endsection

@section('head')
    <link href="{{ asset('/css/dashboard/jquery.dataTables.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/dashboard/buttons-datatable.css') }}" />
@endsection

@section('content')
    <section class="content">
        <div class="content-body">

            <div class="container-fluid">

                <div class="row mx-0">
                    <div class="manage-posts d-flex">
                        <div class="col-12">
                            <div class="d-flex manage-title  border-bottom pb-2">
                                <h4>مدیریت پیشنهادات </h4>
                            </div>
                            <div>
                                <label class="label-in-search"> جستجو : </label>
                                <input type="search" class="in-search">
                            </div>
                            <div class="datatable-posts mt-4">
                                <div class="table-responsive">
                                    <table class="display table table-pro posts-table" style="min-width: 845px">
                                        <thead>
                                        <tr>
                                            <th>ردیف</th>
                                            <th>پیام</th>
                                            <th>فایل</th>
                                            <th>ایمیل</th>
                                            <th>عملیات</th>
                                        </tr>
                                        </thead>
                                        <tbody class="search-table">
                                        @php($counter = 1)
                                        @foreach($suggestions as $suggestion)
                                            <tr id="suggestion-{{$suggestion->id}}">
                                                <td>{{$counter++}}</td>
                                                <td>{{$suggestion->content}}</td>
                                                <td><a href="{{asset('/images/suggestions/'.$suggestion->file)}}"
                                                       alt="">{{$suggestion->file}}</a></td>
                                                <td>{{$suggestion->email}}</td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"
                                                           id="{{$suggestion->id}}"><i
                                                                class="fa-solid fa-trash"></i></a>
                                                    </div>
                                                </td>

                                            </tr>
                                        @endforeach

                                        </tbody>
                                    </table>
                                    {{$suggestions->links('pagination.default')}}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@push('scripts')

    <script src="{{ asset('/js/dashboard/content/suggestion.js') }}"></script>

    <script src="{{ asset('/js/dashboard/datatables.init.js') }}"></script>
@endpush
