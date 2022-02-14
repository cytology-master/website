export const singup = function(request, response) {
    response.render("form.hbs", {
        "other_styles": ["form"],
        "jquery": true,
        "use_awesome": true,
        "other_scripts": ["form"]
    })
}