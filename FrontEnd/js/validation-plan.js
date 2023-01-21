$(document).ready(function () {
  // ================== validation plan ==================

  const regDate =
      /^1[34][0-9][0-9]\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/;
  const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const regNumber = /^([^0-9]*)$/;
  const regSpace = /\s{2,}/g;

  $(".form-questions input").on("keypress", function (event) {
      if (event.key == "Enter") {
          event.preventDefault();
      }
  });

  $(".form-questions").on("submit", function (event) {
      
      const titlePlan = $(this).find('input[name="title"]');
      const nickName = $(this).find('input[name="name"]');
      const file = $(this).find("input[name=file]");

      if (titlePlan.length > 0) {
          if (titlePlan.val() == "") {
              event.preventDefault();
              titlePlan
                  .next(".errors")
                  .text("* فیلد عنوان نمی تواند خالی باشد!");
              titlePlan.addClass("field-error");
          } else if (
              regSpecial.test(titlePlan.val()) ||
              regSpace.test(titlePlan.val())
          ) {
              event.preventDefault();
              titlePlan.next(".errors").text("* عنوان وارد شده معتبر نیست!");
              titlePlan.addClass("field-error");
          } else {
              titlePlan.next(".errors").text("");
              titlePlan.removeClass("field-error");
          }
      }

      if (nickName.length > 0) {
          if (
              regSpecial.test(nickName.val()) ||
              regSpace.test(nickName.val())
          ) {
              event.preventDefault();
              nickName
                  .next(".errors")
                  .text("* نام اختصاری وارد شده معتبر نیست!");
              nickName.addClass("field-error");
          } else {
              nickName.next(".errors").text("");
              nickName.removeClass("field-error");
          }
      }

      if (file.length > 0 && $("#file-upload-name").length == 0) {
          if (file.val() == "") {
              event.preventDefault();
              $(".upload-main-wrapper")
                  .find(".errors")
                  .text("* این فیلد نمیتواند خالی باشد!");
              file.addClass("field-error");
          } else {
              $(".upload-main-wrapper").find(".errors").text("");
              file.removeClass("field-error");
          }
      }

      // $(`.form-questions .calc-type input[type=number]`).each(
      //     (index, item) => {
      //         if (item.value == "") {
      //             event.preventDefault();
      //             $(item)
      //                 .next(".errors")
      //                 .text("* این فیلد نمیتواند خالی باشد!");
      //             $(item).addClass("field-error");
      //         } else {
      //             $(item).next(".errors").text("");
      //             $(item).removeClass("field-error");
      //         }
      //     }
      // );

      // ============ start_end date validation ==============

      const start_date = $(
          `.form-questions .date-inputs input[name=start_date]`
      );
      const end_date = $(
          `.form-questions  .date-inputs input[name=end_date]`
      );

      if (start_date.length > 0 && end_date.length > 0) {
          if (end_date.val() != "" && start_date.val() == "") {
              $(start_date)
                  .parent("div")
                  .parent(".date-inputs")
                  .find(".errors")
                  .text("* باید هردو فیلد تاریخ پر شود!");
              $(start_date).addClass("field-error");
          } else if (
              !regDate.test(start_date.val()) &&
              start_date.val() != ""
          ) {
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
          `.form-questions  .date-inputs input[name=start_date_illness]:not(:disabled)`
      );
      const end_date_illness = $(
          `.form-questions  .date-inputs input[name=end_date_illness]:not(:disabled)`
      );

      if (end_date_illness.length > 0 && start_date_illness.length > 0) {
          if (start_date_illness.val() == "") {
              event.preventDefault();
              $(start_date_illness)
                  .parent("div")
                  .parent(".date-inputs")
                  .find(".errors")
                  .text("* فیلد تاریخ نمیتواند خالی باشد!");
              $(start_date_illness).addClass("field-error");
          } else if (!regDate.test(start_date_illness.val())) {
              event.preventDefault();
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
              event.preventDefault();
              $(end_date_illness)
                  .parent("div")
                  .parent(".date-inputs")
                  .find(".errors")
                  .text("* فیلد تاریخ نمیتواند خالی باشد!");
              $(end_date_illness).addClass("field-error");
          } else if (!regDate.test(end_date_illness.val())) {
              event.preventDefault();
              $(end_date_illness)
                  .parent("div")
                  .parent(".date-inputs")
                  .find(".errors")
                  .text("* تاریخ وارد شده معتبر نیست!");
              $(end_date_illness).addClass("field-error");
          } else if (dateValidation(start_date_illness, end_date_illness)) {
              event.preventDefault();
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
          `.form-questions  .date-inputs input[name=start_get_sick_ended]:not(:disabled)`
      );

      const end_get_sick_ended = $(
          `.form-questions  .date-inputs input[name=end_get_sick_ended]:not(:disabled)`
      );

      if (start_get_sick_ended.length > 0 && end_get_sick_ended.length > 0) {
          if (start_get_sick_ended.val() == "") {
              event.preventDefault();
              $(start_get_sick_ended)
                  .parent("div")
                  .parent(".date-inputs")
                  .find(".errors")
                  .text("* فیلد تاریخ نمیتواند خالی باشد!");
              $(start_get_sick_ended).addClass("field-error");
          } else if (!regDate.test(start_get_sick_ended.val())) {
              event.preventDefault();
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
              event.preventDefault();
              $(end_get_sick_ended)
                  .parent("div")
                  .parent(".date-inputs")
                  .find(".errors")
                  .text("* فیلد تاریخ نمیتواند خالی باشد!");
              $(end_get_sick_ended).addClass("field-error");
          } else if (!regDate.test(end_get_sick_ended.val())) {
              event.preventDefault();
              $(end_get_sick_ended)
                  .parent("div")
                  .parent(".date-inputs")
                  .find(".errors")
                  .text("* تاریخ وارد شده معتبر نیست!");
              $(end_get_sick_ended).addClass("field-error");
          } else if (
              dateValidation(start_get_sick_ended, end_get_sick_ended)
          ) {
              event.preventDefault();
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

      $("#3 .specifications").each((index, item) => {
          if ($(item).find(".entry-item").length == 0) {
              event.preventDefault();
              $(item)
                  .parent(".form-group")
                  .find(".errors")
                  .text("* حداقل یک شرط باید وارد شود!");
              $(item)
                  .parent(".form-group")
                  .find(".errors")
                  .css("height", "auto");
          } else {
              $(item).parent(".form-group").find(".errors").text("");
              $(item)
                  .parent(".form-group")
                  .find(".errors")
                  .css("height", "0");
          }
      });

      validateMonth($(".age-fields[name=min_month]:not(:disabled)"));
      validateMonth($(".age-fields[name=max_month]:not(:disabled)"));

      function validateMonth(item) {
          if (parseInt(item.val()) < 0 || parseInt(item.val()) > 12) {
              event.preventDefault();
              item.next(".errors").text("*مقدار وارد شده معتبر نیست!");
          } else {
              item.next(".errors").text("");
          }
      }

      validateDay($(".age-fields[name=min_day]:not(:disabled)"));
      validateDay($(".age-fields[name=max_day]:not(:disabled)"));

      function validateDay(item) {
          if (parseInt(item.val()) < 0 || parseInt(item.val()) > 31) {
              event.preventDefault();
              item.next(".errors").text("*مقدار وارد شده معتبر نیست!");
          } else {
              item.next(".errors").text("");
          }
      }

      $(".date-box").each((index, item) => {
          if ($(item).find(".errors").text().trim().length > 0) {
              $(item).parent().find("label").css("color", "#f25767");
          } else {
              $(item).parent().find("label").css("color", "#115169");
          }
      });

      function dateValidation(start, end) {
          const startDate = new Date(start.val());
          const endDate = new Date(end.val());

          return startDate >= endDate;
      }

      let submitFlag = $(".form-questions .errors").text().trim().length == 0;
      console.log($(".form-questions .errors").text().trim().length)
      console.log(submitFlag)

      if (submitFlag) {
          $(".questionnaire-box .wrapper").css("display", "block");
          const study_specifications = $(".questions-container form").find(
              "input[name=study_specifications]"
          );
          const entry_study = $(".questions-container form").find(
              "input[name=entry_study]"
          );
          const failure_entry_study = $(".questions-container form").find(
              "input[name=failure_entry_study]"
          );

          let study_spec = new Array();
          $("#s-d-specifications>.row .entry-item").each((index, item) => {
              study_spec.push($(item).find("p").text());
          });
          study_specifications.val(study_spec);

          let entry_stu = new Array();
          $("#entry-container>.row .entry-item").each((index, item) => {
              entry_stu.push($(item).find("p").text());
          });
          entry_study.val(entry_stu);

          let failure_entry = new Array();
          $("#fail-entry-container>.row .entry-item").each((index, item) => {
              failure_entry.push($(item).find("p").text());
          });
          failure_entry_study.val(failure_entry);

          const intervation_input = `<input type="text" class="d-none" id="intervention" name="intervention" />`;
          $(this).append(intervation_input);
          $("#intervention").val(JSON.stringify(interventions));
      }
  });
});
