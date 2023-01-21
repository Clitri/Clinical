
// $(document).on("click", `.sickness+i`, function (event) {
//     console.log('check');
//
//     $('.sickness').val($(this).val());
// });

$(".search-tags").slideUp();

$("#create_patient input[name=sickness_id]").on("blur", function (event) {
    $(".search-tags").slideUp();
});

$(document).on("click", ".search-tags li", function (event) {
    $("#create_patient input[name=sickness_id]").val($(this).text()).focus();
});

    $(document).on("keyup", ".sickness", function (event) {
        // event.preventDefault();
        $.ajax({
            url: "/dashboard/patient/sickness",
            method: "POST",
            data: {search: $(this).val(), _token: $('meta[name="csrf-token"]').attr("content")},
            dataType: "json",

            success: function (response) {
                $(".search-tags").slideDown();
                $(".search-tags li").remove();
                response.forEach((item) => {
                    $(".search-tags").append(`<li>${item.name}</li>`);
                });

            },
            error: function (){

            }
        });

});


function deleterecord(id) {

    Swal.fire({
        title: "ایا از حذف مطمئن هستید؟",
        icon: "warning",
        confirmButtonColor: "#DD6B55",
        showCancelButton: true,
        confirmButtonText: "حذف",
        cancelButtonText: "لغو",
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/dashboard/patient/delete/" + id,
                type: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data: {

                    _token: $('meta[name="csrf-token"]').attr('content'),
                },

                success: function (response) {
                    $("#patient-" + id).remove();
                    Swal.fire(
                        'حذف!',
                        'بیمار با موفقیت حذف شد!',
                        'success'
                    )

                },
            });
        }
    });
}

$(document).on("keyup", ".in-search", function (event) {
    var search = $(this).val();
    $.ajax({
        url: "/dashboard/patient/search",
        method: "POST",
        data: {search: search, _token: $('meta[name="csrf-token"]').attr("content")},
        dataType: 'json',

        success: function (response) {
            $(".search-table").text("");
            if (response['patients'].length == 0) {
                $('.search-table').append('<td valign="top" colspan="8" class="dataTables_empty">داده ای در دسترس نیست</td>');
            } else {
                let counter = 1;
                $.each(response['patients'], function (key, value) {
                    $(".search-table").append(`<tr id="patient-${value.id}">
                                                <td> ${counter++}</td>
                                                <td>${value.name + ' ' + value.f_name}</td>
                                                <td>${value.n_number}</td>
                                                <td>${value.birthdate}</td>
                                                <td>${value.gender_id}</td>
                                                <td>${value.marriage}</td>
                                                <td>${value.height}</td>
                                                <td>${value.weight}</td>
                                                <td>${value.province_id}</td>
                                                <td>${value.sickness_id}</td>
` +
                        (response.delete || response.edit ?
                                ` <td>
                                                        <div class="d-flex justify-content-center">`+
                            (response.edit ?
                                `<a href="/dashboard/patient/edit/${value.id}"
                                                                       class="btn btn-primary text-white shadow btn-xs sharp"><i
                                                                            class="fa-solid fa-pencil"></i></a>` : ``) +
                            (response.delete ?
                                `<a onclick="deleterecord(${value.id})"
                                                               class="btn btn-danger text-white shadow btn-xs sharp"><i
                                                                    class="fa-solid fa-trash"></i></a>` : ``)+`
                                                        </div>
                                                    </td>` : ``
                        ) + `

                                            </tr>
`);
                });
            }
        }
    });
});


$(document).on('click' , '.clear-input' , function (event){
    $(this).siblings('.sickness').val("");
    $(this).siblings('.search-tags').slideUp();

})
