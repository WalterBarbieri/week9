function persona(nome, cognome, eta) {
    if (eta) {
        return "Signor ".concat(nome, " ").concat(cognome, " di anni ").concat(eta);
    }
    else {
        return "Signor ".concat(nome, " ").concat(cognome);
    }
}
console.log(persona('Dario', 'DelGiudice', 55));
console.log(persona('Walter', 'Barbieri'));
var mioCorso = function (nomeCorso, annoCorso) {
    return "Corso ".concat(nomeCorso, " dell'anno ").concat(annoCorso);
};
console.log(mioCorso('FS0223', 2023));
var stati = {
    nome: 'Italia',
    capitale: 'Roma',
    descrizione: function () {
        return "la capitale di ".concat(this.nome, " \u00E8 ").concat(this.capitale);
    }
};
console.log(stati.descrizione());
var divisione = function (val1, val2) {
    var risultato = val1 / val2;
    try {
        if (val2 === 0)
            throw new Error('Errore! Divisione per 0');
        if (risultato != Infinity) {
            console.log(risultato);
        }
        ;
    }
    catch (err) {
        console.error(err.message);
    }
    finally {
        console.log('La gestione degli errori è stata eseguita');
    }
};
var risultato1 = divisione(4, 0);
var risultato2 = divisione(4, 1);
