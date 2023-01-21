_token = $('meta[name="csrf-token"]').attr("content");

$("#add_cats form").on("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const regSpace = /\s{2,}/g;

    if ($(this).find("input[type=text]:first-of-type").length >= 1) {
        if ($(this).find("input[type=text]:first-of-type").val() == "") {
            event.preventDefault();
            $(this)
                .find("input[type=text]:first-of-type")
                .next(".errors")
                .text("*عنوان نمی تواند خالی باشد!");
        } else if (
            regSpace.test(
                $(this).find("input[type=text]:first-of-type").val()
            ) ||
            regSpecial.test(
                $(this).find("input[type=text]:first-of-type").val()
            )
        ) {
            event.preventDefault();
            $(this)
                .find("input[type=text]:first-of-type")
                .next(".errors")
                .text("* عنوان وارد شده معتبر نیست!");
        } else {
            $(this)
                .find("input[type=text]:first-of-type")
                .next(".errors")
                .text("");
        }
    }
    let category_id = $('#cParent');
    let title = $("#title");
    let status = $("#status");
    let subCats = $("#subCategories");

    let tags = new Array();
    Array.from($(this).find(".tags-container .tag-item")).forEach((element) => {
        tags.push($(element).text().trim());
    });

    let submitFlag = $(this).find(".errors").text().trim().length == 0;

    if (submitFlag) {
        $(this).find(".sub-cats").val(tags);

        $.ajax({
            url: "/dashboard/category/store",
            method: "POST",

            data: {
                category_id: category_id.val(),
                title: title.val(),
                status: status.val(),
                subCategories: subCats.val(),
                _token: _token,
            },

            success: function (response) {
                updateTable(response);
                Swal.fire("ثبت!", "دسته بندی با موفقیت ثبت شد!", "success");

                $("#cat-table .dataTables_empty").parent().remove();
                $("#add_cats .tags-container .tag-item").remove();
                $("#cat-form")[0].reset();
                $("#add_cats .close").click();
            },
            error: function (error) {
                // $(".add-tag-error").text(error.responseJSON.errors["title"][0]);
                $("#subCategories").val("");
                Swal.fire(
                    "خطا!",
                    error.responseJSON.errors["title"][0],
                    "error"
                );
            },
        });
    }
});

$('#cParent').on('change', selectChange);

function selectChange(event) {
    const options = $("#cParent").find("option");
    $("#cParent")
        .next(".custom-dropdown").find("li")
        .removeClass("selected-option");
    options.each((index, item) => {
        if ($(item).prop("selected")) {
            $($("#cParent")
                .next(".custom-dropdown")
                .find("li")[index]).addClass(
                "selected-option");
        }
    });
}


$("#edit_cats form").on("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const regSpace = /\s{2,}/g;

    if ($(this).find("input[type=text]:first-of-type").length >= 1) {
        if ($(this).find("input[type=text]:first-of-type").val() == "") {
            event.preventDefault();
            $(this)
                .find("input[type=text]:first-of-type")
                .next(".errors")
                .text("*عنوان نمی تواند خالی باشد!");
        } else if (
            regSpace.test(
                $(this).find("input[type=text]:first-of-type").val()
            ) ||
            regSpecial.test(
                $(this).find("input[type=text]:first-of-type").val()
            )
        ) {
            event.preventDefault();
            $(this)
                .find("input[type=text]:first-of-type")
                .next(".errors")
                .text("* عنوان وارد شده معتبر نیست!");
        } else {
            $(this)
                .find("input[type=text]:first-of-type")
                .next(".errors")
                .text("");
        }
    }

    let tags = new Array();
    let category_id = $('#eParent');
    let title = $("#edit-title");
    let status = $("#edit-status");
    let subCats = $("#edit-subCategories");

    Array.from($(this).find(".tags-container .tag-item")).forEach((element) => {
        tags.push($(element).text().trim());
    });

    let submitFlag = $(this).find(".errors").text().trim().length == 0;

    if (submitFlag) {
        $(this).find(".sub-cats-edit").val(tags);
        $.ajax({
            url: "/dashboard/category/update",
            method: "PUT",

            data: {
                category_id: category_id.val(),
                title: title.val(),
                status: status.val(),
                subCategories: subCats.val(),
                id: catId,
                _token: _token,
            },

            success: function (response) {
                updateTable(response);
                // console.log(response);
                // $(`#cat-${response.id}`)
                //     .find("td:nth-of-type(2)")
                //     .text(response.title);
                // $(`#cat-${response.id}`)
                //     .find("td:nth-of-type(3)")
                //     .text(response.subCat);
                Swal.fire("ثبت!", "دسته بندی با موفقیت ویرایش شد!", "success");

                $("#edit_cats .tags-container .tag-item").remove();
                $("#cat-edit-form")[0].reset();
                $("#edit_cats .close").click();
            },
            error: function (error) {
                $("#subCategories").val("");
                Swal.fire(
                    "خطا!",
                    error.responseJSON.errors["title"][0],
                    "error"
                );
            },
        });
    }
});

