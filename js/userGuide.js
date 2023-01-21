$(document).ready(function () {
  const guideOpen = $("#user_guide #guide_open");
  const guideCover = $("#user_guide #guide_cover");
  const closeGuide = $("#guide_cover .close");
  const stepGuides = $("#step_guide_box .step-guide");
  const titleGuide = $("#guide_box .guide-head h3");
  const contentGuide = $("#guide_box .guide-body h4");

  const steps = [
    [
      "راهنمای اطلاعات عمومی طرح",
      `این مرحله اطلاعات عمومی طرح گرفته می شود. عنوان و فایل پروپزال اجباری هستند در صورت خالی بودن این فیلد ها نمیتوانید به مرحله بعد بروید!`,
    ],
    [
      "راهنمای اطلاعات تخصصی طرح",
      `در این مرحله اطلاعات تخصصی طرح گرفته می شود. ایجاد حداقل یک مداخله الزامی است و بدون ایجاد مداخله نمیتوان به مرحله بعد رفت!`,
    ],
    [
      "راهنمای اطلاعات شرکت کنندگان",
      `در این مرحله اطلاعات شرکت کنندگان گرفته می شود. همه فیلد ها در این مرحله الزامی هستند ؛ فیلد های حداقل و حداکثر سن در صورت فعال شدن الزامی هستند!`,
    ],
  ];

  guideOpen.on("click", function (event) {
    if (stepGuides.hasClass("active")) {
      stepGuides.removeClass("active");
    } else {
      stepGuides.addClass("active");
    }
  });

  stepGuides.on("click", function (event) {
    const step = Number($(this).data("step"));

    titleGuide.text(steps[step][0]);
    contentGuide.text(steps[step][1]);

    guideCover.css("top", "0");
    guideCover.css("right", "0");
    guideCover.css("bottom", "-100%");
    guideCover.css("left", "-100%");
    guideCover.css("border-radius", "0");
  });

  closeGuide.on("click", function (event) {
    guideCover.css("top", "100%");
    guideCover.css("right", "100%");
    guideCover.css("bottom", "0");
    guideCover.css("left", "0");
    guideCover.css("border-radius", "100%");
  });
});
