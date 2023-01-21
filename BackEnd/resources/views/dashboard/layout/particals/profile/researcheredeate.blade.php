<div id="profile-settings-researcher" class="tab-pane fade">
    <div class="pt-3">
        <div class="settings-form">
            <h4 class="text-primary">ویرایش اطلاعات</h4>

            @if ($user->researcher)
                <form id="researcheredit" method="POST">

                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <input type="hidden" id="id" name="id">
                        <div class="col-12 col-md-6 px-2">
                            <label>نام</label>
                            <input type="text" name="name" id="name" placeholder="نام" class="form-control">
                            <div class="text-danger errors"></div>
                        </div>
                        <div class="col-12 col-md-6 px-2">
                            <label>نام خانوادگی</label>
                            <input type="text" name="f_name" id="f_name" placeholder="نام خانوادگی"
                                class="form-control">
                            <div class="text-danger errors"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-12 px-2">
                            <label>کدملی</label>
                            <input type="text" name="n_number" id="n_number" placeholder="کدملی"
                                class="form-control">
                            <div class="text-danger errors"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-12 px-2">
                            <label>مرتبه علمی</label>

                                <div>
                                    <select class="form-select" name="range" id="range">
                                        <option value="مربی">
                                            مربی</option>
                                        <option value="دانشیار">
                                            دانشیار</option>
                                        <option value="استادیار">
                                            استادیار</option>
                                        <option value="استاد">
                                            استاد</option>

                                    </select>
                                <div class="errors text-danger">
                                    @error('range')
                                    {{$message}}
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-12 col-md-6 px-2">
                            <label>رشته تحصیلی</label>
                            <input type="text" name="major" id="major" class="form-control">
                            <div class="text-danger errors"></div>
                        </div>
                        <div class="col-12 col-md-6 px-2">
                            <label>تخصص</label>
                            <input type="text" name="proficiency" id="proficiency" class="form-control">
                            <div class="text-danger errors"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-12 col-md-6 px-2">
                            <label>دانشگاه</label>
                            <input type="text" name="university" id="university" class="form-control">
                            <div class="text-danger errors"></div>
                        </div>

                        <div class="col-12 col-md-6 px-2">
                            <label>سازمان</label>
                            <input type="text" name="organization" id="organization" class="form-control">
                            <div class="text-danger errors"></div>
                        </div>

                    </div>


                    <button class="btn btn-primary mx-2" type="submit">ثبت
                        </button>
                </form>
            @endif
        </div>
    </div>
</div>
