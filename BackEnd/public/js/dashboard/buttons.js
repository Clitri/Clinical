$(document).ready(function () {
    const route_link = window.location.href;

    $(".dt-buttons").append(
        `<a href="${route_link}/excel" class="dt-button buttons-excel">excel</a>`
    );
    $(".dt-buttons").append(
        `<a href="${route_link}/pdf" class="dt-button buttons-pdf">pdf</a>`
    );
});
