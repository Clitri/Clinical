

$(document).on('click', '.btn-danger', function () {
    let id = $(this).attr('id');
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
                url: "/dashboard/suggestion/delete/" + id,
                method: "delete",

                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                data: {
                    id: id,
                    _token: $('meta[name="csrf-token"]').attr("content"),
                },

                success: function (data) {
                    $("#suggestion-" + id).remove();
                    Swal.fire("حذف!", "پیشنهاد با موفقیت حذف شد!", "success");
                },
            });
        }
    });
});

$(document).on("keyup", ".in-search", function (event) {
    var search = $(this).val();
    $.ajax({
        url: "/dashboard/suggestion/search",
        method: "POST",
        data: {search: search, _token: $('meta[name="csrf-token"]').attr("content")},
        dataType: 'json',

        success: function (response) {
            $(".search-table").text("");
            if (response['suggestions'].length == 0){
                $('.search-table').append('<td valign="top" colspan="8" class="dataTables_empty">داده ای در دسترس نیست</td>');
            }else {
                let counter = 1;
                $.each(response['suggestions'], function (key, value) {
                    $(".search-table").append(`<tr id="suggestion-${value.id}">
                                                <td> ${counter++}</td>
                                                <td>${value.content}</td>
                                                <td><a href="/images/suggestions${value.file}" alt="">${value.file}</a></td>
                                                 <td>${value.email}</td>

                                               <td><div class="d-flex justify-content-center">
                                         <a href="#" class="btn btn-danger shadow btn-xs sharp delete"
                                                           id="${ value.id }"><i
                                                                class="fa-solid fa-trash"></i></a>
                                                         </div>
                                                    </td>
                                            </tr>
`);
                });
            }
        }
    });
});
