"use strict";
const calculateButton = document.getElementById("calculateButton");
class PIva {
    constructor(_ral, _codredd) {
        this.codredd = _codredd;
        this.ral = _ral;
        this.tasseInps = 0.2623;
        this.tasseIrpef = 0.15;
    }
    getUtileTasse() {
        return this.ral * this.codredd;
    }
    getTasseInps() {
        return this.getUtileTasse() * this.tasseInps;
    }
    getTasseIrpef() {
        return this.getUtileTasse() * this.tasseIrpef;
    }
    getRedditoAnnuoNetto() {
        return this.ral - (this.getTasseIrpef() + this.getTasseInps());
    }
}
calculateButton.onclick = function () {
    const ral = document.getElementById("ral");
    let parsedRal = parseFloat(ral.value);
    if (isNaN(parsedRal)) {
        parsedRal = 0;
    }
    console.log(parsedRal);
    const codredd = document.getElementById("codredd");
    let parsedCodredd = parseFloat(codredd.value);
    if (isNaN(parsedCodredd)) {
        parsedCodredd = 0;
    }
    console.log(parsedCodredd);
    const taxation = document.getElementById("taxation");
    const netIncome = document.getElementById("netIncome");
    const lavoratore = new PIva(parsedRal, parsedCodredd);
    taxation.value = (lavoratore.getTasseInps() + lavoratore.getTasseIrpef());
    netIncome.value = lavoratore.getRedditoAnnuoNetto();
};
