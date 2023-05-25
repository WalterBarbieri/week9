"use strict";
const button = document.getElementById('button');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
function checkAge(name, surname, year) {
    let currentAge = 2023 - year;
    result2.innerHTML = `Hi ${name} ${surname}, you are ${currentAge} years old.`;
    if (currentAge >= 18) {
        return result3.innerHTML = 'Sei maggiorenne! Puoi entrare in discoteca.';
    }
    else {
        return result3.innerHTML = 'Sei minorenne! Mi dispiace ma non puoi entrare in discoteca.';
    }
}
button.onclick = function () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const year = document.getElementById('year').value;
    checkAge(String(name), String(surname), Number(year));
};
