"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PIva = void 0;
class PIva {
    constructor(_codredd, _ral) {
        this.codredd = _codredd;
        this.ral = _ral;
        this.tasseInps = 0.2623;
        this.tasseIrpef = 0.15;
    }
    getUtileTasse() {
        return (this.ral * this.codredd);
    }
    getTasseInps() {
        return (this.getUtileTasse() * this.tasseInps);
    }
    getTasseIrpef() {
        return (this.getUtileTasse() * this.tasseIrpef);
    }
    getRedditoAnnuoNetto() {
        return (this.ral - (this.getTasseIrpef() + this.getTasseInps()));
    }
}
exports.PIva = PIva;
