$(function() {
    $(".ui-menu").hide();
    $("li.menu").on("click", function() {
        $(this).next(".ui-menu").show().menu();
    });
    $(".ui-menu").on("blur", function() {
        $(this).hide();
    });
});