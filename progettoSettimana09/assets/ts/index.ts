interface MyInterface {
    credito: number;
    numeroChiamate: number;
    ricarica(credit: number): void;
    chiamata(): void;
    numero404(): void;
    getNumeroChiamate(): void;
    azzeraChiamate(): void;
}

class Primo implements MyInterface {
    constructor(public credito: number, public numeroChiamate: number){}
    public ricarica(credit: number): number {
        return this.credito = this.credito + credit;
    }
    public chiamata(): number {
        this.numeroChiamate = this.numeroChiamate +1;
        
        return this.credito = this.credito - (Math.ceil(Math.random() * 29)) * 0.2;
    }
    public numero404(): number {
        return this.credito;
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): number {
        return this.numeroChiamate = 0;
    }
}

class Secondo implements MyInterface {
    constructor(public credito: number, public numeroChiamate: number){}
    public ricarica(credit: number): number {
        return this.credito = this.credito + credit;
    }
    public chiamata(): number {
        this.numeroChiamate = this.numeroChiamate +1;
        
        return this.credito = this.credito - (Math.ceil(Math.random() * 29)) * 0.2;
    }
    public numero404(): number {
        return this.credito;
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): number {
        return this.numeroChiamate = 0;
    }
}

class Terzo implements MyInterface {
    constructor(public credito: number, public numeroChiamate: number){}
    public ricarica(credit: number): number {
        return this.credito = this.credito + credit;
    }
    public chiamata(): number {
        this.numeroChiamate = this.numeroChiamate +1;
        
        return this.credito = this.credito - (Math.ceil(Math.random() * 29)) * 0.2;
    }
    public numero404(): number {
        return this.credito;
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): number {
        return this.numeroChiamate = 0;
    }
}

let utente = new Primo (5, 5);
utente.ricarica(50);
utente.chiamata();
utente.ricarica(20)
utente.chiamata();
console.log('Utente 1');
console.log('Credito Residuo: ' + utente.numero404());
console.log('Numero Chiamate Effettuate: ' + utente.getNumeroChiamate());
console.log('Chiamate Azzerate: ' + utente.azzeraChiamate());
console.log('');


let utente2 = new Secondo (0, 0);
utente2.ricarica(30);
utente2.chiamata();
utente2.ricarica(15)
utente2.chiamata();
console.log('Utente 2');
console.log('Credito Residuo: ' + utente2.numero404());
console.log('Numero Chiamate Effettuate: ' + utente2.getNumeroChiamate());
console.log('Chiamate Azzerate: ' + utente2.azzeraChiamate());
console.log('');


let utente3 = new Terzo (0, 0);
utente3.ricarica(150);
utente3.chiamata();
utente3.ricarica(10)
utente3.chiamata();
console.log('Utente 3');
console.log('Credito Residuo: ' + utente3.numero404());
console.log('Numero Chiamate Effettuate: ' + utente3.getNumeroChiamate());
console.log('Chiamate Azzerate: ' + utente3.azzeraChiamate());
console.log('');



