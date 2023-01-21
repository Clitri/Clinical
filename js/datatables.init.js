(function ($) {
  "use strict";
  var table = $("#example").DataTable({
    createdRow: function (row, data, index) {
      $(row).addClass("selected");
    },
  });
  table.on("click", "tbody tr", function () {
    var $row = table.row(this).nodes().to$();
    var hasClass = $row.hasClass("selected");
    if (hasClass) {
      $row.removeClass("selected");
    } else {
      $row.addClass("selected");
    }
  });
  table.rows().every(function () {
    this.nodes().to$().removeClass("selected");
  });
  var table2 = $("#example2").DataTable({
    createdRow: function (row, data, index) {
      $(row).addClass("selected");
    },
    scrollY: "42vh",
    scrollCollapse: true,
    paging: false,
  });
  table2.on("click", "tbody tr", function () {
    var $row = table2.row(this).nodes().to$();
    var hasClass = $row.hasClass("selected");
    if (hasClass) {
      $row.removeClass("selected");
    } else {
      $row.addClass("selected");
    }
  });
  table2.rows().every(function () {
    this.nodes().to$().removeClass("selected");
  });
  var table = $("#example3, #example4, #example5").DataTable({
    dom: "Bfrtip",
    buttons: ["print", "copyHtml5"],
    language: {
      buttons: {
        copyTitle: "در کلیپ بورد کپی شد",
        copyKeys:
          "Appuyez sur <i>ctrl</i> ou <i>\u2318</i> + <i>C</i> pour copier les données du tableau à votre presse-papiers. <br><br>Pour annuler, cliquez sur ce message ou appuyez sur Echap.",
        copySuccess: {
          _: "%d خط کپی شدند",
          1: "1 خط کپی شد",
        },
      },
    },
  });
  $("#example tbody").on("click", "tr", function () {
    var data = table.row(this).data();
  });
})(jQuery);
