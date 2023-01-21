@extends('dashboard.layout.master')
@section('pagetitle', 'چت با پشتیبان')

@section('content')

    <section class="content-body">
        <div class="container-fluid">
            {{--            <div class="block-header">--}}
            {{--                <div class="row">--}}
            {{--                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">--}}
            {{--                        <ul class="breadcrumb breadcrumb-style ">--}}
            {{--                            <li class="breadcrumb-item">--}}
            {{--                                <h4 class="page-title">چت</h4>--}}
            {{--                            </li>--}}
            {{--                            <li class=" bcrumb-1">--}}
            {{--                                <a href="index_1.html">--}}
            {{--                                    خانه</a>--}}
            {{--                            </li>--}}
            {{--                            <li class="breadcrumb-item active">چت</li>--}}
            {{--                        </ul>--}}
            {{--                    </div>--}}
            {{--                </div>--}}
            {{--            </div>--}}
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div class="card">
                        <div class="chat">
                            {{--                            <div class="chat-header clearfix">--}}
                            {{--                                <img src="images/user2.jpg" alt="avatar">--}}
                            {{--                                <div class="chat-about">--}}
                            {{--                                    <div class="chat-with">آرش خادملو</div>--}}
                            {{--                                    <div class="chat-num-messages">2 پیام جدید</div>--}}
                            {{--                                </div>--}}
                            {{--                            </div>--}}
                            <div class="chat-history" id="chat-conversation">
                                <ul id="messages">
                                    @foreach($messages as $message)
                                        @if($message->to_user == null)
                                            <li class="clearfix">
                                                <div class="message-data text-right">
                                            <span class="message-data-time">{{$message->date}}
                                                </span> &nbsp; &nbsp;
                                                    <span class="message-data-name">شما</span>
                                                </div>
                                                <div
                                                    class="message other-message float-right">{{$message->message}}</div>
                                            </li>
                                        @else
                                            <li>
                                                <div class="message-data">
                                                    <span class="message-data-name">پشتیبان </span>
                                                    <span class="message-data-time">{{$message->date}}</span>
                                                </div>
                                                <div class="message my-message">
                                                    <p>{{$message->message}}</p>
                                                    <div class="row">
                                                    </div>
                                                </div>
                                            </li>
                                        @endif
                                    @endforeach
                                </ul>
                            </div>
                            <div class="chat-message clearfix">
                                <div class="form-group">
                                    <div class="form-line">
                                        <input type="text" id="message" class="form-control"
                                               placeholder="متن را اینجا وارد کنید ..">
                                    </div>
                                </div>
                                {{--                                <div class="chat-upload">--}}
                                {{--                                    <button type="button" class="btn btn-circle waves-effect waves-circle waves-float bg-deep-orange">--}}
                                {{--                                        <i class="fa-solid fa-paperclip"></i>--}}
                                {{--                                    </button>--}}
                                {{--                                    <button type="button" class="btn btn-circle waves-effect waves-circle waves-float bg-deep-orange">--}}
                                {{--                                        <i class="fa-solid fa-smile"></i>--}}
                                {{--                                    </button>--}}
                                {{--                                </div>--}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection
@push('scripts')

     @endpush
