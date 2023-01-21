$(document).ready(function () {
  const regSpecial = /[`@#$%^&*+=\[\]{}'"\\|<>\/~]/;

  $(".post-tags").on("keydown", function (event) {
    if (event.key == "Enter") {
      addTags(event);
    }
  });

  $(".post-tags+i").on("click", addTags);

  $(".tag-item i").on("click", removeTag);

  function removeTag(event) {
    $(event.target).parent(".tag-item").remove();
  }

  function addTags(event) {
    if (
      $(".post-tags").val() == "" ||
      regSpecial.test($(".post-tags").val()) ||
      $(".post-tags").val().length > 255
    ) {
      event.preventDefault();
      $(".post-tags")
        .siblings(".errors")
        .text("* برچسب وارد شده صحیح نمی باشد!");
    } else {
      $(".tags-container").append(
        `<a class="tag-item">
      <i class="fa-solid fa-xmark align-middle"></i>
      ${$(".post-tags").val()}
  </a>`
      );

      $(".tag-item i").off("click", removeTag);
      console.log($(".tag-item i"));
      $(".tag-item i").on("click", removeTag);

      $(".post-tags").val("");
      $(".post-tags").siblings(".errors").text("");
    }
  }
});
