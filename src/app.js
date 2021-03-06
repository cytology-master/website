import express, { urlencoded } from "express" //express
import { engine } from "express-handlebars" //layout for handlebars
import { registerPartials } from "hbs" //Exactly handlebars
import session from "express-session" // Sessions
import params from "./params"

// Router importing
import homeRouter from "./router/homeRouter.js" 
import userRouter from "./router/userRouter.js"
import lessonRouter from "./router/lessonRouter.js"
import serverRouter from "./router/serverRouter.js"
import mongoose from "mongoose"

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

// Sessions
app.use(session({
    secret: "chafka"
}))

// Static files
app.use("/static", express.static(__dirname+"/../resources/static"))

// JS libs
app.use("/lib", express.static(__dirname+"/../lib"))
app.use("/lib/jquery", express.static(__dirname+"/../node_modules/jquery/dist"))

// Routerss
app.use("/lsn", lessonRouter)
app.use("/users", userRouter)
app.use("/srv", serverRouter)
app.use("/", homeRouter)

// 404 (Not found) page
app.use(function (req, res, next) {
    res.status(404).send("Not Found<br><a href=\"/\">Back to main page</a>");
});

// Starting & connecting to MongoDB
mongoose.connect(params.mongodb,
{ useUnifiedTopology: true }, function(err){
    if(err) return console.log(err);
    app.listen(params.port, params.host, function(){
        console.log("Waiting for connection...");
    });
});

