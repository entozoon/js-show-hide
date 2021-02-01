"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsShowHide = void 0;
var JsShowHide = (function () {
    function JsShowHide(props) {
        var config = Object.assign(props || {}, {
            hiders: "data-js-hide",
            showers: "data-js-show",
        });
        var hiders = document.querySelectorAll("[" + config.hiders + "]");
        if (hiders) {
            hiders.forEach(function (d) {
                var targets = document.querySelectorAll(d.getAttribute(config.hiders));
                if (targets)
                    targets.forEach(function (t) { return t.setAttribute("hidden", ""); });
            });
        }
        var showers = document.querySelectorAll("[" + config.showers + "]");
        if (showers) {
            showers.forEach(function (d) {
                var targets = document.querySelectorAll(d.getAttribute(config.hiders));
                if (targets)
                    targets.forEach(function (t) { return t.removeAttribute("hidden"); });
            });
        }
    }
    return JsShowHide;
}());
exports.JsShowHide = JsShowHide;
