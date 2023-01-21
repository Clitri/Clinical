<div id="profile-settings" class="tab-pane fade">
    <div class="pt-3">
        <div class="settings-form">
            <h4 class="text-primary">ویرایش اطلاعات</h4>
            <form id="profileedit" method="post" >

                @csrf
                @method('PUT')

                <input type="hidden" id="id" name="id">
                <div class="form-group">
                    <div class=" col-12 col-md-6 px-2">
                        <label>شغل</label>
                        <input type="text" name="job" id="job" placeholder="شغل" class="form-control">
                        <div class="text-danger errors"></div>
                    </div>
                    <div class=" col-12 col-md-6 px-2">
                        <label>تلفن</label>
                        <input type="text" name="phone" id="phone" placeholder="+98457632"
                            class="form-control">
                        <div class="text-danger errors"></div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-12 px-2">
                        <label>آدرس</label>
                        <input type="text" name="address" id="address" placeholder="1234 Main St"
                            class="form-control">
                        <div class="text-danger errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-12 px-2">
                        <label>محل کار</label>
                        <input type="text" name="workoffice" id="workoffice" placeholder="محل کار"
                            class="form-control">
                        <div class="text-danger errors"></div>
                    </div>
                </div>
                <div class="form-group">
                    <div class=" col-12 col-md-6 px-2">
                        <label>استان</label>
                        <select class="form-select" name="province" id="province-drop">
                            @foreach ($province as $province)
                                <option value="{{ $province->id }}"
                                    {{ $profile->province == $province->id ? 'selected' : '' }}>
                                    {{ $province->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class=" col-12 col-md-6 px-2">
                        <label>شهر</label>
                        <select class="form-select" name="city" id="city-drop">
                            <option value="{{ $city->id }}" selected>
                                {{ $city->name }}</option>
                        </select>
                    </div>
                </div>

                <button class="btn btn-primary mx-2" type="submit">ثبت
                    نام</button>
            </form>
        </div>
    </div>
</div>
