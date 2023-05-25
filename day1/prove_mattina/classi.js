"use strict";
class Studente {
    constructor(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    getStudent() {
        return `${this.nome} ${this.cognome}`;
    }
}
let newStudent = new Studente('Mario', 'Rossi');
console.log(newStudent);
