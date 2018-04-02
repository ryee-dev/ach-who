// 'Navigation' Functions

$("#condition-butt").click(function () {
    $("#search-by").hide();
    $("#doctor-form").hide();
    $("#condition-form").fadeToggle('slow');
});

$("#doctor-butt").click(function () {
    $("#search-by").hide();
    $("#condition-form").hide();
    $("#doctor-form").fadeIn('slow');
});

$("#home-butt1").click(function () {
    $("#resultsSuccess").empty();
    $("#resultsFail").empty();
    $("#search-by").fadeIn('slow');
    $("#condition-form").hide();
});

$("#home-butt2").click(function () {
    $("#resultsFail").empty();
    $("#resultsSuccess").empty();
    $("#search-by").fadeIn('slow');
    $("#doctor-form").hide();
});