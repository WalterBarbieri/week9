//Intersection type

type Admin = {
    nome: string;
    privilegi: string[]
}

type Impiegato = {
    matricola: number;
    startDate: Date
}

type SuperAdmin = Admin & Impiegato; //intersection type

let direttore: Admin = {
    nome: 'Mario Rossi',
    privilegi: ['Gestione Ufficio', 'gestione ferie']
}
console.log(direttore);

let funzionario: Impiegato = {
    matricola: 123456,
    startDate: new Date('2023-01-01')
}
console.log(funzionario);

const amministratore: SuperAdmin = {
    nome: 'Aldo Bianchi',
    privilegi: ['Gestione bilanci', 'Investimenti Aziendali', 'Direzione CDA'],
    matricola: 101010,
    startDate: new Date('1900-01-01') 
}
console.log(amministratore);

