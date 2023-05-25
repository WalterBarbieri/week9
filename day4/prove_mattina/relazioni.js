"use strict";
class Contatti {
    constructor(_tel, _email) {
        this.tel = _tel;
        this.email = _email;
    }
}
class RigheFat {
    constructor(_codArt, _descrArt, _qty, _unitPrice) {
        this.codArt = _codArt;
        this.descrArt = _descrArt;
        this.qty = _qty;
        this.unitPrice = _unitPrice;
    }
}
class TestFat {
    constructor(_ragSoc, _indirizzo, _pIva, _contatti, _righeFat, _totPrice) {
        this.ragSoc = _ragSoc;
        this.indirizzo = _indirizzo;
        this.pIva = _pIva;
        this.contatti = _contatti;
        this.righeFat = _righeFat;
        this.totPrice = _totPrice;
    }
}
let fattura1 = new TestFat("Azienda XYZ", "via Le Mani dal Naso 1", "01234567890123456", [
    {
        tel: "0587987654",
        email: "moltobene@npm.it",
    },
    {
        tel: "0587123456",
        email: "moltomale@npm.it",
    },
], [
    {
        codArt: "0123456789",
        descrArt: "Fazzoletti",
        qty: 10,
        unitPrice: 2,
    },
    {
        codArt: "9876543210",
        descrArt: "Sapone",
        qty: 2,
        unitPrice: 10,
    }
], 40);
console.log(fattura1);
