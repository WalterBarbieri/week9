window.onload = function () {
    fetch("./Abbigliamento.json", {
        method: "GET",
    })
        .then(function (raw) {
        return raw.json();
    })
        .then(function (response) {
        display(response);
    });
};
var SaldoCapo = /** @class */ (function () {
    function SaldoCapo(capo, codprod, collezione, colore, disponibile, id, modello, prezzoivaesclusa, prezzoivainclusa, quantita, saldo) {
        this.capo = capo;
        this.codprod = codprod;
        this.collezione = collezione;
        this.colore = colore;
        this.disponibile = disponibile;
        this.id = id;
        this.modello = modello;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.quantita = quantita;
        this.saldo = saldo;
    }
    SaldoCapo.prototype.getsaldocapo = function () {
        return (this.prezzoivainclusa * this.saldo) / 100;
    };
    SaldoCapo.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return SaldoCapo;
}());
function display(elements) {
    return elements.forEach(function (element) {
        element = new SaldoCapo(element.capo, element.codprod, element.collezione, element.colore, element.disponibile, element.id, element.modello, element.prezzoivaesclusa, element.prezzoivainclusa, element.quantita, element.saldo);
        console.log(element);
        console.log('Il saldo dell\'elemento ' + element.id + ' è ' + element.getsaldocapo());
        console.log('Il prezzo scontato dell\'elemento ' + element.id + ' è ' + element.getacquistocapo());
    });
}
