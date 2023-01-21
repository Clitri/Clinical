$(document).on("keyup", ".in-search", function (event) {
    var search = $(this).val();
    $.ajax({
        url: "/dashboard/order/search",
        method: "POST",
        data: {search: search, _token: $('meta[name="csrf-token"]').attr("content")},
        dataType: 'json',

        success: function (response) {
            console.log(response);
            $(".search-table").text("");
            if (response['researchers'].length == 0){
                $('.search-table').append('<td valign="top" colspan="8" class="dataTables_empty">داده ای در دسترس نیست</td>');
            }else {
                let counter = 1;
                $.each(response['researchers'], function (key, value) {
                    $(".search-table").append(`<tr id="order-${value.id}">
                                                <td> ${counter++}</td>
                                                <td>${value.name}</td>
                                                <td>${value.type}</td>
                                                <td>${value.month}

                                            </tr>
`);
                });
            }
        }
    });
});
