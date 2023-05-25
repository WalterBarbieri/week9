"use strict";
//Intersection type
let direttore = {
    nome: 'Mario Rossi',
    privilegi: ['Gestione Ufficio', 'gestione ferie']
};
console.log(direttore);
let funzionario = {
    matricola: 123456,
    startDate: new Date('2023-01-01')
};
console.log(funzionario);
const amministratore = {
    nome: 'Aldo Bianchi',
    privilegi: ['Gestione bilanci', 'Investimenti Aziendali', 'Direzione CDA'],
    matricola: 101010,
    startDate: new Date('1900-01-01')
};
console.log(amministratore);
