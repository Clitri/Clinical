$(document).ready(function () {
    customSelect("select.form-select:not([multiple])");
});

// ============= select custom ==========

function customSelect(elemet) {
    const selects = $(elemet);

    selects.each((index, item) => {
        const selectBox = $(item)
            .parent()
            .append(`<div class="custom-select"></div>`)
            .find(".custom-select");
        const thisSelect = $(item).detach();
        selectBox.append(thisSelect);
        const dropdown = selectBox
            .append(`<ul class="custom-dropdown"></ul>`)
            .find(".custom-dropdown");
        dropdown.slideUp();
        const options = $(item).find("option");
        options.each((index, item) => {
            if ($(item).prop("selected")) {
                dropdown.append(
                    `<li data-val="${item.value}" class="selected-option">${$(
                        item
                    ).text()}</li>`
                );
            } else {
                dropdown.append(
                    `<li data-val="${item.value}">${$(item).text()}</li>`
                );
            }
        });


        $(item).on("blur", function (event) {
            event.preventDefault();
            console.log(event);
            dropdown.slideUp();
        });

        dropdown
            .find("li")
            .on("mousedown", function (event) {
                event.stopPropagation();
                event.preventDefault();
                thisSelect.val($(event.target).data("val"));
                thisSelect.change();
            })
            .on("click", function (event) {
                event.stopPropagation();
                event.preventDefault();
                thisSelect.blur();
            });

        $(item)
            .on("mousedown", function (event) {
                event.preventDefault();
                event.stopPropagation();
                $(this).focus();
                dropdown.slideToggle();
            })
            .on("keydown", function (event) {
                if (event.key == "Enter" || event.key == " ") {
                    event.stopPropagation();
                    event.preventDefault();
                    $(this).focus();
                    dropdown.slideToggle();
                }
            })
            .on("change", function () {
                dropdown.find("li").removeClass("selected-option");
                options.each((index, item) => {
                    if ($(item).prop("selected")) {
                        dropdown
                            .find("li")
                            [index].classList.add("selected-option");
                    }
                });
            });
    });
}
