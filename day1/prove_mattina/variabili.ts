console.log('hello world!');

let verifica = 5<3? true : false;
console.log(verifica);

for (let i=0; i<5; i++) {
    console.log(i);
    
}

let nome: string = 'aroundtheworld';
console.log(nome);


let mioArray: string[] = ['Pippo', 'Pluto', 'Paperino'];
mioArray.push('Qui');

let mioArray2: any[] = ['Pippo', 1, false, 'Pluto'];
mioArray2.push(3);
mioArray2.push(true);
mioArray2.push('Paperino');
console.log(mioArray);
console.log(mioArray2);

let arrayMisto: (string | number)[] = ['Pippo', 5];
console.log(arrayMisto);

arrayMisto.push('Pluto');
arrayMisto.push(4);
console.log(arrayMisto);

let tupla: [string, number, string] = ['Pippo', 5, 'Paperino'];
console.log(tupla);

tupla[0] = 'Pluto'
tupla[1] = 24
console.log(tupla);


 
