var _token = $('input[name="_token"]').val();
let roleVal;

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
                url: "/dashboard/user/" + id,
                type: "DELETE",
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                data: {
                    _token: $('meta[name="csrf-token"]').attr("content"),
                },

                success: function (response) {
                    $("#user-" + id).remove();
                    Swal.fire("حذف!", "کاربر با موفقیت حذف شد!", "success");
                },
            });
        }
    });
}

// insert record
$("#modal_adduser #user").on("submit", function (event) {
    event.preventDefault();

    const nameReg = new RegExp(
        "^[a-zA-Z0-9](_(?!(.|_))|.(?!(_|.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$"
    );
    const emailReg =
        /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const passReg1 = /^(?=.*[a-z])/;
    const passReg4 = /^(?=.*[A-Z])/;
    const passReg2 = /^(?=.*[0-9])/;
    const passReg3 = /^(?=.{8,})/;

    const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const regSpace = /\s{2,}/g;

    let name = $("#name");
    let email = $("#email");
    let password = $("#password");
    let enabled = $("#enabled");
    let role = $("#role");

    const name_error = $("#user-error");
    const email_error = $("#email-error");
    const password_error = $("#pass-error");

    if (name.length >= 1) {
        if (name.val() == "") {
            event.preventDefault();
            name_error.text("* نام کاربری نمی تواند خالی باشد!");
        } else if (regSpace.test(name.val()) || regSpecial.test(name.val())) {
            event.preventDefault();
            name_error.text("* نام کاربری وارد شده معتبر نیست!");
        } else {
            name_error.text("");
        }
    }

    if (email.length >= 1) {
        if (!emailReg.test(email.val())) {
            event.preventDefault();
            email_error.text("* ایمیل وارد شده معتبر نمی باشد!");
        } else {
            email_error.text("");
        }
    }

    if (password.length >= 1) {
        if (!passReg1.test(password.val()) && !passReg4.test(password.val())) {
            event.preventDefault();
            password_error.text(
                "* رمزعبور وارد شده باید حداقل دارای یک حرف باشد!"
            );
        } else if (!passReg2.test(password.val())) {
            event.preventDefault();
            password_error.text(
                "* رمزعبور وارد شده باید حداقل دارای یک عدد باشد!"
            );
        } else if (!passReg3.test(password.val())) {
            event.preventDefault();
            password_error.text(
                "* رمزعبور وارد شده باید حداقل 8 کاراکتر باشد!"
            );
        } else {
            password_error.text("");
        }
    }

    let submitFlag = $(this).find(".errors").text().trim().length == 0;
    const userRole = $("#user-btn").data("role");
    let chosenRole = 1;
    // if (userRole == "User") chosenRole = role.val();
    if (userRole == "User") chosenRole = 0;
    else if (userRole == "Agent") chosenRole = 2;
    else if (userRole == "Admin") chosenRole = 3;
    console.log(chosenRole);
    if (submitFlag) {
        $.ajax({
            url: "/dashboard/user",
            method: "POST",
            // dataType: "json",
            // contentType: "application/json; charset=utf-8",
            data: {
                username: name.val(),
                email: email.val(),
                enabled: enabled.val(),
                password: password.val(),
                role: chosenRole,
                _token: _token,
            },

            success: function (response) {
                if (response) {
                    var table = document.getElementById("users");
                    var table_len = table.rows.length;
                    if (
                        (userRole == "User" && response.role == 0) ||
                        userRole != "User"
                    ) {
                        $("#users tbody").append(
                            '<tr id="user-' +
                            response.id +
                            '"><td>' +
                            table_len +
                            "</td><td>" +
                            response.username +
                            "</td><td>" +
                            response.email +
                            "</td><td>" +
                            `<select name="role" class="form-select" data-id="${
                                response.id
                            }">
                                <option value="0" ${
                                response.role == 0 ? "selected" : ""
                            }>کاربر</option>
                                <option value="1" ${
                                response.role == 1 ? "selected" : ""
                            }>ناظر</option>
                                <option value="2" ${
                                response.role == 2 ? "selected" : ""
                            }>بیمارگیر</option>
                                <option value="3" ${
                                response.role == 3 ? "selected" : ""
                            }>ادمین</option>

                            </select>` +
                            "</td><td>" +
                            (response.enabled == 1
                                ? `<div class="activity-btn  switch-to-active">
                            <span class="activity-switch"></span>
                            <input type="checkbox" class="d-none" data-id="${response.id}" checked />
                            </div>`
                                : `<div class="activity-btn">
                            <span class="activity-switch"></span>
                            <input type="checkbox" class="d-none" data-id="${response.id}" />
                            </div>`) +
                            '</td><td><div class="d-flex justify-content-center">'+ (response.role != 0 ? `<a class="btn btn-primary text-white shadow btn-xs sharp edit-permission" data-id="${response.id}"><i\n' +
                            '                                                                            class="fa-solid fa-pencil"></i></a>` : ``)+'<a onclick="deleterecord(' +
                            response.id +
                            ')" class="btn btn-danger text-white shadow btn-xs sharp"><i class="fa-solid fa-trash"></i></a></div></td></tr>'
                        );

                        $(`#user-${response.id}`)
                            .find(".activity-btn")
                            .on("click", activityChange);

                        customSelect(`#user-${response.id} select.form-select`);
                    }
                    $(".dataTables_empty").parent().remove();

                    $("#user")[0].reset();

                    $("#modal_adduser .close").click();

                    Swal.fire("ثبت!", "کاربر با موفقیت ثبت شد!", "success");
                    if (chosenRole != 0) {
                        $("#access_permission").modal("show");

                        $("#access_permission #permission").one(
                            "submit",
                            function (event) {
                                event.preventDefault();
                                let permissions = new Array();
                                $(this)
                                    .find("input[name='permissions[]']")
                                    .each((index, item) => {
                                        if ($(item).prop("checked")) {
                                            permissions.push($(item).val());
                                        }
                                    });
                                $.ajax({
                                    url: "/dashboard/user/permissions",
                                    method: "POST",
                                    data: {
                                        permissions: permissions,
                                        id: response.id,
                                        _token: _token,
                                    },

                                    success: function (response) {
                                        $("#permission")[0].reset();
                                        $("#access_permission .close").click();
                                        Swal.fire("دسترسی ها ایجاد شد!", "", "success");
                                    },
                                });
                            }
                        );
                    }
                }
            },
            error: function (error) {
                console.log(error);

                const errorMesage = document.createElement("div");
                Object.values(error.responseJSON.errors).map((value) => {
                    $(errorMesage).append(`<div>${value}</div>`);
                });

                Swal.fire("خطا!", errorMesage, "error");
            },
        });
    }
});

