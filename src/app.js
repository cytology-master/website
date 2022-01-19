import express, { urlencoded } from "express"
import { engine } from "express-handlebars"
import { registerPartials } from "hbs"
import homeRouter from "./router/homeRouter.js"

const app = express()

app.engine("hbs", engine({
    layoutsDir: __dirname+"/../../resources/view/layouts",
    defaultLayout: "main",
    extname: "hbs"
}))

app.set("view engine", "hbs");
app.set("views", __dirname + "/../../resources/view")
registerPartials(__dirname + "../../resources/view/partials");

app.use(urlencoded({ extended: false }));

app.use("/static", express.static(__dirname+"/../../resources/static"))
app.use("/static/js", express.static(__dirname+"/js"))

app.use("/", homeRouter)

app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});

app.listen(3000)