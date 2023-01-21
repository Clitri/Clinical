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
                url: "/dashboard/researcher/" + id,
                type: "DELETE",
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                data: {
                    _token: $('meta[name="csrf-token"]').attr("content"),
                },

                success: function (response) {
                    $("#user-" + id).remove();
                    Swal.fire("حذف!", "طراح با موفقیت حذف شد!", "success");
                },
            });
        }
    });
}

$(document).on("keyup", ".in-search", function (event) {
    var search = $(this).val();
    $.ajax({
        url: "/dashboard/researcher/search",
        method: "POST",
        data: {search: search, _token: $('meta[name="csrf-token"]').attr("content")},
        dataType: 'json',

        success: function (response) {
            $(".search-table").text("");
            if (response['researchers'].length == 0) {
                $('.search-table').append('<td valign="top" colspan="8" class="dataTables_empty">داده ای در دسترس نیست</td>');
            } else {
                let counter = 1;
                $.each(response['researchers'], function (key, value) {
                    $(".search-table").append(`<tr id="user-${value.id}">
                                                <td> ${counter++}</td>
                                                <td>${value.name + ' ' + value.f_name}</td>
                                                <td>${value.n_number}</td>
                                                <td>${value.range}
                                                </td>
                                                <td>${value.major}</td>
                                                <td>${value.proficiency}</td>
                                                <td>${value.university}</td>
                                                <td>${value.organization}</td>` +
                        (response.delete ?
                                ` <td>
                                                        <div class="d-flex justify-content-center">

                                                            <a onclick="deleterecord(${value.id})"
                                                               class="btn btn-danger text-white shadow btn-xs sharp"><i
                                                                    class="fa-solid fa-trash"></i></a>
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

$(document).on("submit", "#researcher", function (event) {
    let n_number = $('#n_numebr');
    event.preventDefault();
    if(designerValidation(event , 'researcher')){
        $.ajax({
            url: "/dashboard/researcher/check-n_number",
            method: "POST",
            data: {n_number: n_number.val(), _token: $('meta[name="csrf-token"]').attr("content")},
            dataType: 'json',
            success: function (response) {
                if (response) {
                    event.target.submit();
                }
            },
            error: function (response) {
                event.preventDefault();
                $(n_number)
                    .next(".errors")
                    .text("*کد ملی قبلا انتخاب شده است!");

            }
        });
    }

});

