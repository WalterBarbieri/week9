var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var calculateButton = document.getElementById("calculateButton");
var PIva = /** @class */ (function () {
    function PIva(_ral, _codredd) {
        this.codredd = _codredd;
        this.ral = _ral;
        this.tasseInps = 0.2623;
        this.tasseIrpef = 0.15;
    }
    PIva.prototype.getUtileTasse = function () {
        return this.ral * this.codredd;
    };
    PIva.prototype.getTasseInps = function () {
        return this.getUtileTasse() * this.tasseInps;
    };
    PIva.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.tasseIrpef;
    };
    PIva.prototype.getRedditoAnnuoNetto = function () {
        return this.ral - (this.getTasseIrpef() + this.getTasseInps());
    };
    return PIva;
}());
var Autonomo = /** @class */ (function (_super) {
    __extends(Autonomo, _super);
    function Autonomo(_ral, _codredd) {
        return _super.call(this, _ral, _codredd) || this;
    }
    return Autonomo;
}(PIva));
calculateButton.onclick = function () {
    var ral = document.getElementById("ral");
    var parsedRal = parseFloat(ral.value);
    if (isNaN(parsedRal)) {
        parsedRal = 0;
    }
    console.log(parsedRal);
    var codredd = document.getElementById("codredd");
    var parsedCodredd = parseFloat(codredd.value);
    if (isNaN(parsedCodredd)) {
        parsedCodredd = 0;
    }
    console.log(parsedCodredd);
    var taxation = document.getElementById("taxation");
    var netIncome = document.getElementById("netIncome");
    var lavoratore = new Autonomo(parsedRal, parsedCodredd);
    taxation.value = (lavoratore.getTasseInps() + lavoratore.getTasseIrpef());
    netIncome.value = lavoratore.getRedditoAnnuoNetto();
};