$(document).on("click", ".delete-cat", function () {
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
                url: "/dashboard/category/delete/" + id,
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
                    // $("#cat-" + id).remove();
                    updateTable(response);
                    Swal.fire("حذف!", "دسته بندی با موفقیت حذف شد!", "success");
                },
            });
        }
    });
});

function updateTable(response){
    $("#cat-table tr").remove();
    $.each(response, function (key, value) {
        $("#cat-table").append(`<tr id="cat-${value.id}">
                                                <td>${
            $("#cat-table tr").length
        }</td>
                                                <td>${value.title}</td>
                                                <td>
                                                   ${value.parent}
                                                </td>
                                                <td>
                                                    <div class="activity-btn ${
            value.status == 1
                ? "switch-to-active"
                : ""
        }">
                                                        <span class="activity-switch"></span>
                                                        <input data-id="${
            value.id
        }" type="checkbox" class="d-none"
                                                            ${
            value.status ==
            1
                ? "checked"
                : ""
        } />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-center ">
<a class="edit-plan-btn shadow btn-xs sharp  edit"
                                                            id="${value.id}"><i class="fa-solid fa-pencil"></i></a>
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp delete-cat"
                                                        id="${value.id}"><i
                                                                class="fa-solid fa-trash"></i></a>
                                                    </div>
                                                </td>
                                            </tr>`);

    });
}
let catId;

$(document).on("click", ".add-user", function () {

    $.get("/dashboard/category/fetch-cats", function (category) {
        // $("#cParent").empty();
        $('.cat-option').remove();
        $.each(category['cats'], function (key, value) {
            $("#cParent").append(`<option class="cat-option" value="${value.id}">${value.title}</option>`);

            $("#cParent").next(".custom-dropdown").find('li').remove();
            const options = $("#cParent").find("option");

            options.each((index, item) => {
                if ($(item).prop("selected")) {
                    $("#cParent")
                        .next(".custom-dropdown")
                        .append(
                            `<li data-val="${item.value}" class="selected-option cat-option">${$(item).text()}</li>`
                        );
                } else {
                    $("#cParent")
                        .next(".custom-dropdown")
                        .append(
                            `<li data-val="${item.value}" class="cat-option">${$(item).text()}</li>`
                        );
                }
            });


            $("#cParent")
                .next(".custom-dropdown").find("li").on("mousedown", function (
                event) {
                event.preventDefault();
                event.stopPropagation();
                $("#cParent").val($(event.target).data("val"));
                $("#cParent").change();
            }).on('click', function (event) {
                event.stopPropagation();
                event.preventDefault();
                $("#cParent").blur();
            });

        });

        $("#add_cats").modal("toggle");
    });
});

