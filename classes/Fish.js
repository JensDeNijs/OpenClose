"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Object.defineProperty(Fish.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fish.prototype, "type", {
        get: function () {
            return 'fish';
        },
        enumerable: false,
        configurable: true
    });
    Fish.prototype.makeSound = function () {
        return 'Blub blub';
    };
    return Fish;
}());
exports.Fish = Fish;
