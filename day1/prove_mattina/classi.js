var Studente = /** @class */ (function () {
    function Studente(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    Studente.prototype.getStudent = function () {
        return "".concat(this.nome, " ").concat(this.cognome);
    };
    return Studente;
}());
var newStudent = new Studente('Mario', 'Rossi');
console.log(newStudent);