$(document).on("click", ".edit-permission", function (event) {
    let id = $(this).data('id');
    $("#edit_permission #permission").attr('data-id', id);
    $("#permissions").text('');
    $.ajax({
        url: "/dashboard/user/fetch-permissions/" + id,
        method: "GET",

        success: function (response) {
            $.each(response, function (key, value) {
                let subperm = '';
                $("#permissions").append(`<div class="checkList-item col-12"><div class="checkList-item-group">
                                                                        <input name="permissions[]"  type="checkbox" value="${value.name}"
                                                                               class="form-check-input ml-1" ${value.status}/>
                                                                        <label><strong>${value.fa_name}</strong></label>
                                                                    </div>
                                                                    <div class="checkList-item-single pr-1">

                ${value.subpermissions.forEach((value) => {
                    subperm += `<div class="col-12">
                                                    <input type="checkbox" value="${value.name}"
                                                            name="permissions[]"
                                                            class="form-check-input ml-1" ${value.status}/>
                                                            <label>${value.fa_name}</label>
                                                         </div>`
                }) ? "" : ""}
                ${subperm}
            </div></div>`);

            });

            $("#edit_permission").modal("show");
        },
    });

});


$("#edit_permission #permission").on(
    "submit",
    function (event) {
        event.preventDefault();
        let id = $(this).data('id');
        let permissions = new Array();
        $(this)
            .find("input[name='permissions[]']")
            .each((index, item) => {
                if ($(item).prop("checked")) {
                    permissions.push($(item).val());
                }
            });
        $.ajax({
            url: "/dashboard/user/permissions",
            method: "POST",
            data: {
                permissions: permissions,
                id: id,
                _token: _token,
            },

            success: function (response) {
                $("#permission")[0].reset();
                $("#edit_permission .close").click();
                Swal.fire("دسترسی ها ویرایش شد!", "", "success");
            },
        });
    }
);
$(document).ready(function () {
    $(".activity-btn").on("click", activityChange);
});

