$(document).ready(function () {
  $(".datatable-status").css("display", "none");
  $($(".datatable-status")[0]).css("display", "block");
  $(".summary-item").each((index, item) => {
    $(item).on("click", function (event) {
      $(".datatable-status").css("display", "none");
      $($(".datatable-status")[index]).css("display", "block");
    });
  });
});
