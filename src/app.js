import express, { urlencoded } from "express" //express
import { engine } from "express-handlebars" //layout for handlebars
import { registerPartials } from "hbs" //Exactly handlebars
import { join } from "path" // for map
// Router importing
import userRouter from "./router/userRouter.js"
import homeRouter from "./router/homeRouter.js"

const app = express() //Initialising Express app

// Views
app.engine("hbs", engine({
    layoutsDir: __dirname+"/../resources/view/layouts",
    defaultLayout: "main",
    extname: "hbs"
}))

app.set("view engine", "hbs");
app.set("views", __dirname + "/../resources/view")
registerPartials(__dirname + "../resources/view/partials");

// Disable extended URL
app.use(urlencoded({ extended: false }));

// Static files
app.use("/static", express.static(__dirname+"/../resources/static"))
app.use("/static/js", express.static(__dirname+"/react"))

// JS libs
app.use("/lib", express.static(__dirname+"/../lib"))
app.use("/lib/jquery", express.static(__dirname+"/../node_modules/jquery/dist"))

// Routers
app.use("/", homeRouter)
app.use("/users", userRouter)
// 404 (Not found) page
app.use(function (req, res, next) {
    res.status(404).send("Not Found<br><a href=\"/\">Back to main page</a>");
});

// Starting
app.listen(3000)
