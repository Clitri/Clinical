_token = $('meta[name="csrf-token"]').attr("content");
const regSpecial = /[`@#$%^&*+=\[\]{}'"\\|<>\/~]/;

$(document).ready(function () {

    $(document).on("click", ".delete-order", function (event) {
        event.preventDefault();
        let id = $(this).data('id');

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
                    url: "/dashboard/order/delete/" + id,
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
                        $("#order-" + id).remove();
                        Swal.fire("حذف!", "سرویس با موفقیت حذف شد!", "success");
                    },
                });
            }
        });

    });

    $(".search-tags").slideUp();

    $("#create_designer input[name=tags]").on("blur", function (event) {
        $(".search-tags").slideUp();
    });

    $(document).on("click", ".search-tags li", function (event) {
        $("#create_designer input[name=tags]").val($(this).text()).focus();
    });

    $(document).on("keydown", ".service-tags", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            addNewTag(event);
        }
    });

    $(document).on("click", `.service-tags+i`, addNewTag);
    $(document).on("click", ".tag-item i", removeTag);

    function addNewTag(event) {
        if (
            $(".service-tags").val() == "" ||
            regSpecial.test($(".service-tags").val()) ||
            $(".service-tags").val().length > 255
        ) {
            event.preventDefault();
            $(".service-tags").siblings(".errors").css("height", "auto");
            $(".service-tags")
                .siblings(".errors")
                .text("* برچسب وارد شده صحیح نمی باشد!");
        } else {
            event.preventDefault();
            $.ajax({
                url: "/dashboard/service/check-tag",
                method: "POST",
                data: {title: $(".service-tags").val(), _token: _token},
                dataType: "json",

                success: function (response) {
                    $(".service-tags")
                        .siblings(".tags-container")
                        .append(
                            `<a class="tag-item">
      <i class="fa-solid fa-xmark align-middle"></i>
      ${$(".service-tags").val()}
  </a>`
                        );

                    $(".service-tags").val("");
                    $(".service-tags").siblings(".errors").text("");
                },
            });
        }
    }

    function removeTag(event) {
        $(event.target).parent(".tag-item").remove();
    }

    $("#create_designer input[name=tags]").on("keyup", function (event) {
        if (event.key != "Enter") {
            var search = $(this).val();
            $.ajax({
                url: "/dashboard/service/search-tag",
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

    $("#create_designer").on("submit", function () {
        let tags = new Array();
        Array.from($(this).find(".tags-container .tag-item")).forEach(
            (element) => {
                tags.push($(element).text().trim());
            }
        );

        let submitFlag = $(this).find(".errors").text().trim().length == 0;

        if (submitFlag) {
            $(this).find(".service-tags").val(tags);
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
                    url: "/dashboard/service/delete/" + id,
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
                        $("#service-" + id).remove();
                        Swal.fire("حذف!", "سرویس با موفقیت حذف شد!", "success");
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
            url: "/dashboard/service/update-status",
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

    $(document).on("click", "#cart_button", function (event) {
        // event.preventDefault();
        $("#cart_button>a").attr("href", "/dashboard/cart/" + $(this).data('id') + "/" + $('#inputState').val());
    });

    $(document).on("change", "#inputState", function (event) {
        let id = $(this).data('id');
        let period = $(this);
        $.ajax({
            url: "/dashboard/service/off/" + id + "/" + period.val(),
            method: "get",
            success: function (response) {

                let price = response['period'] * response['price'];
                let off = response['off'] * price / 100;
                $("#price").html(price - off +' تومان ');
                },
        });

    });
});
