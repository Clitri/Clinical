// insert record

document.querySelector("#slider").addEventListener("submit", function (e) {

    e.preventDefault();

    let fd = new FormData(this);
    $.ajax({
        url: "/dashboard/slider/create",

        type: "post",

        data: fd,
        cache: false,
        contentType: false,
        processData: false,
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },

        success: function (response) {
            if (!response){
                Swal.fire(
                        'نمیتوان بیشتر از 3 اسلاید ایجاد کرد!',
                        '',
                        'error'
                    );
                $("#slider")[0].reset();
                $("#new-slide .close").click();
            }else {
                $(".manage-slider-content .row")
                    .append(`<div  id="slide-${response.id}" class="col-12 col-md-6 col-lg-4 py-2 slide">

            <div class="manage-slide-item">

                <img src="/images/slider/${response.img}" alt />
                <div class="slide-name">
                    <h3>${response.title}</h3>
                    <p>${response.body}</p>
                </div>
                <div class="slide-info">
                    <div class="slide-icons">
                        <a href="/dashboard/slider/${response.id}/show">
                            <i class="fa-solid fa-eye"></i>
                        </a>

                        <i data-toggle="modal" data-target="#edit-slide"
                            class="fa-solid fa-pen-clip edit-slide-btn"></i>

                        <i class="fa-solid fa-trash-can delete-slide-btn" data-id="${response.id}" ></i>
                    </div>
                </div>


            </div>

        </div>`);
                countSlide();
                // $(`#slide-${response.id} .delete-slide-btn`).on(
                //     "click",
                //     function (event) {
                //         deleterecord();
                //     }
                // );

                $(`#slide-${response.id} .edit-slide-btn`).on(
                    "click",
                    function (event) {
                        Edit(response.id);
                    }
                );

                $("#slider")[0].reset();
                $("#new-slide .close").click();

                Swal.fire("ثبت!", "اسلاید با موفقیت ثبت شد", "success");
            }
        },
        error: function (error) {

            const errorMesage = document.createElement("div");
            Object.values(error.responseJSON.errors).map((value) => {
                $(errorMesage).append(`<div>${value}</div>`);
            });

            Swal.fire("خطا!", errorMesage, "error");
        },
    });
});

//update record
function Edit(id) {
    $.get("/dashboard/slider/" + id, function (slide) {
        $("#id").val(slide.id);
        $("#titles").val(slide.title);
        $("#top_titles").val(slide.top_title);
        $("#bodys").val(slide.body);
        $("#edit-slide").modal("toggle");
    });
}

document.querySelector("#Editslider").addEventListener("submit", function (e) {
    e.preventDefault();
    let id = $("#id").val();
    let fd = new FormData(this);

    $.ajax({
        url: "/dashboard/slider/update/" + id,

        method: "POST",

        data: fd,
        contentType: false,
        processData: false,
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },

        success: function (response) {
            $(`#slide-${response.id}`)
                .find("img")
                .attr("src", "/images/slider/" + response.img);
            $(`#slide-${response.id} .slide-name`)
                .find("h3")
                .text(response.title);
            $(`#slide-${response.id} .slide-name`)
                .find("p")
                .text(response.body);

            $("#edit-slide .close").click();
            Swal.fire("ویرایش!", "اسلایدر با موفقیت ویرایش شد!", "success");

        },

        error: function (error) {
            console.log(error);

            const errorMesage = document.createElement("div");
            Object.values(error.responseJSON.errors).map((value) => {
                $(errorMesage).append(`<div>${value}</div>`);
            });

            Swal.fire("خطا!", errorMesage, "error");
        },
    });
});

// delete record

$(document).on('click', '.delete-slide-btn', function () {
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
                url: "/dashboard/slider/" + id,
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
                    $("#slide-" + id).remove();
                    Swal.fire("حذف!", "اسلاید با موفقیت حذف شد!", "success");
                    countSlide();
                },
            });
        }
    });
});
function countSlide() {
    console.log($(".slide").length);
    if ($(".slide").length >= 3) {
        console.log($(".slide").length);
        $('.add-slide').remove();
    }else {
        if ($('.add-slide').length!= 1){
            $(".manage-slider-content .row").prepend(`<div class="col-12 col-md-6 col-lg-4 py-2 add-slide">
                                    <div id="add-slide" class="manage-slide-item">
                                        <a data-toggle="modal" data-target="#new-slide">
                                            <i class="fa-solid fa-circle-plus"></i><br/>
                                            افزودن اسلاید
                                        </a>
                                    </div>
                                </div>`);
        }

    }
};
