<header class="page_header header_color template_header table_section toggle_menu_left page-header">
    <div class="container position-relative h-100">
        <!-- main nav start -->
        <nav class="mainmenu_wrapper row mx-0 cs rounded header-block position-absolute w-100  align-items-center">


            <ul class="mainmenu nav sf-menu  pe-3 w-auto flex-grow-1">
                <li>
                <li class="{{ request()->routeIs('index') ? 'active' : '' }}">
                    <a href="{{ route('index') }}">خانه</a>
                </li>
                <li class="{{ request()->routeIs('services') ? 'active' : '' }}">
                    <a href="{{ route('services') }}">خدمات</a>
                </li>
                {{-- <li class="{{ request()->routeIs('team') ? 'active' : '' }}">
                    <a href="{{ route('team') }}">تیم ما</a>
                </li> --}}


                <li class="{{ request()->routeIs('faq') ? 'active' : '' }}">
                    <a href="{{ route('faq') }}">سوالات متداول</a>
                </li>

                <li class="{{ request()->routeIs('blog') ? 'active' : '' }}">
                    <a href="{{ route('blog') }}">وبلاگ</a>
                </li>
                {{-- <li class="{{ request()->routeIs('about') ? 'active' : '' }}">

                    <a href="{{ route('about') }}">درباره ما <i class="fa-solid fa-angle-down float-start"></i></a>

                    <ul>
                        <li class="{{ request()->routeIs('team-single') ? 'active' : '' }}">
                            <a href="{{ route('team-single') }}">مشخصات اعضا</a>
                        </li>
                    </ul>
                </li> --}}



                <!-- contacts -->
                <li class="{{ request()->routeIs('contact') ? 'active' : '' }}">
                    <a href="{{ route('contact') }}">تماس با ما</a>
                </li>
                <!-- eof contacts -->
                <div class="signup-box-inner">
                    @if (Route::has('login'))
                        @auth
                            <form method="post" action="{{ route('logout') }}">
                                @csrf
                                <button class="btn-register" type="submit">خروج</button>
                            </form>
                            <a href="{{ route('dashboard') }}" class="btn-register"><span> داشبورد </span></a>
                        @else
                            @if (Route::has('register'))
                                <a href="{{ route('register') }}">ثبت نام</a>
                            @endif
                            <a href="{{ route('login') }}">ورود </a>
                        @endauth
                    @endif
                </div>
            </ul>

            <span class="toggle_menu">
                <span></span>
            </span>
            <div class="signup-box me-auto w-auto">
                @if (Route::has('login'))
                    @auth
                        <form method="post" action="{{ route('logout') }}">
                            @csrf
                            <button class="btn-register ml-2" type="submit">خروج</button>
                        </form>
                        <a href="{{ route('dashboard') }}"><span> داشبورد </span></a>
                    @else
                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">ثبت نام</a>
                        @endif
                        <a href="{{ route('login') }}">ورود </a>


                    @endauth
                @endif
            </div>



            <!-- eof main nav -->

        </nav>



    </div>
</header>
