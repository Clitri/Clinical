$(document).ready(function() {
    $(".navbar-toggle").click(function() {
        if ($('.navbar-collapse').hasClass('open-collaose')) {
            $('.navbar-collapse').removeClass('open-collaose')
            $('.navbar-collapse').addClass('close-collaose')
        } else {
            $('.navbar-collapse').addClass('open-collaose');
            $('.navbar-collapse').removeClass('close-collaose')
        }

    });
    $("section").click(function() {
        $('.navbar-collapse').removeClass('open-collaose')
    });
})