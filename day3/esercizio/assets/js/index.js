"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PIva = void 0;
var PIva = /** @class */ (function () {
    function PIva(_codredd, _ral) {
        this.codredd = _codredd;
        this.ral = _ral;
        this.tasseInps = 0.2623;
        this.tasseIrpef = 0.15;
    }
    PIva.prototype.getUtileTasse = function () {
        return (this.ral * this.codredd);
    };
    PIva.prototype.getTasseInps = function () {
        return (this.getUtileTasse() * this.tasseInps);
    };
    PIva.prototype.getTasseIrpef = function () {
        return (this.getUtileTasse() * this.tasseIrpef);
    };
    PIva.prototype.getRedditoAnnuoNetto = function () {
        return (this.ral - (this.getTasseIrpef() + this.getTasseInps()));
    };
    return PIva;
}());
exports.PIva = PIva;
