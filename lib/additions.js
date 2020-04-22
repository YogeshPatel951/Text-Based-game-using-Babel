"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var INPUT_OPTIONS = exports.INPUT_OPTIONS = Symbol("input_options");

var options = exports.options = {
    _intro: "You Have Commands Like ",
    options: ["left", "right", "down", "up", "poke"],
    outputOptions: function outputOptions(WriteFn) {
        var _this = this;

        this.options.forEach(function (f) {
            return WriteFn(_this._intro + f);
        });
    }
};
//# sourceMappingURL=additions.js.map