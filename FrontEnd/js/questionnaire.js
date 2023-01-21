$(document).ready(function () {
  let state = 1;

  const steps = Array.from($(".steps .step"));

  function updateNavigation() {
    if (state == 1) {
      $(".nav-form .nav-prev").css("opacity", "0");
      $(".nav-form .nav-prev").css("visibility", "hidden");
    } else {
      $(".nav-form .nav-prev").css("visibility", "visible");
      $(".nav-form .nav-prev").css("opacity", "1");
    }

    if (state == 3) {
      $(".nav-form .nav-next").css("visibility", "hidden");
      $(".nav-form .nav-next").css("opacity", "0");
      $("#shortNext").css("visibility", "hidden");
      $("#shortNext").css("opacity", "0");
    } else {
      $(".nav-form .nav-next").css("visibility", "visible");
      $(".nav-form .nav-next").css("opacity", "1");
      $("#shortNext").css("visibility", "visible");
      $("#shortNext").css("opacity", "1");
    }
  }

  updateNavigation();

  function updateProgress() {
    for (let x = 0; x < state; x++) {
      if (x == state - 1) {
        steps[state - 1].classList.add("current");
      } else {
        steps[x].classList.add("active");
        steps[x].querySelector(".step div").innerHTML =
          "<i class='fa-solid fa-check'></i>";
      }
    }

    for (let x = state; x < 3; x++) {
      steps[x].classList.remove("current");
      steps[x - 1].classList.remove("active");
      steps[x - 1].querySelector(".step div").innerHTML = x;
    }
  }
  updateProgress();

  function updateForms() {
    steps.forEach((step) => {
      if ($(`.questions-container #${step.dataset.step}`).attr("id") != state) {
        $(`.questions-container #${step.dataset.step}`).css("display", "none");
      } else {
        $(`.questions-container #${step.dataset.step}`).css("display", "block");
      }
    });
  }

  updateForms();

  function nextControl() {
    if (state < 3) {
      steps[state - 1].classList.add("current");
      state += 1;
      updateProgress();
      updateForms();
      updateNavigation();
    }
  }

  $(".nav-form .nav-prev").on("click", function () {
    if (state > 1) {
      steps[state - 1].classList.remove("current");
      state -= 1;
      updateProgress();
      updateForms();
      updateNavigation();

      if (state == 2) {
        $(".form-questions #2 input[name=sample_size]").val("");
      }
    }
  });

  // ================== backend-error state ==================

  $(".steps .step").each((index, item) => {
    if (
      $(`.form-questions #${index + 1} .errors`)
        .text()
        .trim().length != 0
    ) {
      $(item).addClass("backend-error");
    }
  });

  // ============== validation ================

  const regDate =
    /^1[34][0-9][0-9]\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/;
  const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const regNumber = /^([^0-9]*)$/;
  const regSpace = /\s{2,}/;

  $(".nav-next").on("click", function (event) {
    const titlePlan = $(`.form-questions #${state}`).find(
      'input[name="title"]'
    );
    const nickName = $(`.form-questions #${state}`).find('input[name="name"]');
    const file = $(`.form-questions #${state}`).find("input[name=file]");

    if (titlePlan.length > 0) {
      if (titlePlan.val() == "") {
        titlePlan.next(".errors").text("* فیلد عنوان نمی تواند خالی باشد!");
        titlePlan.addClass("field-error");
      } else if (
        regSpecial.test(titlePlan.val()) ||
        regSpace.test(titlePlan.val())
      ) {
        titlePlan.next(".errors").text("* عنوان وارد شده معتبر نیست!");
        titlePlan.addClass("field-error");
      } else {
        titlePlan.next(".errors").text("");
        titlePlan.removeClass("field-error");
      }
    }

    if (nickName.length > 0) {
      if (regSpecial.test(nickName.val()) || regSpace.test(nickName.val())) {
        nickName.next(".errors").text("* نام اختصاری وارد شده معتبر نیست!");
        nickName.addClass("field-error");
      } else {
        nickName.next(".errors").text("");
        nickName.removeClass("field-error");
      }
    }

    if (file.length > 0 && $("#file-upload-name").length == 0) {
      if (file.val() == "") {
        $(".upload-main-wrapper")
          .find(".errors")
          .text("* این فیلد نمیتواند خالی باشد!");
        file.addClass("field-error");
      } else {
        $(".upload-main-wrapper").find(".errors").text("");
        file.removeClass("field-error");
      }
    }

    // $(`.form-questions #${state} .calc-type input[type=number]`).each(
    //     (index, item) => {
    //         if (item.value == "") {
    //             $(item)
    //                 .next(".errors")
    //                 .text("* این فیلد نمیتواند خالی باشد!");
    //             $(item).addClass("field-error");
    //             // } else if (parseFloat(item.value) < 0) {
    //             //   $(item)
    //             //     .next(".errors")
    //             //     .text("* مقدار این فیلد نمیتواند کمتر از 0 باشد!");
    //         } else {
    //             $(item).next(".errors").text("");
    //             $(item).removeClass("field-error");
    //         }
    //     }
    // );

    // ============ start_end date validation ==============

    const start_date = $(
      `.form-questions #${state} .date-inputs input[name=start_date]`
    );
    const end_date = $(
      `.form-questions #${state}  .date-inputs input[name=end_date]`
    );

    if (start_date.length > 0 && end_date.length > 0) {
      if (end_date.val() != "" && start_date.val() == "") {
        $(start_date)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* باید هردو فیلد تاریخ پر شود!");
        $(start_date).addClass("field-error");
      } else if (!regDate.test(start_date.val()) && start_date.val() != "") {
        $(start_date)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* تاریخ وارد شده معتبر نیست!");
        $(start_date).addClass("field-error");
      } else {
        $(start_date)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("");
        $(start_date).removeClass("field-error");
      }

      if (start_date.val() != "" && end_date.val() == "") {
        $(end_date)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* باید هردو فیلد تاریخ پر شود!");
        $(end_date).addClass("field-error");
      } else if (!regDate.test(end_date.val()) && end_date.val() != "") {
        $(end_date)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* تاریخ وارد شده معتبر نیست!");
        $(end_date).addClass("field-error");
      } else if (dateValidation(start_date, end_date)) {
        $(end_date)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* تاریخ پایان نمی تواند قبل از تاریخ شروع باشد!");
        $(end_date).addClass("field-error");
      } else {
        $(end_date)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("");
        $(end_date).removeClass("field-error");
      }
    }

    const start_date_illness = $(
      `.form-questions #${state}  .date-inputs input[name=start_date_illness]:not(:disabled)`
    );
    const end_date_illness = $(
      `.form-questions #${state}  .date-inputs input[name=end_date_illness]:not(:disabled)`
    );

    if (end_date_illness.length > 0 && start_date_illness.length > 0) {
      if (start_date_illness.val() == "") {
        $(start_date_illness)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* فیلد تاریخ نمیتواند خالی باشد!");
        $(start_date_illness).addClass("field-error");
      } else if (!regDate.test(start_date_illness.val())) {
        $(start_date_illness)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* تاریخ وارد شده معتبر نیست!");
        $(start_date_illness).addClass("field-error");
      } else {
        $(start_date_illness)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("");
        $(start_date_illness).removeClass("field-error");
      }

      if (end_date_illness.val() == "") {
        $(end_date_illness)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* فیلد تاریخ نمیتواند خالی باشد!");
        $(end_date_illness).addClass("field-error");
      } else if (!regDate.test(end_date_illness.val())) {
        $(end_date_illness)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* تاریخ وارد شده معتبر نیست!");
        $(end_date_illness).addClass("field-error");
      } else if (dateValidation(start_date_illness, end_date_illness)) {
        $(end_date_illness)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* تاریخ پایان نمی تواند قبل از تاریخ شروع باشد!");
        $(end_date_illness).addClass("field-error");
      } else {
        $(end_date_illness)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("");
        $(end_date_illness).removeClass("field-error");
      }
    }

    const start_get_sick_ended = $(
      `.form-questions #${state}  .date-inputs input[name=start_get_sick_ended]:not(:disabled)`
    );

    const end_get_sick_ended = $(
      `.form-questions #${state}  .date-inputs input[name=end_get_sick_ended]:not(:disabled)`
    );

    if (start_get_sick_ended.length > 0 && end_get_sick_ended.length > 0) {
      if (start_get_sick_ended.val() == "") {
        $(start_get_sick_ended)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* فیلد تاریخ نمیتواند خالی باشد!");
        $(start_get_sick_ended).addClass("field-error");
      } else if (!regDate.test(start_get_sick_ended.val())) {
        $(start_get_sick_ended)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* تاریخ وارد شده معتبر نیست!");
        $(start_get_sick_ended).addClass("field-error");
      } else {
        $(start_get_sick_ended)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("");
        $(start_get_sick_ended).removeClass("field-error");
      }

      if (end_get_sick_ended.val() == "") {
        $(end_get_sick_ended)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* فیلد تاریخ نمیتواند خالی باشد!");
        $(end_get_sick_ended).addClass("field-error");
      } else if (!regDate.test(end_get_sick_ended.val())) {
        $(end_get_sick_ended)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* تاریخ وارد شده معتبر نیست!");
        $(end_get_sick_ended).addClass("field-error");
      } else if (dateValidation(start_get_sick_ended, end_get_sick_ended)) {
        $(end_get_sick_ended)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("* تاریخ پایان نمی تواند قبل از تاریخ شروع باشد!");
        $(end_get_sick_ended).addClass("field-error");
      } else {
        $(end_get_sick_ended)
          .parent("div")
          .parent(".date-inputs")
          .find(".errors")
          .text("");
        $(end_get_sick_ended).removeClass("field-error");
      }
    }

    $(".age-fields:not(:disabled)").each((index, item) => {
      if (parseInt($(item).val()) < 0 || parseInt($(item).val()) > 100) {
        $(item).next(".errors").text("*مقدار وارد شده معتبر نیست!");
        $(item).next(".errors").css("height", "auto");
      } else {
        $(item).next(".errors").text("");
      }
    });

    function dateValidation(start, end) {
      const startDate = new Date(start.val());
      const endDate = new Date(end.val());

      return startDate >= endDate;
    }

    if (state == 2) {
      $("#delete_fields").click();
      $("#delete_type").click();

      const inter_table = $("#intervention_table");

      if (interventions.length == 0) {
        inter_table.find(".errors").text("*وارد کردن مداخله الزامی است!");
      }
    }

    let nextFlag =
      $(`.form-questions #${state} .errors`).text().trim().length === 0;

    if (state == 2) {
      $(".calc-types .calc-sample-btn").click();
      // const calc_errors = $("#sample_size_error").text().trim().length === 0;

      if (nextFlag) {
        nextControl();
      }
    } else {
      if (nextFlag) {
        nextControl();
      }
    }
  });

  $("#shortNext").on("click", function (event) {
    event.preventDefault();
    $(".nav-next").click();
  });
});
