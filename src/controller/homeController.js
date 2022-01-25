export const index = function (request, response) {
    response.render("index.hbs", {
        "other_styles": ["index", "menu"]
    })
}
export const about = function (request, response) {
    response.render("aboutus.hbs", {
        "other_styles": ["about", "menu"]
    })
}