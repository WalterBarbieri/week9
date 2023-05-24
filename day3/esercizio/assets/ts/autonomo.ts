import { PIva } from "./index";

class Autonomo1 extends PIva {
    constructor(_ral: number, _codredd:number = 0.4) {
        super(_codredd, _ral); 
    }   
}

class Autonomo2 extends PIva {
    constructor(_ral: number, _codredd:number = 0.54) {
        super(_codredd, _ral); 
    }   
}

class Autonomo3 extends PIva {
    constructor(_ral: number, _codredd:number = 0.62) {
        super(_codredd, _ral); 
    }   
}

class Autonomo4 extends PIva {
    constructor(_ral: number, _codredd:number = 0.67) {
        super(_codredd, _ral); 
    }   
}

class Autonomo5 extends PIva {
    constructor(_ral: number, _codredd:number = 0.78) {
        super(_codredd, _ral); 
    }   
}

class Autonomo6 extends PIva {
    constructor(_ral: number, _codredd:number = 0.86) {
        super(_codredd, _ral); 
    }   
}

let lavAut1 = new Autonomo1(50000);
console.log('Redditto Annuo Lordo: '+ lavAut1.ral + ' Tassazione totale: ' + (lavAut1.getTasseInps() + lavAut1.getTasseIrpef()) + ' Reddito Annuo Netto: ' + lavAut1.getRedditoAnnuoNetto());

let lavAut2 = new Autonomo2(60000);
console.log('Redditto Annuo Lordo: '+ lavAut2.ral + ' Tassazione totale: ' + (lavAut2.getTasseInps() + lavAut2.getTasseIrpef()) + ' Reddito Annuo Netto: ' + lavAut2.getRedditoAnnuoNetto());

let lavAut3 = new Autonomo3(70000);
console.log('Redditto Annuo Lordo: '+ lavAut3.ral + ' Tassazione totale: ' + (lavAut3.getTasseInps() + lavAut3.getTasseIrpef()) + ' Reddito Annuo Netto: ' + lavAut3.getRedditoAnnuoNetto());

let lavAut4 = new Autonomo4(80000);
console.log('Redditto Annuo Lordo: '+ lavAut4.ral + ' Tassazione totale: ' + (lavAut4.getTasseInps() + lavAut4.getTasseIrpef()) + ' Reddito Annuo Netto: ' + lavAut4.getRedditoAnnuoNetto());

let lavAut5 = new Autonomo5(90000);
console.log('Redditto Annuo Lordo: '+ lavAut5.ral + ' Tassazione totale: ' + (lavAut5.getTasseInps() + lavAut5.getTasseIrpef()) + ' Reddito Annuo Netto: ' + lavAut5.getRedditoAnnuoNetto());

let lavAut6 = new Autonomo6(100000);
console.log('Redditto Annuo Lordo: '+ lavAut6.ral + ' Tassazione totale: ' + (lavAut6.getTasseInps() + lavAut6.getTasseIrpef()) + ' Reddito Annuo Netto: ' + lavAut6.getRedditoAnnuoNetto());



