class Studente {
    nome: string;
    cognome: string;
    constructor(_nome: string, _cognome: string) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    getStudent(): string {
        return `${this.nome} ${this.cognome}`
    }
}

let newStudent = new Studente('Mario', 'Rossi');

console.log(newStudent);
