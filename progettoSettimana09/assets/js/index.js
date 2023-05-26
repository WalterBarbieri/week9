"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Primo = /** @class */ (function () {
    function Primo(credito, numeroChiamate) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    Primo.prototype.ricarica = function (credit) {
        return this.credito = this.credito + credit;
    };
    Primo.prototype.chiamata = function () {
        this.numeroChiamate = this.numeroChiamate + 1;
        return this.credito = this.credito - (Math.ceil(Math.random() * 29)) * 0.2;
    };
    Primo.prototype.numero404 = function () {
        return this.credito;
    };
    Primo.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Primo.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return Primo;
}());
var Secondo = /** @class */ (function () {
    function Secondo(credito, numeroChiamate) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    Secondo.prototype.ricarica = function (credit) {
        return this.credito = this.credito + credit;
    };
    Secondo.prototype.chiamata = function () {
        this.numeroChiamate = this.numeroChiamate + 1;
        return this.credito = this.credito - (Math.ceil(Math.random() * 29)) * 0.2;
    };
    Secondo.prototype.numero404 = function () {
        return this.credito;
    };
    Secondo.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Secondo.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return Secondo;
}());
var Terzo = /** @class */ (function () {
    function Terzo(credito, numeroChiamate) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    Terzo.prototype.ricarica = function (credit) {
        return this.credito = this.credito + credit;
    };
    Terzo.prototype.chiamata = function () {
        this.numeroChiamate = this.numeroChiamate + 1;
        return this.credito = this.credito - (Math.ceil(Math.random() * 29)) * 0.2;
    };
    Terzo.prototype.numero404 = function () {
        return this.credito;
    };
    Terzo.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Terzo.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return Terzo;
}());
var utente = new Primo(5, 5);
utente.ricarica(50);
utente.chiamata();
utente.ricarica(20);
utente.chiamata();
console.log('Utente 1');
console.log('Credito Residuo: ' + utente.numero404());
console.log('Numero Chiamate Effettuate: ' + utente.getNumeroChiamate());
console.log('Chiamate Azzerate: ' + utente.azzeraChiamate());
console.log('');
var utente2 = new Secondo(0, 0);
utente2.ricarica(30);
utente2.chiamata();
utente2.ricarica(15);
utente2.chiamata();
console.log('Utente 2');
console.log('Credito Residuo: ' + utente2.numero404());
console.log('Numero Chiamate Effettuate: ' + utente2.getNumeroChiamate());
console.log('Chiamate Azzerate: ' + utente2.azzeraChiamate());
console.log('');
var utente3 = new Terzo(0, 0);
utente3.ricarica(150);
utente3.chiamata();
utente3.ricarica(10);
utente3.chiamata();
console.log('Utente 3');
console.log('Credito Residuo: ' + utente3.numero404());
console.log('Numero Chiamate Effettuate: ' + utente3.getNumeroChiamate());
console.log('Chiamate Azzerate: ' + utente3.azzeraChiamate());
console.log('');
