var EpicPhone = /** @class */ (function () {
    function EpicPhone(credito, numeroChiamate) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    EpicPhone.prototype.ricarica = function (credit) {
        return (this.credito = this.credito + credit);
    };
    EpicPhone.prototype.chiamata2 = function (minuti) {
        this.numeroChiamate = this.numeroChiamate + 1;
        return (this.credito = this.credito - (minuti * 0.2));
    };
    EpicPhone.prototype.numero404 = function () {
        return this.credito;
    };
    EpicPhone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    EpicPhone.prototype.azzeraChiamate = function () {
        return (this.numeroChiamate = 0);
    };
    return EpicPhone;
}());
var randomButton = document.getElementById("randomButton");
var resetButton = document.getElementById("resetButton");
var updateButton = document.getElementById("updateButton");
var newCredit = document.getElementById("newCredit");
var call = document.getElementById("call");
var myCredit = document.getElementById("myCredit");
var numChiamate = document.getElementById("numChiamate");
randomButton.onclick = function () {
    var randomNumber = Math.ceil(Math.random() * 29);
    call.value = randomNumber.toString();
};
resetButton.onclick = function () {
    numChiamate.value = "0";
};
updateButton.onclick = function () {
    var parsedNewCredit = parseFloat(newCredit.value);
    if (isNaN(parsedNewCredit)) {
        parsedNewCredit = 0;
    }
    var parsedCall = parseFloat(call.value);
    if (isNaN(parsedCall)) {
        parsedCall = 0;
    }
    var parsedMyCredit = parseFloat(myCredit.value);
    var parsedNumChiamate = parseFloat(numChiamate.value);
    var user = new EpicPhone(parsedMyCredit, parsedNumChiamate);
    user.ricarica(parsedNewCredit);
    user.chiamata2(parsedCall);
    myCredit.value = (user.numero404()).toString();
    numChiamate.value = (user.getNumeroChiamate()).toString();
    newCredit.value = '';
    call.value = '';
};
