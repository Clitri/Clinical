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
            $(".manage-slider-content .row")
                .append(`<div  id="slide-${response.id}" class="col-12 col-md-6 col-lg-3 py-2">

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

            $(`#slide-${response.id} .delete-slide-btn`).on(
                "click",
                function (event) {
                    deleterecord();
                }
            );

            $(`#slide-${response.id} .edit-slide-btn`).on(
                "click",
                function (event) {
                    Edit(response.id);
                }
            );

            $("#slider")[0].reset();
            $("#new-slide .close").click();

            Swal.fire("ثبت!", "اسلاید با موفقیت ثبت شد", "success");
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

        //  type: "post",
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
        },
    });
});

// delete record

document
    .querySelectorAll(".manage-slide-item .delete-slide-btn")
    .forEach((item) => {
        item.addEventListener("click", deleterecord);
    });

function deleterecord() {
    console.log(this.dataset);
    const id = this.dataset.id;
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
                    Swal.fire("حذف!", "اسلایدر با موفقیت حذف شد!", "success");
                },
            });
        }
    });
}
