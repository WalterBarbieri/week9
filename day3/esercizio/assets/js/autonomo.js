"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Autonomo1 = /** @class */ (function (_super) {
    __extends(Autonomo1, _super);
    function Autonomo1(_ral, _codredd) {
        if (_codredd === void 0) { _codredd = 0.4; }
        return _super.call(this, _codredd, _ral) || this;
    }
    return Autonomo1;
}(index_1.PIva));
var Autonomo2 = /** @class */ (function (_super) {
    __extends(Autonomo2, _super);
    function Autonomo2(_ral, _codredd) {
        if (_codredd === void 0) { _codredd = 0.54; }
        return _super.call(this, _codredd, _ral) || this;
    }
    return Autonomo2;
}(index_1.PIva));
var Autonomo3 = /** @class */ (function (_super) {
    __extends(Autonomo3, _super);
    function Autonomo3(_ral, _codredd) {
        if (_codredd === void 0) { _codredd = 0.62; }
        return _super.call(this, _codredd, _ral) || this;
    }
    return Autonomo3;
}(index_1.PIva));
var Autonomo4 = /** @class */ (function (_super) {
    __extends(Autonomo4, _super);
    function Autonomo4(_ral, _codredd) {
        if (_codredd === void 0) { _codredd = 0.67; }
        return _super.call(this, _codredd, _ral) || this;
    }
    return Autonomo4;
}(index_1.PIva));
var Autonomo5 = /** @class */ (function (_super) {
    __extends(Autonomo5, _super);
    function Autonomo5(_ral, _codredd) {
        if (_codredd === void 0) { _codredd = 0.78; }
        return _super.call(this, _codredd, _ral) || this;
    }
    return Autonomo5;
}(index_1.PIva));
var Autonomo6 = /** @class */ (function (_super) {
    __extends(Autonomo6, _super);
    function Autonomo6(_ral, _codredd) {
        if (_codredd === void 0) { _codredd = 0.86; }
        return _super.call(this, _codredd, _ral) || this;
    }
    return Autonomo6;
}(index_1.PIva));
var lavAut1 = new Autonomo1(50000);
console.log('Redditto Annuo Lordo: ' + lavAut1.ral + ' Tassazione totale: ' + (lavAut1.getTasseInps() + lavAut1.getTasseIrpef()) + ' Reddito Annuo Netto: ' + lavAut1.getRedditoAnnuoNetto());
var lavAut2 = new Autonomo2(60000);
console.log('Redditto Annuo Lordo: ' + lavAut2.ral + ' Tassazione totale: ' + (lavAut2.getTasseInps() + lavAut2.getTasseIrpef()) + ' Reddito Annuo Netto: ' + lavAut2.getRedditoAnnuoNetto());
var lavAut3 = new Autonomo3(70000);
console.log('Redditto Annuo Lordo: ' + lavAut3.ral + ' Tassazione totale: ' + (lavAut3.getTasseInps() + lavAut3.getTasseIrpef()) + ' Reddito Annuo Netto: ' + lavAut3.getRedditoAnnuoNetto());
var lavAut4 = new Autonomo4(80000);
console.log('Redditto Annuo Lordo: ' + lavAut4.ral + ' Tassazione totale: ' + (lavAut4.getTasseInps() + lavAut4.getTasseIrpef()) + ' Reddito Annuo Netto: ' + lavAut4.getRedditoAnnuoNetto());
var lavAut5 = new Autonomo5(90000);
console.log('Redditto Annuo Lordo: ' + lavAut5.ral + ' Tassazione totale: ' + (lavAut5.getTasseInps() + lavAut5.getTasseIrpef()) + ' Reddito Annuo Netto: ' + lavAut5.getRedditoAnnuoNetto());
var lavAut6 = new Autonomo6(100000);
console.log('Redditto Annuo Lordo: ' + lavAut6.ral + ' Tassazione totale: ' + (lavAut6.getTasseInps() + lavAut6.getTasseIrpef()) + ' Reddito Annuo Netto: ' + lavAut6.getRedditoAnnuoNetto());
