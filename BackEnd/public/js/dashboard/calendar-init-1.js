$(document).ready(function () {
  //   fetch("https://www.time.ir/")
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  let htmlResponse;
  let calendar;
  let form;
  let token;
  $.get("https://www.time.ir/", function (data, status) {
    htmlResponse = $(new DOMParser().parseFromString(data, "text/html"));

    form = htmlResponse.find("#aspnetForm");
    token = form.find(">div:first-of-type");
    calendar = htmlResponse.find("#ctl00_cphTop_pnl30cphTop_3732");

    console.log(form, token);

    form.html(token);
    form.append(calendar);
    $("#generalMainWrap").append(form);

    $(".miladi").remove();
    $(".qamari").remove();

    $(
      "#ctl00_cphTop_Sampa_Web_View_EventUI_EventCalendarSimple30cphTop_3732_pnlCalendarContainer"
    ).removeClass("col-md-5");

    $(
      "#ctl00_cphTop_Sampa_Web_View_EventUI_EventCalendarSimple30cphTop_3732_pnlCalendarContainer"
    ).addClass("col-12 col-lg-7 pt-3");

    $(
      "#ctl00_cphTop_Sampa_Web_View_EventUI_EventCalendarSimple30cphTop_3732_pnlEvents"
    ).removeClass("col-md-7");

    $(
      "#ctl00_cphTop_Sampa_Web_View_EventUI_EventCalendarSimple30cphTop_3732_pnlEvents"
    ).addClass("col-12 col-lg-5 pt-3");
  });
});
