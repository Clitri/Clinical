
$(document).on('click', '.activity-btn', function () {
    const target = $(this);
    const input = $(this).find("input[type=checkbox]");
    const id = $(this).find("input[type=checkbox]").data("id");
    const column_value = !$(this).find("input").prop("checked");
    $.ajax({
        url: "/dashboard/comment/update",
        method: "PUT",
        data: { column_value: column_value, id: id, _token: $('meta[name="csrf-token"]').attr('content') },
        success: function (response) {
            if (input.prop("checked")) {
                input.attr("checked", false);
                target.removeClass("switch-to-active");
            } else {
                input.attr("checked", true);
                target.addClass("switch-to-active");
            }

            Swal.fire("وضعیت ویرایش شد", "", "success");
        },
    });
});

$(document).on('click', '.delete', function () {
    var id = $(this).attr("id");

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
                url: "/dashboard/comment/delete/" + id,
                type: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data: {

                    _token: $('meta[name="csrf-token"]').attr('content'),
                },

                success: function (response) {
                    $("#comment-" + id).remove();
                    Swal.fire(
                        'حذف!',
                        'نظر با موفقیت حذف شد!',
                        'success'
                    )

                },
            });
        }
    });
});

$(document).on('click', '.fetch', function () {
    let id = $(this).attr("id") ;
    $.get('/dashboard/comment/fetch/' + id, function (comment) {
        $("#title").val(comment.title);
        $("#message").val(comment.message);
        $("#ticket_send").modal('toggle');

    });
});

$(document).on("keyup", ".in-search", function (event) {
    var search = $(this).val();
    $.ajax({
        url: "/dashboard/comment/search",
        method: "POST",
        data: {search: search, _token: $('meta[name="csrf-token"]').attr("content")},
        dataType: 'json',

        success: function (response) {
            $(".search-table").text("");
            if (response['comments'].length == 0){
                $('.search-table').append('<td valign="top" colspan="8" class="dataTables_empty">داده ای در دسترس نیست</td>');
            }else {
                let counter = 1;
                $.each(response['comments'], function (key, value) {
                    $(".search-table").append(`<tr id="comment-${value.id}">
                                                <td> ${counter++}</td>
                                                <td>${value.title}</td>
                                                <td>${value.message}</td>
                                                <td>`+
                        (response.status ? (value.status == 1
                            ? `<div class="activity-btn  switch-to-active">
                            <span class="activity-switch"></span>
                            <input type="checkbox" class="d-none" data-id="${value.id}" checked />
                            </div>`
                            : `<div class="activity-btn">
                            <span class="activity-switch"></span>
                            <input type="checkbox" class="d-none" data-id="${value.id}" />
                            </div>`) : (value.status == 1 ? `تایید شده` : `تایید نشده`))+ `</td><td>
<div class="d-flex justify-content-center">
                                                        <a href="#"
                                                           class="btn btn-primary shadow btn-xs sharp fetch" id="${ value.id }"><i
                                                                class="fa-solid fa-eye"></i></a>`+
                        (response.delete ?
                            `<a href="#" class="btn btn-danger shadow btn-xs sharp delete"
                                                           id="${ value.id }"><i
                                                                class="fa-solid fa-trash"></i></a>` : ``)+`
                                                         </div>
                                                    </td>
                                            </tr>
`);
                });
            }
        }
    });
});
