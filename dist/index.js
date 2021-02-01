"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = (function () {
    function default_1(props) {
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
    return default_1;
}());
exports.default = default_1;
