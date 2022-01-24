"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = void 0;

var index = function index(request, response) {
  response.render("index.hbs", {
    "other_styles": ["index", "menu"]
  });
};

exports.index = index;