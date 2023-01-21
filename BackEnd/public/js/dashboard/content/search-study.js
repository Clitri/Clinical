
$(document).on("submit", "#search", function (event) {
    event.preventDefault();
    let fd = new FormData(this);
    console.log(fd);
    $.ajax({
        url: "/dashboard/study/advanced-search",
        method: "POST",
        data: fd,
        cache: false,
        contentType: false,
        processData: false,
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        success: function (response) {
            console.log(response);
            $("#study-table").text("");
            if (response.length == 0){
                $('#study-table').append('<td valign="top" colspan="8" class="dataTables_empty">داده ای در دسترس نیست</td>');
            }else {
                let counter = 1;
                $.each(response, function (key, value) {
                    $("#study-table").append(`<tr>
                                                <td> ${counter++}</td>
                                                <td>${value.title}</td>
                                                 <td>${value.studies_type}</td>
                                                 <td>${value.start_date}</td>
                                                 <td>${value.end_date}</td>
                                                 <td>${value.status ?  'تایید شده' : 'تایید نشده'}</td>

                                            </tr>
`);
                });
            }
        }
    });
});



$(document).on("click", ".buttons-pdf", function (event) {
    event.preventDefault();
    let form = document.forms['search'];
    let fd = new FormData(form);
    console.log(fd);
    $.ajax({
        url: "/dashboard/report/study/pdf",
        method: "POST",
        data: fd,
        cache: false,
        contentType: false,
        processData: false,
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        success: function (response) {
        }
    });
});

$(document).on("click", ".buttons-excel", function (event) {
    event.preventDefault();
    let form = document.forms['search'];
    let fd = new FormData(form);
    $.ajax({
        xhrFields: {
            responseType: 'blob',
        },
        url: "/dashboard/report/study/excel",
        method: "POST",
        data: fd,
        cache: false,
        contentType: false,
        processData: false,
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
        success: function (result, status, xhr) {

            var disposition = xhr.getResponseHeader('content-disposition');
            var matches = /"([^"]*)"/.exec(disposition);
            // var filename = (matches != null && matches[1] ? matches[1] : 'salary.xlsx');
            var filename ='طرح ها.xlsx';

            // The actual download
            var blob = new Blob([result], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;

            document.body.appendChild(link);

            link.click();
            document.body.removeChild(link);
        }
    });
});
//  $(document).on("click", ".buttons-pdf", function (event) {
//     event.preventDefault();
//    let studies_type = document.forms['search']['studies_type'].value ==  'انتخاب کنید' ? null : document.forms['search']['studies_type'].value;
//    let study_design = document.forms['search']['study_design'].value ==  'انتخاب کنید' ? null : document.forms['search']['study_design'].value;
//    let purpose_study = document.forms['search']['purpose_study'].value ==  'انتخاب کنید' ? null : document.forms['search']['purpose_study'].value;
//    let randomization = document.forms['search']['randomization'].value ==  'انتخاب کنید' ? null : document.forms['search']['randomization'].value;
//    let blinding = document.forms['search']['blinding'].value ==  'انتخاب کنید' ? null : document.forms['search']['blinding'].value;
//    let placebo = 0;
//    console.log(studies_type);
//    window.location("/dashboard/report/study/pdf/"+${studies_type}+'/'${study_design}+'/'${purpose_study}+'/'${randomization}+'/'${blinding}+'/'${placebo});
//      // $(".buttons-pdf").attr("href", "/dashboard/report/study/pdf/"+${studies_type}+'/'${study_design}+'/'${purpose_study}+'/'${randomization}+'/'${blinding}+'/'${placebo});
// });
