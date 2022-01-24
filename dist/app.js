"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _express = _interopRequireWildcard(require("express"));

var _expressHandlebars = require("express-handlebars");

var _hbs = require("hbs");

var _homeRouter = _interopRequireDefault(require("./router/homeRouter.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])();
app.engine("hbs", (0, _expressHandlebars.engine)({
  layoutsDir: __dirname + "/../resources/view/layouts",
  defaultLayout: "main",
  extname: "hbs"
}));
app.set("view engine", "hbs");
app.set("views", __dirname + "/../resources/view");
(0, _hbs.registerPartials)(__dirname + "../resources/view/partials");
app.use((0, _express.urlencoded)({
  extended: false
}));
app.use("/static", _express["default"]["static"](__dirname + "/../resources/static"));
app.use("/static/js", _express["default"]["static"](__dirname + "/react"));
app.use("/", _homeRouter["default"]);
app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});
app.listen(3000);