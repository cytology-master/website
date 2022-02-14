export const singup = function(request, response) {
    response.render("singup.hbs", {
        "other_styles": ["form"],
        "use_awesome": true,
        "other_scripts": ["form"]
    })
}