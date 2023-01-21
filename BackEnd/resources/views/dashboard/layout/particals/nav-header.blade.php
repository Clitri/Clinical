<div class="nav-header">
    <a href="{{route('dashboard')}}" class="brand-logo">
        <img class="logo-abbr" src="{{asset('/images/dashboard/logo-white.png')}}" alt>
        <img class="logo-compact" src="{{asset('/images/dashboard/logo-text.png')}}" alt>
        <img class="brand-title" src="{{asset('/images/dashboard/logo-text.png')}}" alt>
    </a>
    <div class="nav-control">
        <div class="hamburger">
            <span class="line"></span><span class="line"></span><span class="line"></span>
        </div>
    </div>
</div>


<div class="chatbox">
    <div class="chatbox-close"></div>
    <div class="custom-tab-1">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#notes">یادداشت</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#alerts">هشدارها</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#chat">چت کنید</a>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade active show" id="chat" role="tabpanel">
                <div class="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
                    <div class="card-header chat-list-header text-center">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px"
                                viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect fill="#000000" x="4" y="11" width="16" height="2" rx="1" />
                                    <rect fill="#000000" opacity="0.3"
                                        transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                                        x="4" y="11" width="16" height="2" rx="1" />
                                </g>
                            </svg></a>
                        <div>
                            <h6 class="mb-1">لیست چت</h6>
                            <p class="mb-0">نمایش همه</p>
                        </div>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px"
                                viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <circle fill="#000000" cx="5" cy="12" r="2" />
                                    <circle fill="#000000" cx="12" cy="12" r="2" />
                                    <circle fill="#000000" cx="19" cy="12" r="2" />
                                </g>
                            </svg></a>
                    </div>
                    <div class="card-body contacts_body p-0 dz-scroll  " id="DZ_W_Contacts_Body">
                        <ul class="contacts">
                            <li class="name-first-letter">A</li>
                            <li class="active dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/1.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>آرچی پارکر</span>
                                        <p>Kalid آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/2.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon offline"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>الفی میسون</span>
                                        <p>طاهره 7 دقیقه پیش رفت</p>
                                    </div>
                                </div>
                            </li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/3.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>آهارلی کین</span>
                                        <p>سامی آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/4.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon offline"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>ژاکوبین آن است</span>
                                        <p>نرگس 30 دقیقه پیش رفت</p>
                                    </div>
                                </div>
                            </li>
                            <li class="name-first-letter">B</li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/5.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon offline"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>بشید صمیم</span>
                                        <p>رشید 50 دقیقه پیش رفت</p>
                                    </div>
                                </div>
                            </li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/1.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>بردی رونان</span>
                                        <p>Kalid آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/2.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon offline"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>بردی رونان</span>
                                        <p>Kalid آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                            <li class="name-first-letter">D</li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/3.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>بردی رونان</span>
                                        <p>Kalid آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/4.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon offline"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>بردی رونان</span>
                                        <p>Kalid آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                            <li class="name-first-letter">J</li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/5.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon offline"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>بردی رونان</span>
                                        <p>Kalid آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/1.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>بردی رونان</span>
                                        <p>Kalid آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/2.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon offline"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>بردی رونان</span>
                                        <p>Kalid آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/3.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>بردی رونان</span>
                                        <p>Kalid آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                            <li class="name-first-letter">O</li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/4.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon offline"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>بردی رونان</span>
                                        <p>Kalid آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                            <li class="dz-chat-user">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont">
                                        <img src="{{asset('/images/dashboard/5.jpg')}}" class="rounded-circle user_img" alt>
                                        <span class="online_icon offline"></span>
                                    </div>
                                    <div class="user_info">
                                        <span>بردی رونان</span>
                                        <p>Kalid آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card chat dz-chat-history-box d-none">
                    <div class="card-header chat-list-header text-center">
                        <a href="#" class="dz-chat-history-back">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24" />
                                    <rect fill="#000000" opacity="0.3"
                                        transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) "
                                        x="14" y="7" width="2" height="10" rx="1" />
                                    <path
                                        d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                                        fill="#000000" fill-rule="nonzero"
                                        transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) " />
                                </g>
                            </svg>
                        </a>
                        <div>
                            <h6 class="mb-1">چت با خیلش</h6>
                            <p class="mb-0 text-success">آنلاین</p>
                        </div>
                        <div class="dropdown">
                            <a href="#" data-toggle="dropdown" aria-expanded="false"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px"
                                    viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24" />
                                        <circle fill="#000000" cx="5" cy="12" r="2" />
                                        <circle fill="#000000" cx="12" cy="12" r="2" />
                                        <circle fill="#000000" cx="19" cy="12" r="2" />
                                    </g>
                                </svg></a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li class="dropdown-item"><i class="fa-solid fa-user-circle text-primary mr-2"></i>
                                    مشاهده پروفایل</li>
                                <li class="dropdown-item"><i class="fa-solid fa-users text-primary mr-2"></i> اضافه
                                    کردن به
                                    دوستان نزدیک</li>
                                <li class="dropdown-item"><i class="fa-solid fa-plus text-primary mr-2"></i> اضافه
                                    کردن به گروه</li>
                                <li class="dropdown-item"><i class="fa-solid fa-ban text-primary mr-2"></i> م</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body msg_card_body dz-scroll" id="DZ_W_Contacts_Body3">
                        <div class="d-flex justify-content-start mb-4">
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/1.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                            <div class="msg_cotainer">
                                سلام سامیم چطوری؟
                                <span class="msg_time">8:40 AM, امروز</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mb-4">
                            <div class="msg_cotainer_send">
                                سلام خالد من خوبم ممنون شما چطور؟
                                <span class="msg_time_send">8:55 AM, امروز</span>
                            </div>
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/2.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                        </div>
                        <div class="d-flex justify-content-start mb-4">
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/1.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                            <div class="msg_cotainer">
                                من هم خوبم ممنون از قالب چتتون
                                <span class="msg_time">9:00 AM, امروز</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mb-4">
                            <div class="msg_cotainer_send">
                                من هم خوبم ممنون از قالب چتتون
                                <span class="msg_time_send">9:05 AM, امروز</span>
                            </div>
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/2.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                        </div>
                        <div class="d-flex justify-content-start mb-4">
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/1.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                            <div class="msg_cotainer">
                                من هم خوبم ممنون از قالب چتتون
                                <span class="msg_time">9:07 AM, امروز</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mb-4">
                            <div class="msg_cotainer_send">
                                من هم خوبم ممنون از قالب چتتون
                                <span class="msg_time_send">9:10 AM, امروز</span>
                            </div>
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/2.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                        </div>
                        <div class="d-flex justify-content-start mb-4">
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/1.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                            <div class="msg_cotainer">
                                من هم خوبم ممنون از قالب چتتون
                                <span class="msg_time">9:12 AM, امروز</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-start mb-4">
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/1.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                            <div class="msg_cotainer">
                                من هم خوبم ممنون از قالب چتتون
                                <span class="msg_time">8:40 AM, امروز</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mb-4">
                            <div class="msg_cotainer_send">
                                من هم خوبم ممنون از قالب چتتون
                                <span class="msg_time_send">8:55 AM, امروز</span>
                            </div>
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/2.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                        </div>
                        <div class="d-flex justify-content-start mb-4">
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/1.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                            <div class="msg_cotainer">
                                من هم خوبم ممنون از قالب چتتون
                                <span class="msg_time">9:00 AM, امروز</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mb-4">
                            <div class="msg_cotainer_send">
                                من هم خوبم ممنون از قالب چتتون
                                <span class="msg_time_send">9:05 AM, امروز</span>
                            </div>
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/2.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                        </div>
                        <div class="d-flex justify-content-start mb-4">
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/1.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                            <div class="msg_cotainer">
                                من هم خوبم ممنون از قالب چتتون
                                <span class="msg_time">9:07 AM, امروز</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mb-4">
                            <div class="msg_cotainer_send">
                                من هم خوبم ممنون از قالب چتتون
                                <span class="msg_time_send">9:10 AM, امروز</span>
                            </div>
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/2.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                        </div>
                        <div class="d-flex justify-content-start mb-4">
                            <div class="img_cont_msg">
                                <img src="{{asset('/images/dashboard/1.jpg')}}" class="rounded-circle user_img_msg" alt>
                            </div>
                            <div class="msg_cotainer">
                                من هم خوبم ممنون از قالب چتتون
                                <span class="msg_time">9:12 AM, امروز</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer type_msg">
                        <div class="input-group">
                            <textarea class="form-control" placeholder="Type your message..."></textarea>
                            <div class="input-group-append">
                                <button type="button" class="btn btn-primary"><i
                                        class="fa-solid fa-location-arrow"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="alerts" role="tabpanel">
                <div class="card mb-sm-3 mb-md-0 contacts_card">
                    <div class="card-header chat-list-header text-center">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px"
                                viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <circle fill="#000000" cx="5" cy="12" r="2" />
                                    <circle fill="#000000" cx="12" cy="12" r="2" />
                                    <circle fill="#000000" cx="19" cy="12" r="2" />
                                </g>
                            </svg></a>
                        <div>
                            <h6 class="mb-1">اطلاعیه</h6>
                            <p class="mb-0">مشاهده همه</p>
                        </div>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px"
                                viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <path
                                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                        fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                    <path
                                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                        fill="#000000" fill-rule="nonzero" />
                                </g>
                            </svg></a>
                    </div>
                    <div class="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body1">
                        <ul class="contacts">
                            <li class="name-first-letter">وضعیت سرور</li>
                            <li class="active">
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont primary">KK</div>
                                    <div class="user_info">
                                        <span>تولد دیوید نستر</span>
                                        <p class="text-primary">امروزp>
                                    </div>
                                </div>
                            </li>
                            <li class="name-first-letter">اجتماعی</li>
                            <li>
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont success">RU<i class="icon fa-birthday-cake"></i></div>
                                    <div class="user_info">
                                        <span>کمال ساده شده</span>
                                        <p>جیم اسمیت در مورد وضعیت شما نظر داد</p>
                                    </div>
                                </div>
                            </li>
                            <li class="name-first-letter">وضعیت سرور</li>
                            <li>
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont primary">AU<i class="icon fa-solid fa-user-plus"></i></div>
                                    <div class="user_info">
                                        <span>آهارلی کین</span>
                                        <p>سامی آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex bd-highlight">
                                    <div class="img_cont info">MO<i class="icon fa-solid fa-user-plus"></i></div>
                                    <div class="user_info">
                                        <span>آهارلی کین</span>
                                        <p>سامی آنلاین است</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer"></div>
                </div>
            </div>
            <div class="tab-pane fade" id="notes">
                <div class="card mb-sm-3 mb-md-0 note_card">
                    <div class="card-header chat-list-header text-center">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px"
                                viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect fill="#000000" x="4" y="11" width="16" height="2" rx="1" />
                                    <rect fill="#000000" opacity="0.3"
                                        transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                                        x="4" y="11" width="16" height="2" rx="1" />
                                </g>
                            </svg></a>
                        <div>
                            <h6 class="mb-1">یادداشت</h6>
                            <p class="mb-0">اضافه کردن یادداشت</p>
                        </div>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px"
                                viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <path
                                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                        fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                    <path
                                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                        fill="#000000" fill-rule="nonzero" />
                                </g>
                            </svg></a>
                    </div>
                    <div class="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body2">
                        <ul class="contacts">
                            <li class="active">
                                <div class="d-flex bd-highlight">
                                    <div class="user_info">
                                        <span>سفارش جدید ثبت شد..</span>
                                        <p>10 Aug 2021</p>
                                    </div>
                                    <div class="mr-auto">
                                        <a href="#" class="btn btn-primary btn-xs sharp ml-1"><i
                                                class="fa-solid fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger btn-xs sharp"><i
                                                class="fa-solid fa-trash"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex bd-highlight">
                                    <div class="user_info">
                                        <span>یوتیوب، یک وب سایت به اشتراک گذاری ویدیو..</span>
                                        <p>10 Aug 2021</p>
                                    </div>
                                    <div class="mr-auto">
                                        <a href="#" class="btn btn-primary btn-xs sharp ml-1"><i
                                                class="fa-solid fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger btn-xs sharp"><i
                                                class="fa-solid fa-trash"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex bd-highlight">
                                    <div class="user_info">
                                        <span>جان فقط محصولت را بخر..</span>
                                        <p>10 Aug 2021</p>
                                    </div>
                                    <div class="mr-auto">
                                        <a href="#" class="btn btn-primary btn-xs sharp ml-1"><i
                                                class="fa-solid fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger btn-xs sharp"><i
                                                class="fa-solid fa-trash"></i></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="d-flex bd-highlight">
                                    <div class="user_info">
                                        <span>احسان جاکوبی</span>
                                        <p>10 Aug 2021</p>
                                    </div>
                                    <div class="mr-auto">
                                        <a href="#" class="btn btn-primary btn-xs sharp ml-1"><i
                                                class="fa-solid fa-pencil"></i></a>
                                        <a href="#" class="btn btn-danger btn-xs sharp"><i
                                                class="fa-solid fa-trash"></i></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
