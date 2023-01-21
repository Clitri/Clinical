_token = $('meta[name="csrf-token"]').attr("content");
const regSpecial = /[`@#$%^&*+=\[\]{}'"\\|<>\/~]/;

$(document).ready(function () {

    $(".post-cats .cats-body input").on("change", function (event) {

        $(
            `.post-cats .cats-body input:not(.post-cats .cats-body input[value="${$(
                this
            ).val()}"]`
        ).prop("checked", false);
    });

    $(document).on(
        "click",
        ".vertical-item .item-action .fa-heart",
        function (event) {
            let likes = $(this).siblings(".like-num");
            let id = $(this).data('id');
            if ($(this).hasClass("liked")) {
                $.ajax({
                    url: "/post/unLike/"+id,
                    method: "get",
                    success: function (response) {
                        if (!response) {
                            window.location = '/login';
                        } else{
                            likes.text(parseInt(likes.text()) - 1);
                            $(event.target).removeClass("fa-solid");
                            $(event.target).addClass("fa-regular");
                            $(event.target).removeClass("liked");
                        }

                    },
                });

            } else {
                $.ajax({
                    url: "/post/like/"+id,
                    method: "get",
                    success: function (response) {
                        if (!response) {
                            window.location = '/login';
                        } else{
                            likes.text(parseInt(likes.text()) + 1);
                            $(event.target).removeClass("fa-regular");
                            $(event.target).addClass("fa-solid");
                            $(event.target).addClass("liked");
                        }

                    },
                });

            }
        }
    );

    $(".search-tags").slideUp();

    $("#post-form input[name=tags]").on("blur", function (event) {
        $(".search-tags").slideUp();
    });

    $(document).on("click", ".search-tags li", function (event) {
        $("#post-form input[name=tags]").val($(this).text()).focus();
    });

    $(document).on("keydown", ".post-tags", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            addNewTag(event);
        }
    });

    $(document).on("click", `.post-tags+i`, addNewTag);
    $(document).on("click", ".tag-item i", removeTag);

    function addNewTag(event) {
        if (
            $(".post-tags").val() == "" ||
            regSpecial.test($(".post-tags").val()) ||
            $(".post-tags").val().length > 255
        ) {
            event.preventDefault();
            $(".post-tags").siblings(".errors").css("height", "auto");
            $(".post-tags")
                .siblings(".errors")
                .text("* برچسب وارد شده صحیح نمی باشد!");
        } else {
            event.preventDefault();
            $.ajax({
                url: "/dashboard/tag/check",
                method: "POST",
                data: {title: $(".post-tags").val(), _token: _token},
                dataType: "json",

                success: function (response) {
                    $(".post-tags")
                        .siblings(".tags-container")
                        .append(
                            `<a class="tag-item">
      <i class="fa-solid fa-xmark align-middle"></i>
      ${response.title}
  </a>`
                        );

                    $(".post-tags").val("");
                    $(".post-tags").siblings(".errors").text("");
                },
                error: function (){
                    $(".post-tags").siblings(".errors").css("height", "auto");
                    $(".post-tags")
                        .siblings(".errors")
                        .text("* برچسب وارد شده صحیح نمی باشد!")
                }
            });
        }
    }

    function removeTag(event) {
        $(event.target).parent(".tag-item").remove();
    }

    $("#post-form input[name=tags]").on("keyup", function (event) {
        if (event.key != "Enter") {
            var search = $(this).val();
            $.ajax({
                url: "/dashboard/tag/search",
                method: "POST",
                data: {search: search, _token: _token},
                dataType: "json",

                success: function (response) {
                    $(".search-tags").slideDown();
                    $(".search-tags li").remove();
                    response.forEach((item) => {
                        $(".search-tags").append(`<li>${item.title}</li>`);
                    });
                },
            });
        }
    });

    $("#post-form").on("submit", function () {
        let tags = new Array();
        Array.from($(this).find(".tags-container .tag-item")).forEach(
            (element) => {
                tags.push($(element).text().trim());
            }
        );

        let submitFlag = $(this).find(".errors").text().trim().length == 0;

        if (submitFlag) {
            $(this).find(".post-tags").val(tags);
        }
    });

    $(document).on("click", ".btn-danger", function () {
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
                    url: "/dashboard/post/delete/" + id,
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
                        $("#post-" + id).remove();
                        Swal.fire("حذف!", "پست با موفقیت حذف شد!", "success");
                    },
                });
            }
        });
    });

    $(document).on("click", ".activity-btn", function (event) {
        const target = $(this);
        const input = $(this).find("input[type=checkbox]");
        const id = $(this).data("id");
        const column_value = !$(this).find("input").prop("checked");
        console.log(column_value);

        $.ajax({
            url: "/dashboard/post/update-status",
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

    $(document).on("keyup", ".in-search", function (event) {
        var search = $(this).val();
        $.ajax({
            url: "/dashboard/post/search",
            method: "POST",
            data: {search: search, _token: $('meta[name="csrf-token"]').attr("content")},
            dataType: 'json',

            success: function (response) {
                $(".search-table").text("");
                if (response['posts'].length == 0){
                    $('.search-table').append('<td valign="top" colspan="8" class="dataTables_empty">داده ای در دسترس نیست</td>');
                }else {
                    let counter = 1;
                    $.each(response['posts'], function (key, value) {
                        $(".search-table").append(`<tr id="post-${value.id}">
                                                <td> ${counter++} </td>
                                                <td>${ value.title }</td>
                                                <td>${ value.sub_title }</td>
                                                <td>${ value.tag }</td>
                                                <td>${ value.cat }</td>
                                                <td>
                                                    <div data-id="${value.id}"
                                                        class="activity-btn ${ value.status ? 'switch-to-active' : '' }">
                                                        <span class="activity-switch"></span>
                                                        <input type="checkbox" class="d-none"
                                                            ${ value.status ? 'checked' : '' } />
                                                    </div>

                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-center">
                                                        <a href="/dashboard/post/${value.id}"
                                                           class="view-plan-btn shadow btn-xs sharp">
                                                            <i class="fa-solid fa-eye"></i>
                                                        </a>
                                                        <a href="/dashboard/post/edit/${value.id}"
                                                            class="btn btn-primary shadow btn-xs sharp"><i
                                                                class="fa-solid fa-pencil"></i></a>
                                                        <a href="#" class="btn btn-danger shadow btn-xs sharp"
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

});