$(document).on("click", "select[name=role]", function (event) {
    roleVal = $(this).val();
});

$(document).on("change", "select[name=role]", changeRole);

function changeRole(event) {
    const id = $(this).data("id");
    const role = $(this).val();
    console.log(id);

    if (roleVal != $(this).val()) {
        // changeRole ajax here
        $.ajax({
            url: "/dashboard/user/update-role",
            method: "POST",
            data: {
                id: id,
                role: role,
                _token: _token,
            },

            success: function (response) {
                $("#user-" + id).remove();
                Swal.fire("نقش ویرایش شد!", "", "success");
            },
        });
    }
}

function activityChange(event) {
    const target = $(this);
    const input = $(this).find("input[type=checkbox]");
    const id = $(this).find("input[type=checkbox]").data("id");
    const column_value = !$(this).find("input").prop("checked");

    $.ajax({
        url: "/dashboard/user/update",
        method: "PUT",
        data: {column_value: column_value, id: id, _token: _token},
        success: function (response) {
            if (input.prop("checked")) {
                input.attr("checked", false);
                target.removeClass("switch-to-active");
            } else {
                input.attr("checked", true);
                target.addClass("switch-to-active");
            }

            Swal.fire("وضعیت ویرایش شد", "", "success");
        },
    });
}

$(document).on("keyup", ".in-search", function (event) {
    var search = $(this).val();
    var role = $(this).data('role');
    $.ajax({
        url: "/dashboard/user/search",
        method: "POST",
        data: {search: search, role: $(this).data('type'), _token: $('meta[name="csrf-token"]').attr("content")},
        dataType: 'json',

        success: function (response) {
            $(".search-table").text("");
            if (response['users'].length == 0) {
                $('.search-table').append('<td valign="top" colspan="8" class="dataTables_empty">داده ای در دسترس نیست</td>');
            } else {
                let counter = 1;
                $.each(response['users'], function (key, value) {
                    $(".search-table").append(
                        '<tr id="user-' +
                        value.id +
                        '"><td>' +
                        counter++ +
                        "</td><td>" +
                        value.username +
                        "</td><td>" +
                        value.email +
                        "</td><td>" +
                        ` < select
                name = "role"

                class

                = "form-select"
                data - id = "${
                            value.id
                        }
            ">
            < option
            value = "0" ${
                            role == 0 ? "selected" : ""
                        } > کاربر < /option>
            <option value="1" ${
                            role == 1 ? "selected" : ""
                        }>ناظر</option>
            <option value="2" ${
                            role == 2 ? "selected" : ""
                        }>بیمارگیر</option>
            <option value="3" ${
                            role == 3 ? "selected" : ""
                        }>ادمین</option>

        </select>` +
                        "</td><td>" +
                        (value.enabled == 1
                                ? `<div class="activity-btn  switch-to-active">
        <span class="activity-switch"></span>
        <input type="checkbox" class="d-none" data-id="$
            {
                value.id
            }
            " checked />
            < /div>`
                                :
                                `<div class="activity-btn">
                            <span class="activity-switch"></span>
                            <input type="checkbox" class="d-none" data-id="${value.id}" />
                            </div>`
                        )
                        +
                        '</td><td><div class="d-flex justify-content-center"><a onclick="deleterecord(' +
                        value.id +
                        ')" class="btn btn-danger text-white shadow btn-xs sharp"><i class="fa-solid fa-trash"></i></a></div></td></tr>'
                    );

                    $(`#user-${value.id}`)
                        .find(".activity-btn")
                        .on("click", activityChange);

                    customSelect(`#user-${value.id} select.form-select`);

                    $(".dataTables_empty").parent().remove();

                });
            }
        }
    })
    ;
})
;

