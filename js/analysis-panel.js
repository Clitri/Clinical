$(document).ready(function () {
  $(".analysis-panel .content-item:not(:first-of-type)").css("display", "none");

  $(".analysis-panel .tab-item:first-of-type>div").addClass("active");

  $(".analysis-panel .tab-item>div").each((index, item) => {
    $(item).on("click", function (event) {
      $(".analysis-panel .tab-item>div").removeClass("active");
      $(this).addClass("active");
      $(".analysis-panel .content-item").css("display", "none");
      $($(".analysis-panel .content-item")[index]).css("display", "block");
    });
  });

  $(".data-contents .data-content-item:not(:first-of-type)").css(
    "display",
    "none"
  );

  $(".data-tabs .data-tab-item:first-of-type").addClass("active");

  $(".data-tabs .data-tab-item").each((index, item) => {
    $(item).on("click", function (event) {
      $(".data-tabs .data-tab-item").removeClass("active");
      $(this).addClass("active");
      $(".data-contents .data-content-item").css("display", "none");
      $($(".data-contents .data-content-item")[index]).css("display", "block");
    });
  });

  $(".analysis-panel .analysis-data table tbody tr:first-of-type input ").on(
    "focus",
    function () {
      $(this).siblings("i").css("display", "none");
    }
  );

  $(".analysis-panel .analysis-data table tbody tr:first-of-type input ").on(
    "blur",
    function () {
      $(this).siblings("i").css("display", "block");
    }
  );
});
