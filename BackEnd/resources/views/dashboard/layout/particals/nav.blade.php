<nav class="navbar">
    <div class="container-fluid">
        <div class="navbar-header">
            <a href="#" onClick="return false;" class="bars"></a>
            <a class="navbar-brand" href="{{ route('index') }}">
                <img src="/images/logo-white.png" alt id="logo1">
                <img src="/images/logo1.png" alt="" id="logo2">
            </a>
            <a href="#" onClick="return false;" class="navbar-toggle"></a>
        </div>
        <div class="navbar-collapse close-collaose">
            <ul class="nav navbar-nav navbar-left">
                <li>
                    <a href="#" onClick="return false;" class="sidemenu-collapse">
                        {{-- <i class="nav-hdr-btn ti-align-left"></i> --}}
                        <i class="fa-solid fa-bars fs-4"></i>
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav header-left navbar-right d-block">
                <li class="nav-item ">
                    @include('dashboard.layout.particals.chat-icon')
                </li>
                @if (auth()->user()->hasRole('Researcher'))
                    <li class="nav-item dropdown notification_dropdown">
                        <a class="nav-link bell" href="{{ route('cart') }}">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                    </li>
                @endif
                {{--                <li class="nav-item dropdown notification_dropdown"> --}}
                {{--                    <a class="nav-link bell ai-icon" href="#" role="button" data-toggle="dropdown"> --}}
                {{--                        <svg id="icon-user" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"> --}}
                {{--                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /> --}}
                {{--                            <path d="M13.73 21a2 2 0 0 1-3.46 0" /> --}}
                {{--                        </svg> --}}
                {{--                        <div class="pulse-css"></div> --}}
                {{--                    </a> --}}
                {{--                    <div class="dropdown-menu dropdown-menu-right"> --}}
                {{--                        <div id="DZ_W_Notification1" class="widget-media dz-scroll p-3" style="height:380px;"> --}}
                {{--                            <ul class="timeline"> --}}
                {{--                                <li> --}}
                {{--                                    <div class="timeline-panel"> --}}
                {{--                                        <div class="media ml-2"> --}}
                {{--                                            <img alt="image" width="50" src="images/1.jpg"> --}}
                {{--                                        </div> --}}
                {{--                                        <div class="media-body"> --}}
                {{--                                            <h6 class="mb-1">Dr sultads Send you Photo</h6> --}}
                {{--                                            <small class="d-block">29 July 2021 - 02:26 PM</small> --}}
                {{--                                        </div> --}}
                {{--                                    </div> --}}
                {{--                                </li> --}}
                {{--                                <li> --}}
                {{--                                    <div class="timeline-panel"> --}}
                {{--                                        <div class="media ml-2 media-info"> --}}
                {{--                                            KG --}}
                {{--                                        </div> --}}
                {{--                                        <div class="media-body"> --}}
                {{--                                            <h6 class="mb-1">Resport created successfully</h6> --}}
                {{--                                            <small class="d-block">29 July 2021 - 02:26 PM</small> --}}
                {{--                                        </div> --}}
                {{--                                    </div> --}}
                {{--                                </li> --}}
                {{--                                <li> --}}
                {{--                                    <div class="timeline-panel"> --}}
                {{--                                        <div class="media ml-2 media-success"> --}}
                {{--                                            <i class="fa-solid fa-home"></i> --}}
                {{--                                        </div> --}}
                {{--                                        <div class="media-body"> --}}
                {{--                                            <h6 class="mb-1">Reminder : Treatment Time!</h6> --}}
                {{--                                            <small class="d-block">29 July 2021 - 02:26 PM</small> --}}
                {{--                                        </div> --}}
                {{--                                    </div> --}}
                {{--                                </li> --}}
                {{--                                <li> --}}
                {{--                                    <div class="timeline-panel"> --}}
                {{--                                        <div class="media ml-2"> --}}
                {{--                                            <img alt="image" width="50" src="images/1.jpg"> --}}
                {{--                                        </div> --}}
                {{--                                        <div class="media-body"> --}}
                {{--                                            <h6 class="mb-1">Dr sultads Send you Photo</h6> --}}
                {{--                                            <small class="d-block">29 July 2021 - 02:26 PM</small> --}}
                {{--                                        </div> --}}
                {{--                                    </div> --}}
                {{--                                </li> --}}
                {{--                                <li> --}}
                {{--                                    <div class="timeline-panel"> --}}
                {{--                                        <div class="media ml-2 media-danger"> --}}
                {{--                                            KG --}}
                {{--                                        </div> --}}
                {{--                                        <div class="media-body"> --}}
                {{--                                            <h6 class="mb-1">Resport created successfully</h6> --}}
                {{--                                            <small class="d-block">29 July 2021 - 02:26 PM</small> --}}
                {{--                                        </div> --}}
                {{--                                    </div> --}}
                {{--                                </li> --}}
                {{--                                <li> --}}
                {{--                                    <div class="timeline-panel"> --}}
                {{--                                        <div class="media ml-2 media-primary"> --}}
                {{--                                            <i class="fa-solid fa-home"></i> --}}
                {{--                                        </div> --}}
                {{--                                        <div class="media-body"> --}}
                {{--                                            <h6 class="mb-1">Reminder : Treatment Time!</h6> --}}
                {{--                                            <small class="d-block">29 July 2021 - 02:26 PM</small> --}}
                {{--                                        </div> --}}
                {{--                                    </div> --}}
                {{--                                </li> --}}
                {{--                            </ul> --}}
                {{--                        </div> --}}
                {{--                        <a class="all-notification" href="#">See all notifications <i --}}
                {{--                                class="ti-arrow-right"></i></a> --}}
                {{--                    </div> --}}
                {{--                </li> --}}


                <li class="nav-item dropdown header-profile">
                    <a class="nav-link" href="#" role="button" data-toggle="dropdown">
                        @if (auth()->user()->profile()->exists() && auth()->user()->profile->img != null)
                            <img id="nav-img" src="{{ asset('/images/profile/' . auth()->user()->profile->img) }}"
                                width="20" alt>
                        @else
                            <img id="nav-img" src="{{ asset('/images/dashboard/user.png') }}" width="20" alt>
                        @endif
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">

                        <a href="app-profile.html" class="dropdown-item ai-icon">
                            <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18"
                                height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span class="mr-2">{{ auth()->user()->username }}</span>
                        </a>
                        <a href="email-inbox.html" class="dropdown-item ai-icon">
                            <svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" class="text-success" width="18"
                                height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <span class="mr-2">{{ auth()->user()->email }} </span>
                        </a>
                        {{--                        <a href="page-login.html" class="dropdown-item ai-icon"> --}}
                        {{--                            <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" --}}
                        {{--                                 height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" --}}
                        {{--                                 stroke-linecap="round" stroke-linejoin="round"> --}}
                        {{--                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/> --}}
                        {{--                                <polyline points="16 17 21 12 16 7"/> --}}
                        {{--                                <line x1="21" y1="12" x2="9" y2="12"/> --}}
                        {{--                            </svg> --}}
                        {{--                            <span class="mr-2">خروج </span> --}}
                        {{--                        </a> --}}

                    </div>
                </li>
                <li class="li-btn-logout">
                    <form method="post" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="btn-logout">
                            <a class="dropdown-item ai-icon icon-logout">
                                {{-- <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-white"
                                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1="21" y1="12" x2="9" y2="12" />
                                </svg> --}}
                                <i class="fa-solid fa-right-from-bracket"></i>
                            </a>
                        </button>
                    </form>
                </li>

            </ul>
        </div>
    </div>
</nav>
