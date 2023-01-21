var _token = $('input[name="_token"]').val();

function editrecord(id) {
    $.get("/dashboard/profile/" + id, function (profile) {
        $("#id").val(profile.id);
        $("#address").val(profile.address);
        $("#job").val(profile.job);
        $("#phone").val(profile.phone);
        $("#workoffice").val(profile.workoffice);

        $("#province-drop").append("<option :selected>" + profile.province);
        $("#city-drop").find(":selected");
        $("#profileEditModal").modal("toggle");
    });
}

$("#researcheredit").on("submit", function (event) {
    event.preventDefault();

    designerValidation(event, "researcheredit");
});

$("#profile-settings form").on("submit", function (event) {
    event.preventDefault();
    const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const regAddress = /[`!@#$%^&*()_+=\[\]{};':"\\|.<>\/?~]/;
    const regSpace = /\s{2,}/g;
    const phoneNumberReg1 = new RegExp("^(\\+98|0)?9\\d{9}$");
    const phoneNumberReg2 = new RegExp("^0[1-8]{2,}[0-9]{8,}$");

    let id = $("#id").val();
    const address = $(this).find("input[name=address]");
    const job = $(this).find("input[name=job]");
    const phone = $(this).find("input[name=phone]");
    const workoffice = $(this).find("input[name=workoffice]");
    const img = $(this).find("input[name=img]");
    const province = $(this).find("select[name=province]");
    const city = $(this).find("select[name=city]");

    if (address.val() == "") {
        event.preventDefault();
        address.next(".errors").text("*فیلد آدرس نمی تواند خالی باشد!");
    } else if (regSpace.test(address.val()) || regAddress.test(address.val())) {
        event.preventDefault();
        address.next(".errors").text("*آدرس وارد شده معتبر نمی باشد!");
    } else {
        address.next(".errors").text("");
    }

    if (job.val() == "") {
        event.preventDefault();
        job.next(".errors").text("*فیلد شغل نمی تواند خالی باشد!");
    } else if (regSpace.test(job.val()) || regSpecial.test(job.val())) {
        event.preventDefault();
        job.next(".errors").text("*شغل وارد شده معتبر نمی باشد!");
    } else {
        job.next(".errors").text("");
    }

    if (phone.val() == "") {
        event.preventDefault();
        phone.next(".errors").text("*فیلد تلفن نمی تواند خالی باشد!");
    } else if (
        phone.val().length > 13 ||
        phone.val().length < 11 ||
        (!phoneNumberReg1.test(phone.val()) &&
            !phoneNumberReg2.test(phone.val()))
    ) {
        event.preventDefault();
        phone.next(".errors").text("*تلفن وارد شده معتبر نمی باشد!");
    } else {
        phone.next(".errors").text("");
    }

    if (workoffice.val() == "") {
        event.preventDefault();
        workoffice.next(".errors").text("*فیلد محل کار نمی تواند خالی باشد!");
    } else if (
        regSpace.test(workoffice.val()) ||
        regAddress.test(workoffice.val())
    ) {
        event.preventDefault();
        workoffice.next(".errors").text("*محل کار وارد شده معتبر نمی باشد!");
    } else {
        workoffice.next(".errors").text("");
    }

    // if (img.val() == "") {
    //     event.preventDefault();
    //     img.next(".errors").text("*فیلد عکس نمی تواند خالی باشد!");
    // } else {
    //     workoffice.next(".errors").text("");
    // }

    // if (province.val() == "") {
    //     event.preventDefault();
    //     province.next(".errors").text("*فیلد استان نمی تواند خالی باشد!");
    // } else {
    //     province.next(".errors").text("");
    // }

    // if (city.val() == "") {
    //     event.preventDefault();
    //     city.next(".errors").text("*فیلد شهر نمی تواند خالی باشد!");
    // } else {
    //     city.next(".errors").text("");
    // }

    let submitFlag = $(this).find(".errors").text().trim().length == 0;

    if (submitFlag) {
        $.ajax({
            url: "/dashboard/profile/update/" + id,
            // type: "post",
            method: "put",
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            data: {
                id: id,
                address: address.val(),
                job: job.val(),
                phone: phone.val(),
                workoffice: workoffice.val(),
                province: province.val(),
                city: city.val(),

                _token: $('meta[name="csrf-token"]').attr("content"),
            },
            success: function (response) {
                console.log(response);
                Swal.fire(
                    "ویرایش!",
                    "اطلاعات پروفایل با موفقیت ویرایش شد!",
                    "success"
                );
            },
        });
    }
});

// // edit img
function editimg(id) {
    $.get("/dashboard/profile/" + id, function (photo) {
        $("#id").val(photo.id);
        $("#imgEditModal").modal("toggle");
    });
}

document.querySelector("#editImg").addEventListener("submit", function (e) {
    e.preventDefault();
    let id = $("#id").val();
    let formData = new FormData(this);
    $.ajax({
        url: "/dashboard/profile/image/" + id,

        method: "post",

        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },

        success: function (response) {
            $("#imgpath").attr("src", "/images/profile/" + response.img);
            $("#nav-img").attr("src", "/images/profile/" + response.img);
            $("#imgpath").show();

            $(".profile-edit i.fa-camera").removeClass("no-profile");
            if ($(".profile-edit i.fa-trash").length == 0) {
                const trash = $(".profile-edit")
                    .append(
                        ` <i
                                    class="fa-solid fa-trash"></i>`
                    )
                    .find("i.fa-trash");
                trash.on("click", function (event) {
                    deleterecord(id);
                });
            }
            $("#imgEditModal").modal("hide");

            Swal.fire("ویرایش!", "عکس پروفایل با موفقیت ویرایش شد!", "success");
        },
        error: function (error) {
            Swal.fire("خطا!", error.responseJSON.errors.img[0], "error");
        },
    });
});

function deleterecord(id) {
    Swal.fire({
        title: "ایا از حذف مطمئن هستید؟",
        icon: "warning",
        confirmButtonColor: "#DD6B55",
        showCancelButton: true,
        confirmButtonText: "حذف",
        cancelButtonText: "لغو",
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/dashboard/profile/" + id,
                method: "delete",

                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                data: {
                    id: id,
                    _token: $('meta[name="csrf-token"]').attr("content"),
                },

                success: function () {
                    $("#imgpath").attr("src", "/images/dashboard/user.png");
                    $("#nav-img").attr("src", "/images/dashboard/user.png");
                    $(".profile-edit i.fa-camera").addClass("no-profile");
                    $(".profile-edit i.fa-trash").remove();
                    $("#imgpath").show();

                    Swal.fire("حذف!", "عکس با موفقیت حذف شد!", "success");
                },
            });
        }
    });
}

function EditResearcher(id) {
    $.get("/dashboard/researcher/" + id, function (research) {
        $("#id").val(research.id);
        $("#name").val(research.name);
        $("#f_name").val(research.f_name);
        $("#n_number").val(research.n_number);
        $("#range").val(research.range);
        $("#major").val(research.major);
        $("#proficiency").val(research.proficiency);
        $("#university").val(research.university);
        $("#organization").val(research.organization);
    });
}

$("#researcheredit").submit(function (e) {
    e.preventDefault();
    let id = $("#id").val();
    let name = $("#name").val();
    let username = $("#f_name").val();
    let n_number = $("#n_number").val();
    let range = $("#range").val();
    let major = $("#major").val();
    let proficiency = $("#proficiency").val();
    let university = $("#university").val();
    let organization = $("#organization").val();

    let _token = $('meta[name="csrf-token"]').val();

    designerValidation(e, "researcheredit");

    let submitFlag = $(this).find(".errors").text().trim().length == 0;
    if (submitFlag) {
        $.ajax({
            url: "/dashboard/researcher/update/" + id,
            //   type: "post",
            method: "PUT",
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },

            data: {
                id: id,
                name: name,
                f_name: username,
                n_number: n_number,
                range: range,
                major: major,
                proficiency: proficiency,
                university: university,
                organization: organization,
                _token: $('meta[name="csrf-token"]').attr("content"),
            },

            success: function (response) {
                console.log(response);
                $("#name").val(response.name);
                $("#f_name").val(response.f_name);
                $("#n_number").val(response.n_number);
                $("#range").val(response.range);
                $("#major").val(response.major);
                $("#proficiency").val(response.proficiency);
                $("#university").val(response.university);
                $("#organization").val(response.organization);
                Swal.fire("ویرایش!", "طراح با موفقیت ویرایش شد!", "success");
            },
            error: function (error) {
                const n_Number = document.forms["researcheredit"]["n_number"];
                $(n_Number).next(".errors").text("* کدملی وارد شده معتبر نیست!");

            },

        });
    }
});
