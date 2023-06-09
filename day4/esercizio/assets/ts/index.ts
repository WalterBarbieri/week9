async function fetchIt(): Promise<any> {
  await fetch("./Abbigliamento.json", {
    method: "GET",
  })
    .then((raw) => {
      return raw.json();
    })
    .then((response: any) => {
      display(response);
    });
};

class SaldoCapo {
  constructor(
    public capo: string,
    public codprod: number,
    public collezione: string,
    public colore: string,
    public disponibile: string,
    public id: number,
    public modello: number,
    public prezzoivaesclusa: number,
    public prezzoivainclusa: number,
    public quantita: number,
    public saldo: number
  ) {}
  getsaldocapo() : number {
    return (this.prezzoivainclusa * this.saldo)/100;
  }
  getacquistocapo(): number {
    return this.prezzoivainclusa - this.getsaldocapo();
  }
}

function display(elements: any) {
    return elements.forEach((element: any) => {
        element = new SaldoCapo(element.capo,
            element.codprod,
            element.collezione,
            element.colore,
            element.disponibile,
            element.id,
            element.modello,
            element.prezzoivaesclusa,
            element.prezzoivainclusa,
            element.quantita,
            element.saldo)
            console.log(element);            
            console.log('Il saldo dell\'elemento ' + element.id + ' è ' + element.getsaldocapo());
            console.log('Il prezzo scontato dell\'elemento ' + element.id + ' è ' + element.getacquistocapo());
    });
    
}