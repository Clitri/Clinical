$(document).ready(function () {
  let options = {
    placeholder: "تاریخ",
    twodigit: false,
    closeAfterSelect: false,
    nextButtonIcon: "css/calendar/image/timeir_next.png",
    previousButtonIcon: "css/calendar/image/timeir_prev.png",
    buttonsColor: "blue",
    forceFarsiDigits: true,
    markToday: true,
    markHolidays: true,
    highlightSelectedDay: true,
    sync: true,
    gotoToday: true,
  };

  $(".dates").each((index, item) => {
    kamaDatepicker(item.id, options);
  });
});
