var button = document.getElementById('button');
var result2 = document.getElementById('result2');
var result3 = document.getElementById('result3');
function checkAge(name, surname, year) {
    var currentAge = 2023 - year;
    result2.innerHTML = "Hi ".concat(name, " ").concat(surname, ", you are ").concat(currentAge, " years old.");
    if (currentAge >= 18) {
        return result3.innerHTML = 'Sei maggiorenne! Puoi entrare in discoteca.';
    }
    else {
        return result3.innerHTML = 'Sei minorenne! Mi dispiace ma non puoi entrare in discoteca.';
    }
}
button.onclick = function () {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var year = document.getElementById('year').value;
    checkAge(String(name), String(surname), Number(year));
};
