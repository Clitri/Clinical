$(document).ready(function () {
    $("#edit-profile form").on("submit", function (event) {
        const image = $(this).find('input[name="img"]');
        const imageError = image.next(".errors");

        if (image.length > 0) {
            if (image.val() == "") {
                event.preventDefault();
                imageError.text("* فیلد عکس نمیتواند خالی باشد!");
            } else {
                imageError.text("");
            }
        }
    });

    $("#edit-profile .close-btn").on("click", function () {
        $("#edit-profile form")[0].reset();
        $("#edit-profile form").find(".errors").text("");
    });

    $("#userModal form").on("submit", function (event) {
        const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const regAddress = /[`!@#$%^&*()_+=\[\]{};':"\\|.<>\/?~]/;
        const regSpace = /\s{2,}/g;
        const phoneNumberReg1 = new RegExp("^(\\+98|0)?9\\d{9}$");
        const phoneNumberReg2 = new RegExp("^0[1-8]{2,}[0-9]{8,}$");

        const address = $(this).find("input[name=address]");
        const job = $(this).find("input[name=job]");
        const phone = $(this).find("input[name=phone]");
        const workoffice = $(this).find("input[name=workoffice]");
        const img = $(this).find("input[name=img]");
        const province = $(this).find("select[name=province]");
        const city = $(this).find("select[name=city]");

        if (address.val() == "") {
            event.preventDefault();
            address.next(".errors").text("*فیلد آدرس نمی تواند خالی باشد!");
        } else if (
            regSpace.test(address.val()) ||
            regAddress.test(address.val())
        ) {
            event.preventDefault();
            address.next(".errors").text("*آدرس وارد شده معتبر نمی باشد!");
        } else {
            address.next(".errors").text("");
        }

        if (job.val() == "") {
            event.preventDefault();
            job.next(".errors").text("*فیلد شغل نمی تواند خالی باشد!");
        } else if (regSpace.test(job.val()) || regSpecial.test(job.val())) {
            event.preventDefault();
            job.next(".errors").text("*شغل وارد شده معتبر نمی باشد!");
        } else {
            job.next(".errors").text("");
        }

        if (phone.val() == "") {
            event.preventDefault();
            phone.next(".errors").text("*فیلد تلفن نمی تواند خالی باشد!");
        } else if (
            phone.val().length > 13 ||
            phone.val().length < 11 ||
            (!phoneNumberReg1.test(phone.val()) &&
                !phoneNumberReg2.test(phone.val()))
        ) {
            event.preventDefault();
            phone.next(".errors").text("*تلفن وارد شده معتبر نمی باشد!");
        } else {
            phone.next(".errors").text("");
        }

        if (workoffice.val() == "") {
            event.preventDefault();
            workoffice
                .next(".errors")
                .text("*فیلد محل کار نمی تواند خالی باشد!");
        } else if (
            regSpace.test(workoffice.val()) ||
            regAddress.test(workoffice.val())
        ) {
            event.preventDefault();
            workoffice
                .next(".errors")
                .text("*محل کار وارد شده معتبر نمی باشد!");
        } else {
            workoffice.next(".errors").text("");
        }

        // if (img.val() == "") {
        //     event.preventDefault();
        //     img.next(".errors").t`ext("*فیلد عکس نمی تواند خالی باشد!");
        // } else {
        //     workoffice.next(".errors").text("");
        // }

        if (province.val() == "") {
            event.preventDefault();

            province
                .parent(".custom-select")
                .parent("div")
                .next(".errors")
                .text("*فیلد استان نمی تواند خالی باشد!");
        } else {
            province
                .parent(".custom-select")
                .parent("div")
                .next(".errors")
                .text("");
        }

        if (city.val() == "") {
            event.preventDefault();
            city.parent(".custom-select")
                .parent("div")
                .next(".errors")
                .text("*فیلد شهر نمی تواند خالی باشد!");
        } else {
            city.parent(".custom-select")
                .parent("div")
                .next(".errors")
                .text("");
        }
    });

    // $("#resercherModal #researcher").on("submit", (event) => {
    //     designerValidation(event, "researcher");
    // });
});
