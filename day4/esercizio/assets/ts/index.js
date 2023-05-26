"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchIt() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch("./Abbigliamento.json", {
            method: "GET",
        })
            .then((raw) => {
            return raw.json();
        })
            .then((response) => {
            display(response);
        });
    });
}
;
class SaldoCapo {
    constructor(capo, codprod, collezione, colore, disponibile, id, modello, prezzoivaesclusa, prezzoivainclusa, quantita, saldo) {
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
    getsaldocapo() {
        return (this.prezzoivainclusa * this.saldo) / 100;
    }
    getacquistocapo() {
        return this.prezzoivainclusa - this.getsaldocapo();
    }
}
function display(elements) {
    return elements.forEach((element) => {
        element = new SaldoCapo(element.capo, element.codprod, element.collezione, element.colore, element.disponibile, element.id, element.modello, element.prezzoivaesclusa, element.prezzoivainclusa, element.quantita, element.saldo);
        console.log(element);
        console.log('Il saldo dell\'elemento ' + element.id + ' è ' + element.getsaldocapo());
        console.log('Il prezzo scontato dell\'elemento ' + element.id + ' è ' + element.getacquistocapo());
    });
}
