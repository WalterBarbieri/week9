const button: any = document.getElementById('button');
const result2: any = document.getElementById('result2');
const result3: any = document.getElementById('result3');

function checkAge(name: string, surname: string ,year: number) {
    let currentAge = 2023 - year;
    result2.innerHTML = `Hi ${name} ${surname}, you are ${currentAge} years old.`
    if (currentAge >= 18) {
        return result3.innerHTML = 'Sei maggiorenne! Puoi entrare in discoteca.';
    } else {
        return result3.innerHTML = 'Sei minorenne! Mi dispiace ma non puoi entrare in discoteca.';
    }
}

button.onclick =  function() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const surname = (document.getElementById('surname') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    checkAge(String(name), String(surname), Number(year))
}