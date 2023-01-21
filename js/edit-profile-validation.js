$(document).ready(function () {
  $("#edit-profile form").on("submit", function (event) {
    const image = $(this).find('input[name="img"]');
    const imageError = image.next(".errors");

    if (image.length > 0) {
      if (image.val() == "") {
        event.preventDefault();
        imageError.text("* فیلد عکس نمیتواند خالی باشد!");
      } else {
        imageError.text("");
      }
    }
  });

  $("#edit-profile .close-btn").on("click", function () {
    $("#edit-profile form")[0].reset();
    $("#edit-profile form").find(".errors").text("");
  });
});
