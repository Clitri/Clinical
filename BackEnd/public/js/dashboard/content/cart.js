$(document).on("click", ".delete-order", function (event) {
    event.preventDefault();
    let id = $(this).data('id');

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
                url: "/dashboard/order/delete/" + id,
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
                    $("#order-" + id).remove();
                    Swal.fire("حذف!", "سرویس با موفقیت حذف شد!", "success");
                },
            });
        }
    });

});

$(document).on("change", "#inputState", function (event) {
    let id = $(this).data('id');
    let period = $(this);
    $.ajax({
        url: "/dashboard/service/off/" + id + "/" + period.val(),
        method: "get",
        success: function (response) {

            let price = response['period'] * response['price'];
            let off = response['off'] * price / 100;
            $("#price").html(price - off +' تومان ');
        },
    });

});
