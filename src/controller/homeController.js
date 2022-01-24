export const index = function (request, response) {
    response.render("index.hbs", {
        "other_styles": ["index", "menu"]
    })
}