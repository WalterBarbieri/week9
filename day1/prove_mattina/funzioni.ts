function persona(nome: string, cognome: string, eta?: number): string{
    if (eta) {
        return `Signor ${nome} ${cognome} di anni ${eta}`
    } else {
        return  `Signor ${nome} ${cognome}`
    }
}
console.log(persona('Dario', 'DelGiudice', 55));
console.log(persona('Walter', 'Barbieri'));

const mioCorso = (nomeCorso: string, annoCorso: number): string =>{
    return `Corso ${nomeCorso} dell'anno ${annoCorso}`;
}

console.log(mioCorso('FS0223', 2023));

const stati: {
    nome: string,
    capitale: string,
    descrizione: any
} = {
    nome: 'Italia',
    capitale: 'Roma',
    descrizione() {
        return `la capitale di ${this.nome} è ${this.capitale}`
    }
}
console.log(stati.descrizione());

const divisione = (val1: number, val2:number):number | void => {
    let risultato = val1/val2;
    try {
        if(val2 === 0) throw new Error('Errore! Divisione per 0');
        if(risultato != Infinity){
            console.log(risultato);
            
        };
    } catch(err: any) {
        console.error(err.message);
        
    } finally { 
        console.log('La gestione degli errori è stata eseguita');
        
    }

}



let risultato1 = divisione(4,0);
let risultato2 = divisione(4,1);
