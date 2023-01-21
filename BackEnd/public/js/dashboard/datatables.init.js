let tables;
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

    $(".posts-table").DataTable({
        paging: false,
        info: false,
    });

    tables = $("#example3, #example4, #example5, #usertable").DataTable({
        paging: false,
        dom: "Bfrtip",
        info: false,
        buttons: [
            "copyHtml5",
            {
                extend: "print",
                title: $(".tables-title").text(),
                className: "btn btn-default",
                autoPrint: true,

                customize: function (win) {
                    $(win.document.body)
                        .find("th")
                        .addClass("display")
                        .css("text-align", "center")
                        .css("border", "1px solid #aaa");

                    $(win.document.body)
                        .find("td")
                        .addClass("display")
                        .css("text-align", "center")
                        .css("border", "1px solid #ccc");
                    $(win.document.body)
                        .find("table")
                        .addClass("display")
                        .css("font-size", "16px")
                        .css("margin-top", "50px");
                    $(win.document.body)
                        .find("table")
                        .addClass("display")
                        .css("text-align", "center");
                    $(win.document.body)
                        .find("tr:nth-child(odd) td")
                        .each(function (index) {
                            $(this).css("background-color", "#D0D0D0");
                        });

                    $(win.document.body)
                        .find("table tr td:last-child ,table tr th:last-child ")
                        .css("display", "none");
                    $(win.document.body).find("h1").css("text-align", "center");
                },
            },
        ],
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
        var data = tables.row(this).data();
    });
})(jQuery);
