var romanToInt = function(s) {
    let array = s.split('');
    let romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        let currentValue = romanValues[array[i]];
        let nextValue = romanValues[array[i + 1]];
        
        if (nextValue && currentValue < nextValue) {
            sum += nextValue - currentValue;
            i++;
        } else {
            sum += currentValue;
        }
    }
    
    console.log(sum);
};

romanToInt('MCMXCIX');
romanToInt('DCCC');