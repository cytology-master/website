export const lesson = function (request, response) {
    response.render("lesson.hbs", {
        "other_styles": ["lesson"],
        "use_menu": true,
        // Here are no other_js property because it doesn't matter to use them on this page
    })
}