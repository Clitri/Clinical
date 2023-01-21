$(document).ready(function () {
    const new_slide = $("#new-slide form");
    const edit_slide = $("#edit-slide form");

    function validation(event) {
        event.preventDefault();

        const title = $(this).find('[name="title"]');
        const subtitle = $(this).find('[name="subtitle"]');
        const text = $(this).find('[name="text"]');
        const image = $(this).find('[name="img"]');

        const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if (title.length > 0) {
            if (title.val() == "") {
                event.preventDefault();
                title.next(".errors").text("* فیلد عنوان نمی تواند خالی باشد!");
            } else if (regSpecial.test(title.val())) {
                title.next(".errors").text("* عنوان وارد شده معتبر نیست!");
            } else {
                title.next(".errors").text("");
            }
        }

        if (subtitle.length > 0) {
            if (subtitle.val() == "") {
                event.preventDefault();
                subtitle
                    .next(".errors")
                    .text("* فیلد زیرعنوان نمی تواند خالی باشد!");
            } else if (regSpecial.test(subtitle.val())) {
                subtitle
                    .next(".errors")
                    .text("* زیرعنوان وارد شده معتبر نیست!");
            } else {
                subtitle.next(".errors").text("");
            }
        }
        if (text.length > 0) {
            if (text.val() == "") {
                event.preventDefault();
                text.next(".errors").text("* فیلد متن نمی تواند خالی باشد!");
            } else if (regSpecial.test(text.val())) {
                text.next(".errors").text("* متن وارد شده معتبر نیست!");
            } else {
                text.next(".errors").text("");
            }
        }
        console.log($(this).attr("id"));
        if ($(this).attr("id") != "Editslider") {
            if (image.length > 0) {
                if (image.val() == "") {
                    event.preventDefault();
                    image
                        .next(".errors")
                        .text("* فیلد عکس نمی تواند خالی باشد!");
                } else {
                    image.next(".errors").text("");
                }
            }
        }
    }

    new_slide.on("submit", validation);
    edit_slide.on("submit", validation);

    $(".close-btn").on("click", function () {
        $(this).parent("div").parent("form").find(".errors").text("");
        $(this).parent("div").parent("form")[0].reset();
    });
});
