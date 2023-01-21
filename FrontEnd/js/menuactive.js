$(window).on("load", function () {
  $(window).on("scroll", function () {
    const width = $(this).width();
    if (width < 975) {
      if ($(this).scrollTop() > 70) {
        $(".page_header_wrapper").css("height", "60px");
      } else {
        $(".page_header_wrapper").css("height", "30px");
      }
    } else {
      $(".page_header_wrapper").css("height", "50px");
    }

    if ($(this).scrollTop() > 70) {
      $(".services-banner").addClass("fadeInTop");
    }
  });

  $(".mainmenu i.fa-angle-down").on("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    console.log($(this).parent("a").parent("li").children("ul"));
    if ($(this).parent("a").parent("li").children("ul").hasClass("open")) {
      $(this).parent("a").parent("li").children("ul").slideUp();
      $(this).parent("a").parent("li").children("ul").removeClass("open");
    } else {
      $(this).parent("a").parent("li").children("ul").slideDown();
      $(this).parent("a").parent("li").children("ul").addClass("open");
    }
  });

  $(window).on("resize", function (e) {
    const width = $(this).width();
    if (width > 974) {
      $(".page-header").removeClass("mobile-active");
      $(".toggle_menu").removeClass("mobile-active");
      $(".mainmenu .open").slideUp();
      $(".mainmenu .open").css("display", "none");
      $(".mainmenu .open").removeClass("open");
    }

    if (width > 975) {
      $(".page_header_wrapper").css("height", "50px");
    } else {
      $(".page_header_wrapper").css("height", "30px");
    }
  });
});
