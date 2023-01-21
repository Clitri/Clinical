$(document).ready(function () {
    $(".ichat").click(function () {
        if ($(".chatbox").css("left") == "-500px") {
            $(".chatbox").css("left", "0");
            $(".chatbox-background").css("display", "block");
        } else {
            $(".chatbox").css("left", "-500px");
            $(".chatbox-background").css("display", "none");
        }
    });

    $(".chatbox-background").on("click", function () {
        $(".chatbox-background").css("display", "none");
        $(".chatbox").css("left", "-500px");
    });
});
