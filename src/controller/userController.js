export const singup = function(request, response) {
    response.render("singup.hbs", {
        "other_styles": ["form"],
        "use_menu": false,
        "jquery": true,
        "jquery-ui": false
    })
}