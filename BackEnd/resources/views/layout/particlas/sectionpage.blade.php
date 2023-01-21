<section class="ls section_padding_90  columns_margin_top_30 position-relative section-reservation">
    <div class="booking_departments background_cover background-filter"></div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8 px-4 ">
                <div class="content-card rounded muted_background shadow">
                    <h4 class="card-heading main_bg_color2">ثبت نظرات</h4>
                    <div class="card-content with_padding">
                        <form class="appointment-form" id="appointmentform" method="post"
                            action="{{ route('comment.store') }}">
                            @csrf

                            <div class="row columns_padding_5 columns_margin_0">
                                <div class="col-sm-12">

                                    <div class="col-sm-12">
                                        <div class="form-group bottommargin_10">
                                            <label for="app-author" class="sr-only">عنوان
                                                <span class="required">*</span>
                                            </label>
                                            <input value="{{ old('title') }}" type="text" aria-required="true"
                                                size="30" value name="title" id="app-author" class="form-control"
                                                placeholder="عنوان">
                                            <div class="text-danger errors fs-6">
                                                @error('title')
                                                    {{ $message }}
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group bottommargin_20">
                                            <label for="app-time" class="sr-only">پیام
                                                <span class="required">*</span>
                                            </label>
                                            <textarea aria-required="true" rows="5" cols="45" name="message" id="comment" class="form-control"
                                                placeholder="پیام">{{ old('message') }}</textarea>
                                            <div class="text-danger errors fs-6">
                                                @error('message')
                                                    {{ $message }}
                                                @enderror
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <button type="submit" id="app-submit" name="app-submit"
                                            class="theme_button block_button color2 margin_0">ثبت نظر
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
