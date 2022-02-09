export const index = function (request, response) { // Index page
    response.render("index.hbs", { // The sturcure of the params is
        other_styles: ["index"], // Styles except main we need (whithout path end extension)
        use_menu: true, // Will we use menu,
        jquery: true, // JQuery,
        "jquery-ui": false, // Or JQuery UI?
        other_js: [] // Special JS files we need
    })
}
export const about = function (request, response) {
    response.render("aboutus.hbs", {
        "other_styles": ["about"],
        "use_menu": true,
        "jquery": true,
        "jquery-ui": false
        // Here are no other_js property because it doesn't matter to use them on this page
    })
}
