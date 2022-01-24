"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _homeController = require("../../dist/controller/homeController");

var router = (0, _express.Router)();
router.get("/", _homeController.index);
var _default = router;
exports["default"] = _default;