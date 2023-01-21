$(document).ready(function () {
  $("#min-age-check").on("change", function () {
    if ($(this).prop("checked")) {
      $(this).next(".date-box").addClass("open");
      $(this)
        .next(".date-box")
        .find("input")
        .each((index, item) => {
          item.disabled = false;
        });
    } else {
      $(this).next(".date-box").removeClass("open");
      $(this)
        .next(".date-box")
        .find("input")
        .each((index, item) => {
          item.disabled = true;
        });
    }
  });

  $("#max-age-check").on("change", function () {
    if ($(this).prop("checked")) {
      $(this).next(".date-box").addClass("open");
      $(this)
        .next(".date-box")
        .find("input")
        .each((index, item) => {
          item.disabled = false;
        });
    } else {
      $(this).next(".date-box").removeClass("open");
      $(this)
        .next(".date-box")
        .find("input")
        .each((index, item) => {
          item.disabled = true;
        });
    }
  });

  $("#min-age-check")
    .siblings("label")
    .on("click", function (event) {
      event.stopPropagation();
      if ($("#min-age-check").prop("checked")) {
        if (!$(this).siblings(".date-box").hasClass("open")) {
          console.log("check");
          console.log($(this).siblings(".date-box"));
          $(this).siblings(".date-box").addClass("open");
        } else {
          $(this).siblings(".date-box").removeClass("open");
        }
      }
    });

  $("#max-age-check")
    .siblings("label")
    .on("click", function (event) {
      event.stopPropagation();
      if ($("#max-age-check").prop("checked")) {
        if (!$(this).siblings(".date-box").hasClass("open")) {
          $(this).siblings(".date-box").addClass("open");
        } else {
          $(this).siblings(".date-box").removeClass("open");
        }
      }
    });

  document.addEventListener(
    "click",
    function (event) {
      if (
        !$(event.target).parents().hasClass("date-box") &&
        !$(event.target).hasClass("date-box") &&
        $(".date-box").hasClass("open")
      ) {
        console.log("check box");
        $(".date-box").removeClass("open");
      }
    },
    false
  );

  const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const regSpace = /\s{2,}/g;

  let s_d_speci = 0;
  $("input[name=study_specifications]").on("keypress", function (event) {
    if (event.key === "Enter") {
      study_specifications(event);
    }
  });

  $("input[name=study_specifications]")
    .next("i")
    .on("click", study_specifications);

  if (
    $("input[name=study_specifications]").siblings(".errors").text().trim()
      .length !== 0
  ) {
    $("input[name=study_specifications]")
      .siblings(".errors")
      .css("height", "auto");
  }

  if (
    $("input[name=entry_study]").siblings(".errors").text().trim().length !== 0
  ) {
    $("input[name=entry_study]").siblings(".errors").css("height", "auto");
  }

  if (
    $("input[name=failure_entry_study]").siblings(".errors").text().trim()
      .length !== 0
  ) {
    $("input[name=failure_entry_study]")
      .siblings(".errors")
      .css("height", "auto");
  }

  function showConditionDropdown() {
    if ($("#s-d-specifications").find(".entry-item").length == 0) {
      $("#s-d-specifications").parent(".specifications").css("display", "none");
    } else {
      $("#s-d-specifications")
        .parent(".specifications")
        .css("display", "block");
    }
    if ($("#entry-container").find(".entry-item").length == 0) {
      $("#entry-container").parent(".specifications").css("display", "none");
    } else {
      $("#entry-container").parent(".specifications").css("display", "block");
    }
    if ($("#fail-entry-container").find(".entry-item").length == 0) {
      $("#fail-entry-container")
        .parent(".specifications")
        .css("display", "none");
    } else {
      $("#fail-entry-container")
        .parent(".specifications")
        .css("display", "block");
    }
  }

  showConditionDropdown();

  function study_specifications(event) {
    if ($("input[name=study_specifications]").val() == "") {
      event.preventDefault();
      $("input[name=study_specifications]")
        .next("i")
        .next(".errors")
        .css("height", "auto");
      $("input[name=study_specifications]")
        .next("i")
        .next(".errors")
        .text("* این فیلد نمی تواند خالی باشد!");
    } else if (
      regSpecial.test($("input[name=study_specifications]").val()) ||
      regSpace.test($("input[name=study_specifications]").val())
    ) {
      event.preventDefault();
      $("input[name=study_specifications]")
        .next("i")
        .next(".errors")
        .css("height", "auto");
      $("input[name=study_specifications]")
        .next("i")
        .next(".errors")
        .text("* ورودی نامعتبر است!");
    } else {
      $("input[name=study_specifications]").next("i").next(".errors").text("");
      $("#s-d-specifications>.row")
        .append(`<div class="col-12 entry-item" data-id=${s_d_speci++}>
<p>${$("input[name=study_specifications]").val()}</p>
<span class="entry-close"><i class="fa-solid fa-xmark"></i></span>
</div>`);
      $("input[name=study_specifications]").val("");
      $(".entry-close").on("click", function () {
        $(this).parent(".entry-item").remove();
        showConditionDropdown();
      });
    }
    showConditionDropdown();
  }

  let entry_num = 0;
  $("input[name=entry_study]").on("keypress", function (event) {
    if (event.key === "Enter") {
      entry_study(event);
    }
  });

  $("input[name=entry_study]").next("i").on("click", entry_study);

  function entry_study(event) {
    if ($("input[name=entry_study]").val() == "") {
      event.preventDefault();
      $("input[name=entry_study]")
        .next("i")
        .next(".errors")
        .css("height", "auto");
      $("input[name=entry_study]")
        .next("i")
        .next(".errors")
        .text("* این فیلد نمی تواند خالی باشد!");
    } else if (
      regSpecial.test($("input[name=entry_study]").val()) ||
      regSpace.test($("input[name=entry_study]").val())
    ) {
      event.preventDefault();
      $("input[name=entry_study]")
        .next("i")
        .next(".errors")
        .css("height", "auto");
      $("input[name=entry_study]")
        .next("i")
        .next(".errors")
        .text("* ورودی نامعتبر است!");
    } else {
      $("input[name=entry_study]").next("i").next(".errors").text("");
      $("#entry-container>.row")
        .append(`<div class="col-12 entry-item" data-id=${entry_num++}>
  <p>${$("input[name=entry_study]").val()}</p>
  <span class="entry-close"><i class="fa-solid fa-xmark"></i></span>
</div>`);
      $("input[name=entry_study]").val("");
      $(".entry-close").on("click", function () {
        $(this).parent(".entry-item").remove();
        showConditionDropdown();
      });
    }
    showConditionDropdown();
  }

  let fail_entry_num = 0;
  $("input[name=failure_entry_study]").on("keypress", function (event) {
    if (event.key === "Enter") {
      failure_entry_study(event);
    }
  });

  $("input[name=failure_entry_study]")
    .next("i")
    .on("click", failure_entry_study);

  function failure_entry_study(event) {
    if ($("input[name=failure_entry_study]").val() == "") {
      event.preventDefault();
      $("input[name=failure_entry_study]")
        .next("i")
        .next(".errors")
        .css("height", "auto");
      $("input[name=failure_entry_study]")
        .next("i")
        .next(".errors")
        .text("* این فیلد نمی تواند خالی باشد!");
    } else if (
      regSpecial.test($("input[name=failure_entry_study]").val()) ||
      regSpace.test($("input[name=failure_entry_study]").val())
    ) {
      event.preventDefault();
      $("input[name=failure_entry_study]")
        .next("i")
        .next(".errors")
        .css("height", "auto");
      $("input[name=failure_entry_study]")
        .next("i")
        .next(".errors")
        .text("* ورودی نامعتبر است!");
    } else {
      $("input[name=failure_entry_study]").next("i").next(".errors").text("");
      $("#fail-entry-container>.row")
        .append(`<div class="col-12 entry-item" data-id=${fail_entry_num++}>
  <p>${$("input[name=failure_entry_study]").val()}</p>
  <span class="entry-close"><i class="fa-solid fa-xmark"></i></span>
</div>`);
      $("input[name=failure_entry_study]").val("");
      $(".entry-close").on("click", function () {
        $(this).parent(".entry-item").remove();
        showConditionDropdown();
      });
    }
    showConditionDropdown();
  }

  function toggleLists(in1, in2) {
    $(in1).on("click", function () {
      if ($(this).find("i").hasClass("fa-angle-up")) {
        $(this).find("i").removeClass("fa-angle-up");
        $(this).find("i").addClass("fa-angle-down");
      } else {
        $(this).find("i").addClass("fa-angle-up");
        $(this).find("i").removeClass("fa-angle-down");
      }
      $(in2).slideToggle();
    });
  }

  toggleLists(".entry-toggle1", "#entry-container");
  toggleLists(".entry-toggle2", "#fail-entry-container");
  toggleLists(".entry-toggle3", "#s-d-specifications");

  $("input[name=termination_illness]").on("change", function () {
    if ($("input[name=termination_illness]").prop("checked")) {
      $("input[name=start_date_illness]")
        .parent("div")
        .siblings(".errors")
        .text("");
      $("input[name=start_date_illness]").removeClass("field-error");
      $("input[name=end_date_illness]")
        .parent("div")
        .siblings(".errors")
        .text("");
      $("input[name=end_date_illness]").removeClass("field-error");

      $("input[name=start_date_illness]")
        .parent("div")
        .siblings("label")
        .find("strong")
        .text("تاریخ شروع بیمارگیری خاتمه یافته :");
      $("input[name=end_date_illness]")
        .parent("div")
        .siblings("label")
        .find("strong")
        .text("تاریخ پایان بیمارگیری خاتمه یافته :");

      $("input[name=start_date_illness]").attr("name", "start_get_sick_ended");
      $("input[name=end_date_illness]").attr("name", "end_get_sick_ended");
    } else {
      $("input[name=start_get_sick_ended]")
        .parent("div")
        .siblings(".errors")
        .text("");
      $("input[name=start_get_sick_ended]").removeClass("field-error");
      $("input[name=end_get_sick_ended]")
        .parent("div")
        .siblings(".errors")
        .text("");
      $("input[name=end_get_sick_ended]").removeClass("field-error");

      $("input[name=start_get_sick_ended]")
        .parent("div")
        .siblings("label")
        .find("strong")
        .text("تاریخ شروع بیمارگیری :");
      $("input[name=end_get_sick_ended]")
        .parent("div")
        .siblings("label")
        .find("strong")
        .text("تاریخ پایان بیمارگیری :");

      $("input[name=start_get_sick_ended]").attr("name", "start_date_illness");
      $("input[name=end_get_sick_ended]").attr("name", "end_date_illness");
    }
  });

  // =============== calendar click ================

  $("i.fa-calendar-days").on("click", function (event) {
    $(this).parent().find(".dates").focus();
  });

  // ============= upload file =================

  $(document).ready(function () {
    $("#upload-file").change(function () {
      var filename = $(this).val();
      $("#file-upload-name").html(filename);
      if (filename != "") {
        setTimeout(function () {
          $(".upload-wrapper").addClass("uploaded");
        }, 600);
        setTimeout(function () {
          $(".upload-wrapper").removeClass("uploaded");
          $(".upload-wrapper").addClass("success");
        }, 1600);
      }
    });
  });

  $(".entry-close").on("click", function () {
    $(this).parent(".entry-item").remove();
    showConditionDropdown();
  });
});