$(document).on("click", ".edit", function () {
    let id = $(this).attr("id");

    $.get("/dashboard/category/fetch/" + id, function (category) {
        catId = id;
        $('.cat-option').remove();

        // $("#eParent").remove('.cat-option');
        $.each(category['cats'], function (key, value) {
            $("#eParent").append(`<option class="cat-option" value="${value.id}" ${value.id == category["cat"].category_id ? 'selected' : ''}>${value.title}</option>`);

            $("#eParent").next(".custom-dropdown").find('li').remove();
            const options = $("#eParent").find("option");

            options.each((index, item) => {
                if ($(item).prop("selected")) {
                    $("#eParent")
                        .next(".custom-dropdown")
                        .append(
                            `<li data-val="${item.value}" class="selected-option cat-option">${$(item).text()}</li>`
                        );
                } else {
                    $("#eParent")
                        .next(".custom-dropdown")
                        .append(
                            `<li data-val="${item.value}" class="cat-option">${$(item).text()}</li>`
                        );
                }
            });


            $("#eParent")
                .next(".custom-dropdown").find("li").on("mousedown", function (
                event) {
                event.preventDefault();
                event.stopPropagation();
                $("#eParent").val($(event.target).data("val"));
                $("#eParent").change();
            }).on('click', function (event) {
                event.stopPropagation();
                event.preventDefault();
                $("#eParent").blur();
            });

        });


        $("#edit-title").val(category["cat"].title);
        $("#edit-status").val(category["cat"].status);
        $("#edit-subCategories")
            .siblings(".tags-container")
            .find(".tag-item")
            .remove();
        category.subCats.forEach((item) => {
            $("#edit-subCategories").siblings(".tags-container")
                .append(`<a class="tag-item">
            <i class="fa-solid fa-xmark align-middle"></i>
            ${item.title}
        </a>`);
        });
        $("#edit_cats").modal("toggle");
    });
});

$('eParent').on('change', selectChange);

function selectChange(event) {
    const options = $("eParent").find("option");
    $("eParent")
        .next(".custom-dropdown").find("li")
        .removeClass("selected-option");
    options.each((index, item) => {
        if ($(item).prop("selected")) {
            $($("eParent")
                .next(".custom-dropdown")
                .find("li")[index]).addClass(
                "selected-option");
        }
    });
}

$(document).on("click", "#cat-table .activity-btn", function (event) {
    const target = $(this);
    const input = $(this).find("input[type=checkbox]");
    const id = $(this).find("input[type=checkbox]").data("id");
    const column_value = !$(this).find("input").prop("checked");
    console.log(column_value);

    $.ajax({
        url: "/dashboard/category/update-status",
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
});

$(document).on("keyup", ".category", function (event) {
    var search = $(this).val();
    $.ajax({
        url: "/dashboard/category/search",
        method: "POST",
        data: {search: search, _token: $('meta[name="csrf-token"]').attr("content")},
        dataType: 'json',

        success: function (response) {
            $("#cat-table").text("");
            if (response['cats'].length == 0){
                $('#cat-table').append('<td valign="top" colspan="8" class="dataTables_empty">داده ای در دسترس نیست</td>');
            }else {
                let counter = 1;
                $.each(response['cats'], function (key, value) {
                    $("#cat-table").append(`<tr id="cat-${value.id}">
                                                <td>${ counter++ }</td>
                                                <td>${ value.title }</td>
                                                <td>
                                                    ${ value.parent }
                                                </td>
                                                <td>
                                                    <div class="activity-btn ${ value.status ? 'switch-to-active' : '' }">
                                                        <span class="activity-switch"></span>
                                                        <input data-id="${value.id}" type="checkbox" class="d-none"
                                                            ${ value.status ? 'checked' : '' } />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-center ">

                                                        <a class="edit-plan-btn shadow btn-xs sharp edit"
                                                            id="${value.id}"><i class="fa-solid fa-pencil"></i></a>
                                                        <a class="btn btn-danger shadow btn-xs sharp delete-cat"
                                                            id="${value.id}"><i class="fa-solid fa-trash"></i></a>
                                                    </div>
                                                </td>
                                            </tr>

`);
                });
            }
        }
    });
});


// ============ manage tags and cats list ==========

$(document).ready(function () {
    addTagToList(".sub-cats");
});

$(document).ready(function () {
    addTagToList(".sub-cats-edit");
});
