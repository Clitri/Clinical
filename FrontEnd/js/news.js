$(window).on("load", function () {
  const owl_news = document.querySelector(".owl-news");
  const styles = getComputedStyle(owl_news);

  const owl_article = document.querySelector(".owl-news article");
  const article = getComputedStyle(owl_article);

  let news_height = styles.height;
  let article_height = article.height;

  $(window).on("resize", function () {
    if ($(".owl-news").hasClass("open")) {
      $(".owl-news").css("height", "auto");
      news_height = styles.height;
      article_height = article.height;
      $(".owl-news").css("height", news_height);
    } else {
      $(".owl-news").css("height", "auto");
      news_height = styles.height;
      article_height = article.height;
      $(".owl-news").css("height", article_height);
    }
  });

  $(".owl-news").css("height", article_height);

  $(".see-more").on("click", function (e) {
    $(".see-more i").toggleClass("fa-angle-up");
    $(".see-more i").toggleClass("fa-angle-down");
    if ($(".owl-news").hasClass("open")) {
      $(".owl-news").css("height", article_height);
      $(".owl-news").removeClass("open");
      $(".see-more a").text("مشاهده بیشتر");
    } else {
      $(".owl-news").css("height", news_height);
      $(".owl-news").addClass("open");
      $(".see-more a").text("مشاهده کمتر");
    }
  });
});
