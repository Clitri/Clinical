const regSpecial = /[`@#$%^&*+=\[\]{}'"\\|<>\/~]/;

function addTagToList(element) {
    $(element).on("keydown", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            addTags(event);
        }
    });

    $(document).on("click", `${element}+i`, addTags);

    $(document).on("click", ".tag-item i", removeTag);

    function removeTag(event) {
        $(event.target).parent(".tag-item").remove();
    }



    function addTags(event) {
        if (
            $(element).val() == "" ||
            regSpecial.test($(element).val()) ||
            $(element).val().length > 255
        ) {
            event.preventDefault();
            $(element).siblings(".errors").css("height", "auto");
            $(element)
                .siblings(".errors")
                .text("* برچسب وارد شده صحیح نمی باشد!");
        } else {
            $(element)
                .siblings(".tags-container")
                .append(
                    `<a class="tag-item">
      <i class="fa-solid fa-xmark align-middle"></i>
      ${$(element).val()}
  </a>`
                );

            $(".tag-item i").off("click", removeTag);
            $(".tag-item i").on("click", removeTag);

            $(element).val("");
            $(element).siblings(".errors").text("");

        }
    }

}
