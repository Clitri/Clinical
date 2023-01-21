@extends('dashboard.layout.master')
@section('pagetitle')
    @parent
    مدیریت  نظرات
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
                    <div class="manage-posts content-main-box d-flex">
                        <div class="col-12">
                            <div>
                                <h2 class="pb-2 border-bottom">مدیریت نظرات</h2>
                            </div>
                            <div>
                                <label class="label-in-search"> جستجو : </label>
                                <input type="search" class="in-search">
                            </div>
                            <div class="datatable-posts mt-4">
                                <div class="table-responsive">
                                    <table class="display posts-table" style="min-width: 845px">
                                        <thead>
                                        <tr>
                                            <th>ردیف</th>
                                            <th>عنوان نظر</th>
                                            <th>پیام</th>
                                            <th>وضعیت</th>
                                            <th>عملیات</th>
                                        </tr>
                                        </thead>
                                        <tbody class="search-table">
                                        @php($counter = 1)
                                        @foreach ($comments as $comment)
                                            <tr id="comment-{{ $comment->id }}">
                                                <td>{{ $counter++ }}</td>
                                                <td>{{ $comment->title }}</td>
                                                <td>{{ $comment->message }}</td>
                                                <td>

                                                    @can('edit-comment')
                                                        <div
                                                            class="activity-btn {{ $comment->status ? 'switch-to-active' : '' }}">
                                                            <span class="activity-switch"></span>
                                                            <input data-id="{{ $comment->id }}" type="checkbox"
                                                                   class="d-none"
                                                                {{ $comment->status ? 'checked' : '' }} />
                                                        </div>
                                                    @else
                                                        {{ $comment->status ? 'تایید شده' : 'تایید نشده' }}

                                                    @endcan
                                                </td>
                                                <td>
                                                    {{-- data-toggle="modal" data-target="#ticket_send" --}}
                                                    <div class="d-flex justify-content-center">
                                                        <a href="#"
                                                           class="btn btn-primary shadow btn-xs sharp fetch" id="{{ $comment->id }}"><i
                                                                class="fa-solid fa-eye"></i></a>
                                                        @can('delete-comment')
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp delete"
                                                           id="{{ $comment->id }}"><i
                                                                class="fa-solid fa-trash"></i></a>
                                                            @endcan
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach

                                        </tbody>
                                    </table>
                                    {{ $comments->links('pagination.default') }}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="modal fade in" id="ticket_send">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <form>
                            <div class="modal-header">
                                <h4 class="modal-title">مشاهده نظر</h4>
                                <button type="button" class="close" data-dismiss="modal"
                                        data-target="#ticket_send"><span>&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form_ticket_send">
                                    <div class="form-group position-relative p-0">
                                        <div class="col-12 px-2">
                                            <label class="mb-1"><strong>عنوان :</strong></label>
                                            <input type="text" class="" id="title" name="subject" placeholder=""/>
                                            <div class="errors text-danger fs-6">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group position-relative p-0">
                                        <div class="col-12 px-2">
                                            <label class="mb-1"><strong>پیام :</strong></label>
                                            <textarea name="message" class="" id="message"></textarea>
                                            <div class="errors text-danger fs-6">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                {{-- <button type="submit" class="btn btn-primary">فرستادن</button> --}}
                                <button type="button" class="btn btn-danger" data-dismiss="modal"
                                        data-target="#ticket_send">بستن
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@push('scripts')

    <script src="{{ asset('/js/dashboard/content/comment.js') }}"></script>
{{--    <script data-cfasync="false" src="{{ asset('/js/dashboard/email-decode.min.js') }}"></script>
--}}
    <script src="{{ asset('/js/dashboard/custom-select.js') }}"></script>
    <script src="{{ asset('/js/dashboard/dataTables.js') }}"></script>
    <script src="{{ asset('js/dashboard/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-html5.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons-print.js') }}"></script>
    <script src="{{ asset('js/dashboard/buttons.js') }}"></script>
    <script src="{{ asset('/js/dashboard/datatables.init.js') }}"></script>
     @endpush
