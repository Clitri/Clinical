$(document).ready(function() {

    $("#file").on("change", function(e) {

        var files = $(this)[0].files;
        if (files.length >= 2) {

            $("#label-span").text(files.length + "فایل انتخاب شد")

        } else {
            var filename = e.target.value.split('\\').pop();
            $("#label-span").text(filename)
        }

    })

})