<div>
    <!-- Left Sidebar -->
    <aside id="leftsidebar" class="sidebar">
        <!-- Menu -->
        <div class="menu">
            <ul class="list">

                <li class="{{ request()->routeIs('study*') ? 'active' : '' }}">
                    <a href="{{auth()->user()->hasRole('Researcher') || auth()->user()->hasRole('Assistant') ?
route('study') : route('dashboard')}}">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                             height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"/>
                                <path
                                    d="M3.95709826,8.41510662 L11.47855,3.81866389 C11.7986624,3.62303967 12.2013376,3.62303967 12.52145,3.81866389 L20.0429,8.41510557 C20.6374094,8.77841684 21,9.42493654 21,10.1216692 L21,19.0000642 C21,20.1046337 20.1045695,21.0000642 19,21.0000642 L4.99998155,21.0000673 C3.89541205,21.0000673 2.99998155,20.1046368 2.99998155,19.0000673 L2.99999828,10.1216672 C2.99999935,9.42493561 3.36258984,8.77841732 3.95709826,8.41510662 Z M10,13 C9.44771525,13 9,13.4477153 9,14 L9,17 C9,17.5522847 9.44771525,18 10,18 L14,18 C14.5522847,18 15,17.5522847 15,17 L15,14 C15,13.4477153 14.5522847,13 14,13 L10,13 Z"
                                    fill="#ffffff"/>
                            </g>
                        </svg>
                        <span>خانه</span>
                    </a>
                </li>
                <li class="{{ request()->routeIs('profile') ? 'active' : '' }}">
                    <a href="{{route('profile')}}">
                        <svg id="icon-ds" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                             stroke-linejoin="round" class="feather feather-users">
                            <circle fill="#fff" opacity="0.5" cx="12" cy="12" r="10"/>
                            <path
                                d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 L7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                                fill="#fff" opacity="0.8"/>
                        </svg>
                        <span>پروفایل</span>
                    </a>
                </li>
                @if(!(auth()->user()->hasRole('Researcher') || auth()->user()->hasRole('Assistant')) && Auth::user()->hasAnyPermission(['read-study','read-studies']))
                    <li class="{{ request()->routeIs('study*') ? 'active' : '' }}">
                        <a href="{{route('study')}}">
                            <svg id="icon-apps" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">

                                <path
                                    d="M4.5,3 L19.5,3 C20.3284271,3 21,3.67157288 21,4.5 L21,19.5 C21,20.3284271 20.3284271,21 19.5,21 L4.5,21 C3.67157288,21 3,20.3284271 3,19.5 L3,4.5 C3,3.67157288 3.67157288,3 4.5,3 Z M8,5 C7.44771525,5 7,5.44771525 7,6 C7,6.55228475 7.44771525,7 8,7 L16,7 C16.5522847,7 17,6.55228475 17,6 C17,5.44771525 16.5522847,5 16,5 L8,5 Z"/>
                            </svg>
                            <span> طرح ها</span>
                        </a>
                    </li>
                @endif
                @can('read-user')
                    <li class="{{ request()->routeIs('user') ? 'active' : '' }}">
                        <a href="#" onclick="return false;" class="menu-toggle waves-effect waves-block">
                            <svg id="icon-appss" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                            </svg>
                            <span>کاربران</span>
                        </a>
                        <ul class="ml-menu" style="display: none;">
                            @can('read-user')
                                <li>
                                    <a href="{{route('user',['role'=>'User'])}}"
                                       class="toggled waves-effect waves-block">کاربر</a>
                                </li>
                            @endcan
                            @can('read-supervisor')
                                <li>
                                    <a href="{{route('user',['role'=>'Supervisor'])}}"
                                       class="toggled waves-effect waves-block">ناظر</a>
                                </li>
                            @endcan
                            @can('read-agent')
                                <li>
                                    <a href="{{route('user',['role'=>'Agent'])}}"
                                       class="toggled waves-effect waves-block">بیمارگیر</a>
                                </li>
                            @endcan
                            @can('read-admin')
                                <li>
                                    <a href="{{route('user',['role'=>'Admin'])}}"
                                       class="toggled waves-effect waves-block">ادمین</a>
                                </li>
                            @endcan
                        </ul>
                    </li>
                @endcan
                @can('read-patient')
                    <li class="{{ request()->routeIs('patient*') ? 'active' : '' }}">
                        <a href="{{route('patient')}}">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                 width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24"/>
                                    <path
                                        d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                        fill="#fff" fill-rule="nonzero" opacity="0.8"/>
                                    <path
                                        d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                        fill="#fff" opacity=".8" fill-rule="nonzero"/>
                                </g>
                            </svg>
                            <span>بیمار</span>
                        </a>
                    </li>
                @endcan

                @can('read-researchers')
                    <li class="{{ request()->routeIs('researcher*') ? 'active' : '' }}">
                        <a href="{{route('researcher')}}">
                            <svg id="icon-ideu" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
                                <path
                                    d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                                    fill="#fff" fill-rule="nonzero"
                                    transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>
                                <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>
                            </svg>
                            <span>طراحان</span>
                        </a>
                    </li>
                @endcan

                @can('read-comment')
                    <li class="{{ request()->routeIs('comment*') ? 'active' : '' }}">
                        <a href="{{route('comment')}}">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                 width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"/>
                                    <polygon fill="#fff" opacity="0.8" points="5 15 3 21.5 9.5 19.5"/>
                                    <path
                                        d="M13.5,21 C8.25329488,21 4,16.7467051 4,11.5 C4,6.25329488 8.25329488,2 13.5,2 C18.7467051,2 23,6.25329488 23,11.5 C23,16.7467051 18.7467051,21 13.5,21 Z M9,8 C8.44771525,8 8,8.44771525 8,9 C8,9.55228475 8.44771525,10 9,10 L18,10 C18.5522847,10 19,9.55228475 19,9 C19,8.44771525 18.5522847,8 18,8 L9,8 Z M9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 L14,14 C14.5522847,14 15,13.5522847 15,13 C15,12.4477153 14.5522847,12 14,12 L9,12 Z"
                                        fill="#fff"/>
                                </g>
                            </svg>
                            <span>نظرات</span>
                        </a>
                    </li>
                @endcan


                @can('read-service')
                    <li class="{{ request()->routeIs('service*') ? 'active' : '' }}">
                        <a href="{{route('service')}}">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                 width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"/>
                                    <path
                                        d="M3,4 L20,4 C20.5522847,4 21,4.44771525 21,5 L21,7 C21,7.55228475 20.5522847,8 20,8 L3,8 C2.44771525,8 2,7.55228475 2,7 L2,5 C2,4.44771525 2.44771525,4 3,4 Z M10,10 L20,10 C20.5522847,10 21,10.4477153 21,11 L21,13 C21,13.5522847 20.5522847,14 20,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,11 C9,10.4477153 9.44771525,10 10,10 Z M10,16 L20,16 C20.5522847,16 21,16.4477153 21,17 L21,19 C21,19.5522847 20.5522847,20 20,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,17 C9,16.4477153 9.44771525,16 10,16 Z"
                                        fill="#fff"/>
                                    <rect fill="#fff" opacity="0.3" x="2" y="10" width="5" height="10"
                                          rx="1"/>
                                </g>
                            </svg>
                            <span>سرویس ها</span>
                        </a>
                    </li>
                @endcan
                @can('read-service')
                    <li class="{{ request()->routeIs('orders') ? 'active' : '' }}">
                        <a href="{{route('orders')}}">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                 width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"/>
                                    <path
                                        d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"
                                        fill="#fff" opacity="0.8"/>
                                    <path
                                        d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"
                                        fill="#fff"/>
                                    <rect fill="#000000" opacity="0.3" x="10" y="9" width="7" height="2" rx="1"/>
                                    <rect fill="#000000" opacity="0.3" x="7" y="9" width="2" height="2" rx="1"/>
                                    <rect fill="#000000" opacity="0.3" x="7" y="13" width="2" height="2" rx="1"/>
                                    <rect fill="#000000" opacity="0.3" x="10" y="13" width="7" height="2" rx="1"/>
                                    <rect fill="#000000" opacity="0.3" x="7" y="17" width="2" height="2" rx="1"/>
                                    <rect fill="#000000" opacity="0.3" x="10" y="17" width="7" height="2" rx="1"/>
                                </g>
                            </svg>
                            <span>سفارش ها</span>
                        </a>
                    </li>
                @endcan
                @role('Researcher')
                <li class="{{ request()->routeIs('service*') ? 'active' : '' }}">
                    <a href="{{route('service.showServices')}}">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"/>
                                <path
                                    d="M3,4 L20,4 C20.5522847,4 21,4.44771525 21,5 L21,7 C21,7.55228475 20.5522847,8 20,8 L3,8 C2.44771525,8 2,7.55228475 2,7 L2,5 C2,4.44771525 2.44771525,4 3,4 Z M10,10 L20,10 C20.5522847,10 21,10.4477153 21,11 L21,13 C21,13.5522847 20.5522847,14 20,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,11 C9,10.4477153 9.44771525,10 10,10 Z M10,16 L20,16 C20.5522847,16 21,16.4477153 21,17 L21,19 C21,19.5522847 20.5522847,20 20,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,17 C9,16.4477153 9.44771525,16 10,16 Z"
                                    fill="#fff"/>
                                <rect fill="#fff" opacity="0.7" x="2" y="10" width="5" height="10"
                                      rx="1"/>
                            </g>
                        </svg>
                        <span>سرویس ها</span>
                    </a>
                </li>
                {{--                <li>--}}
                {{--                    <a href="{{route('cart')}}">--}}
                {{--                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"--}}
                {{--                             height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">--}}
                {{--                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">--}}
                {{--                                <rect x="0" y="0" width="24" height="24"/>--}}
                {{--                                <path--}}
                {{--                                    d="M18.1446364,11.84388 L17.4471627,16.0287218 C17.4463569,16.0335568 17.4455155,16.0383857 17.4446387,16.0432083 C17.345843,16.5865846 16.8252597,16.9469884 16.2818833,16.8481927 L4.91303792,14.7811299 C4.53842737,14.7130189 4.23500006,14.4380834 4.13039941,14.0719812 L2.30560137,7.68518803 C2.28007524,7.59584656 2.26712532,7.50338343 2.26712532,7.4104669 C2.26712532,6.85818215 2.71484057,6.4104669 3.26712532,6.4104669 L16.9929851,6.4104669 L17.606173,3.78251876 C17.7307772,3.24850086 18.2068633,2.87071314 18.7552257,2.87071314 L20.8200821,2.87071314 C21.4717328,2.87071314 22,3.39898039 22,4.05063106 C22,4.70228173 21.4717328,5.23054898 20.8200821,5.23054898 L19.6915238,5.23054898 L18.1446364,11.84388 Z"--}}
                {{--                                    fill="#fff" opacity="1"/>--}}
                {{--                                <path--}}
                {{--                                    d="M6.5,21 C5.67157288,21 5,20.3284271 5,19.5 C5,18.6715729 5.67157288,18 6.5,18 C7.32842712,18 8,18.6715729 8,19.5 C8,20.3284271 7.32842712,21 6.5,21 Z M15.5,21 C14.6715729,21 14,20.3284271 14,19.5 C14,18.6715729 14.6715729,18 15.5,18 C16.3284271,18 17,18.6715729 17,19.5 C17,20.3284271 16.3284271,21 15.5,21 Z"--}}
                {{--                                    fill="#ffffff"/>--}}
                {{--                            </g>--}}
                {{--                        </svg>--}}
                {{--                        <span>سبد خرید</span>--}}
                {{--                    </a>--}}
                {{--                </li>--}}
                @endrole
                @role('User|Researcher')
                <li class="{{ request()->routeIs('comment*') ? 'active' : '' }}">
                    <a href="{{route('comment.create')}}">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                             height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"/>
                                <polygon fill="#fff" opacity="0.8" points="5 15 3 21.5 9.5 19.5"/>
                                <path
                                    d="M13.5,21 C8.25329488,21 4,16.7467051 4,11.5 C4,6.25329488 8.25329488,2 13.5,2 C18.7467051,2 23,6.25329488 23,11.5 C23,16.7467051 18.7467051,21 13.5,21 Z M9,8 C8.44771525,8 8,8.44771525 8,9 C8,9.55228475 8.44771525,10 9,10 L18,10 C18.5522847,10 19,9.55228475 19,9 C19,8.44771525 18.5522847,8 18,8 L9,8 Z M9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 L14,14 C14.5522847,14 15,13.5522847 15,13 C15,12.4477153 14.5522847,12 14,12 L9,12 Z"
                                    fill="#fff"/>
                            </g>
                        </svg>
                        <span>ثبت نظر</span>
                    </a>
                </li>

                @endrole

                @if(auth()->user()->hasRole('Researcher') && auth()->user()->hasPermissionTo('read-assistant'))
                    <li class="{{ request()->routeIs('assistant*') ? 'active' : '' }}">
                        <a href="{{route('assistant')}}">
                            <svg id="icon-app" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
                                <path
                                    d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                    fill="#fff" fill-rule="nonzero" opacity="0.9"/>
                                <path
                                    d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                    fill="#fff" fill-rule="nonzero"/>
                            </svg>
                            <span>دستیارها</span>
                        </a>
                    </li>
                @endif
                @can('read-user')
                    <li class="{{ request()->routeIs('post*') || request()->routeIs('tag*') || request()->routeIs('category*')? 'active' : '' }}">
                        <a href="#" onclick="return false;" class="menu-toggle waves-effect waves-block">
                            <svg id="icon-jh" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">

                                <!-- <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> -->
                                <!-- <rect x="0" y="0" width="24" height="24"/> -->
                                <path
                                    d="M3,4 L20,4 C20.5522847,4 21,4.44771525 21,5 L21,7 C21,7.55228475 20.5522847,8 20,8 L3,8 C2.44771525,8 2,7.55228475 2,7 L2,5 C2,4.44771525 2.44771525,4 3,4 Z M10,10 L20,10 C20.5522847,10 21,10.4477153 21,11 L21,13 C21,13.5522847 20.5522847,14 20,14 L10,14 C9.44771525,14 9,13.5522847 9,13 L9,11 C9,10.4477153 9.44771525,10 10,10 Z M10,16 L20,16 C20.5522847,16 21,16.4477153 21,17 L21,19 C21,19.5522847 20.5522847,20 20,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,17 C9,16.4477153 9.44771525,16 10,16 Z"
                                    fill="#fff"/>
                                <rect fill="#fff" opacity=".8" x="2" y="10" width="5" height="10" rx="1"/>
                                <!-- </g> -->
                            </svg>
                            <span> وبلاگ </span>
                        </a>
                        <ul class="ml-menu" style="display: none;">
                            <li class="{{ request()->routeIs('post*') ? 'active' : '' }}">
                                <a href="{{route('post')}}" class=" waves-effect waves-block">پست</a>
                            </li>
                            <li class="{{ request()->routeIs('tag*') || request()->routeIs('category*') ? 'active' : '' }}">
                                <a href="{{route('tag')}}" class="toggled waves-effect waves-block">تگ و دسته بندی</a>
                            </li>
                        </ul>
                    </li>
                @endcan

                @can('read-user')
                    <li class="{{ request()->routeIs('report*')? 'active' : '' }}">
                        <a href="#" onclick="return false;" class="menu-toggle waves-effect waves-block">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                 width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"/>
                                    <rect fill="#fff" opacity="0.3" x="7" y="4" width="3" height="13" rx="1.5"/>
                                    <rect fill="#fff" opacity="0.3" x="12" y="9" width="3" height="8" rx="1.5"/>
                                    <path
                                        d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
                                        fill="#fff" fill-rule="nonzero"/>
                                    <rect fill="#fff" opacity="0.3" x="17" y="11" width="3" height="6" rx="1.5"/>
                                </g>
                            </svg>
                            <span> گزارش </span>
                        </a>
                        <ul class="ml-menu" style="display: none;">
                            <li class="{{ request()->routeIs('report.study') ? 'active' : '' }}">
                                <a href="{{route('report.study')}}" class=" waves-effect waves-block">طرح</a>
                            </li>
                            <li class="{{ request()->routeIs('report.researcher') ? 'active' : '' }}">
                                <a href="{{route('report.researcher')}}"
                                   class="toggled waves-effect waves-block">طراح</a>
                            </li>
                            <li class="{{ request()->routeIs('report.assistant')? 'active' : ''  }}">
                                <a href="{{route('report.assistant')}}"
                                   class="toggled waves-effect waves-block">دستیار</a>
                            </li>
                            <li class="{{ request()->routeIs('report.patient')? 'active' : ''  }}">
                                <a href="{{route('report.patient')}}"
                                   class="toggled waves-effect waves-block">بیمار</a>
                            </li>
                            <li class="{{ request()->routeIs('report.user') ? 'active' : '' }}">
                                <a href="#" onclick="return false;" class="menu-toggle waves-effect waves-block">
                                    <span>کاربر</span>
                                </a>
                                <ul class="ml-menu" style="display: none;">
                                    @can('read-user')
                                        <li>
                                            <a href="{{route('report.user',['role'=>'User'])}}"
                                               class="toggled waves-effect waves-block">کاربر</a>
                                        </li>
                                    @endcan
                                    @can('read-supervisor')
                                        <li>
                                            <a href="{{route('report.user',['role'=>'Supervisor'])}}"
                                               class="toggled waves-effect waves-block">ناظر</a>
                                        </li>
                                    @endcan
                                    @can('read-agent')
                                        <li>
                                            <a href="{{route('report.user',['role'=>'Agent'])}}"
                                               class="toggled waves-effect waves-block">بیمارگیر</a>
                                        </li>
                                    @endcan
                                    @can('read-admin')
                                        <li>
                                            <a href="{{route('report.user',['role'=>'Admin'])}}"
                                               class="toggled waves-effect waves-block">ادمین</a>
                                        </li>
                                    @endcan
                                </ul>
                            </li>

                        </ul>
                    </li>
                @endcan
                @can('read-slider')
                    <li class="{{ request()->routeIs('suggestion*') ? 'active' : '' }}">
                        <a href="{{route('suggestion')}}">
                            <svg id="icon-appp" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
                                <path
                                    d="M14.486222,18 L12.7974954,21.0565532 C12.530414,21.5399639 11.9220198,21.7153335 11.4386091,21.4482521 C11.2977127,21.3704077 11.1776907,21.2597005 11.0887419,21.1255379 L9.01653358,18 L5,18 C3.34314575,18 2,16.6568542 2,15 L2,6 C2,4.34314575 3.34314575,3 5,3 L19,3 C20.6568542,3 22,4.34314575 22,6 L22,15 C22,16.6568542 20.6568542,18 19,18 L14.486222,18 Z"
                                    fill="#00000" opacity="1"/>
                                <path
                                    d="M6,7 L15,7 C15.5522847,7 16,7.44771525 16,8 C16,8.55228475 15.5522847,9 15,9 L6,9 C5.44771525,9 5,8.55228475 5,8 C5,7.44771525 5.44771525,7 6,7 Z M6,11 L11,11 C11.5522847,11 12,11.4477153 12,12 C12,12.5522847 11.5522847,13 11,13 L6,13 C5.44771525,13 5,12.5522847 5,12 C5,11.4477153 5.44771525,11 6,11 Z"
                                    fill="#00000"/>
                            </svg>
                            <span>پیشنهادات</span>
                        </a>
                    </li>
                @endcan
                @can('read-slider')
                    <li class="{{ request()->routeIs('slider*') ? 'active' : '' }}">
                        <a href="#" onclick="return false;" class="menu-toggle waves-effect waves-block">
                            <svg id="icon-ap" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
                                <path
                                    d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"/>
                            </svg>
                            <span>تنظیمات داشبورد</span>
                        </a>
                        <ul class="ml-menu" style="display: none;">
                            <li class="{{ request()->routeIs('slider*') ? 'active' : '' }}">
                                <a href="{{route('slider')}}" class=" waves-effect waves-block">اسلایدر</a>
                            </li>
                        </ul>
                    </li>
                @endcan

                <li class="{{ request()->routeIs('calendar') ? 'active' : '' }}">
                    <a href="{{route('calendar')}}">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                             height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"/>
                                <path
                                    d="M10.9630156,7.5 L11.0475062,7.5 C11.3043819,7.5 11.5194647,7.69464724 11.5450248,7.95024814 L12,12.5 L15.2480695,14.3560397 C15.403857,14.4450611 15.5,14.6107328 15.5,14.7901613 L15.5,15 C15.5,15.2109164 15.3290185,15.3818979 15.1181021,15.3818979 C15.0841582,15.3818979 15.0503659,15.3773725 15.0176181,15.3684413 L10.3986612,14.1087258 C10.1672824,14.0456225 10.0132986,13.8271186 10.0316926,13.5879956 L10.4644883,7.96165175 C10.4845267,7.70115317 10.7017474,7.5 10.9630156,7.5 Z"
                                    fill="#fff"/>
                                <path
                                    d="M7.38979581,2.8349582 C8.65216735,2.29743306 10.0413491,2 11.5,2 C17.2989899,2 22,6.70101013 22,12.5 C22,18.2989899 17.2989899,23 11.5,23 C5.70101013,23 1,18.2989899 1,12.5 C1,11.5151324 1.13559454,10.5619345 1.38913364,9.65805651 L3.31481075,10.1982117 C3.10672013,10.940064 3,11.7119264 3,12.5 C3,17.1944204 6.80557963,21 11.5,21 C16.1944204,21 20,17.1944204 20,12.5 C20,7.80557963 16.1944204,4 11.5,4 C10.54876,4 9.62236069,4.15592757 8.74872191,4.45446326 L9.93948308,5.87355717 C10.0088058,5.95617272 10.0495583,6.05898805 10.05566,6.16666224 C10.0712834,6.4423623 9.86044965,6.67852665 9.5847496,6.69415008 L4.71777931,6.96995273 C4.66931162,6.97269931 4.62070229,6.96837279 4.57348157,6.95710938 C4.30487471,6.89303938 4.13906482,6.62335149 4.20313482,6.35474463 L5.33163823,1.62361064 C5.35654118,1.51920756 5.41437908,1.4255891 5.49660017,1.35659741 C5.7081375,1.17909652 6.0235153,1.2066885 6.2010162,1.41822583 L7.38979581,2.8349582 Z"
                                    fill="#fff" opacity="1"/>
                            </g>
                        </svg>
                        <span>تقویم</span>
                    </a>
                </li>
                <li>
                    <a class=" waves-effect waves-block">
                        <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18"
                             height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                             stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                            <polyline points="16 17 21 12 16 7"/>
                            <line x1="21" y1="12" x2="9" y2="12"/>
                        </svg>
                        <form method="post" action="{{route('logout')}}" class="form-logout">
                            @csrf
                            <button type="submit"><span>خروج</span></button>
                        </form>
                    </a>
                </li>
            </ul>
        </div>
        <!-- #Menu -->
    </aside>
    <!-- #END# Left Sidebar -->
</div>
