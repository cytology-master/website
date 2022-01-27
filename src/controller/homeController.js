export const index = function (request, response) {
    response.render("index.hbs", {
        "other_styles": ["index"],
        "use_menu": true,
        "jquery": true,
        "jquery-ui": true
    })
}
export const about = function (request, response) {
    response.render("aboutus.hbs", {
        "other_styles": ["about"],
        "use_menu": true,
        "jquery": true,
        "jquery-ui": true
    })
}