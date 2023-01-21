_token = $('meta[name="csrf-token"]').attr("content");

$("#add-tag-tr .activity-btn").on("click", function () {
    const input = $(this).find("input[type=checkbox]");

    if (input.attr("checked")) {
        input.attr("checked", false);
        $(this).removeClass("switch-to-active");
    } else {
        input.attr("checked", true);
        $(this).addClass("switch-to-active");
    }
});

$(document).on("click", "#add-tag", function () {
    let title = $("#add-tag-tr .add-input-tag");
    let status = $("#add-tag-tr input[type=checkbox]");
    const regSpecial = /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    const regSpace = /\s{2,}/g;

    if (title.val() == "") {
        $(".add-tag-error").text("*عنوان نمی تواند خالی باشد!");
    } else if (regSpace.test(title.val()) || regSpecial.test(title.val())) {
        $(".add-tag-error").text("* عنوان وارد شده معتبر نیست!");
    } else {
        $(".add-tag-error").text("");
        $.ajax({
            url: "/dashboard/tag/store",
            method: "POST",

            data: {
                title: title.val(),
                status: status.attr("checked") ? 1 : 0,
                _token: _token,
            },

            success: function (response) {
                $("#tag-table").append(` <tr id="tag-${response.id}">
                                             <td>${
                                                 $("#tag-table tr").length
                                             }</td>
                                            <td><input class="add-input-tag" value="${
                                                response.title
                                            }"/></td>
                                            <td>
                                                <div
                                                    class="activity-btn ${
                                                        response.status == 1
                                                            ? "switch-to-active"
                                                            : ""
                                                    }" data-id="${response.id}">
                                                    <span class="activity-switch"></span>
                                                    <input  type="checkbox" class="d-none"
                                                        ${
                                                            response.status == 1
                                                                ? "checked"
                                                                : ""
                                                        } />
                                                </div>
                                            </td>
                                            <td>
                                                <div class="d-flex justify-content-center ">
                                                    <a href="#" class="btn btn-danger shadow btn-xs sharp delete-tag" id="${
                                                        response.id
                                                    }"><i
                                                            class="fa-solid fa-trash"></i></a>
                                                </div>
                                            </td>
                                        </tr>`);

                title.val("");
                status.attr("checked", false);
                status.parents(".activity-btn").removeClass("switch-to-active");
            },
            error: function (error) {
                $(".add-tag-error").text(error.responseJSON.errors["title"][0]);
            },
        });
    }
});

$(document).on("click", ".delete-tag", function () {
    let id = $(this).attr("id");

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
                url: "/dashboard/tag/delete/" + id,
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
                    $("#tag-" + id).remove();
                    Swal.fire("حذف!", "تگ با موفقیت حذف شد!", "success");
                },
            });
        }
    });
});

$(document).on(
    "click",
    "#tag-table .activity-btn:not(#add-tag-tr .activity-btn)",
    function (event) {
        let data = {
            // name: "status",
            status: $(this).find("input[type=checkbox]").prop("checked")
                ? 0
                : 1,
            id: $(this).data("id"),
        };
        editTags(event, data, this);
    }
);

$(document).on(
    "blur",
    "#tag-table .add-input-tag:not(#add-tag-tr .add-input-tag)",
    function (event) {
        let data = {
            // name: "title",
            title: $(this).val(),
            id: $(this).data("id"),
        };
        const regSpecial = /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
        const regSpace = /\s{2,}/g;

        if ($(this).val() == "") {
            $(".add-tag-error").text("*عنوان نمی تواند خالی باشد!");
        } else if (
            regSpace.test($(this).val()) ||
            regSpecial.test($(this).val())
        ) {
            $(".add-tag-error").text("* عنوان وارد شده معتبر نیست!");
        } else {
            $(".add-tag-error").text("");
            editTags(event, data, this);
        }
    }
);

function editTags(event, data, element) {
    $.ajax({
        url: "/dashboard/tag/update",
        method: "POST",

        data: {
            ...data,
            _token: _token,
        },
        success: function (response) {
            if (data.hasOwnProperty("status")) {
                const input = $(element).find("input[type=checkbox]");

                if (response.status == 0) {
                    input.attr("checked", false);
                    $(element).removeClass("switch-to-active");
                } else {
                    input.attr("checked", true);
                    $(element).addClass("switch-to-active");
                }
            } else {
                $(element).val(response.title);
            }
            Swal.fire(" تگ ویرایش شد", "", "success");
        },
        error: function (error) {
            $(".add-tag-error").text(error.responseJSON.errors["title"][0]);
        },
    });
}

$(document).on("keyup", ".tag-search", function (event) {
    var search = $(this).val();
    $.ajax({
        url: "/dashboard/tag/search-table",
        method: "POST",
        data: {search: search, _token: $('meta[name="csrf-token"]').attr("content")},
        dataType: 'json',

        success: function (response) {
            $(".tag-record").remove();
            if (response['tags'].length == 0){
                $('#tag-table').append('<td valign="top" colspan="8" class="dataTables_empty">داده ای در دسترس نیست</td>');
            }else {
                let counter = 1;
                $.each(response['tags'], function (key, value) {
                    if (counter !=11){
                    $("#tag-table").append(`<tr id="tag-${value.id}" class="tag-record">
                                                <td>${ counter++ }</td>
                                                <td><input class="add-input-tag" value="${ value.title }"
                                                        data-id="${value.id}" /></td>
                                                <td>
                                                    <div class="activity-btn ${ value.status ? 'switch-to-active' : '' }"
                                                        data-id="${value.id}">
                                                        <span class="activity-switch"></span>
                                                        <input type="checkbox" class="d-none"
                                                            ${ value.status ? 'checked' : '' } />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-center ">
                                                        <a href="#"
                                                            class="btn btn-danger shadow btn-xs sharp delete-tag"
                                                            id="${value.id}"><i class="fa-solid fa-trash"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

`);}
                });
            }
        }
    });
});
