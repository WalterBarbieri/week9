interface MyInterface2 {
  credito: number;
  numeroChiamate: number;
  ricarica(credit: number): void;
  chiamata2(minuti: number): number;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class EpicPhone implements MyInterface2 {
  constructor(public credito: number, public numeroChiamate: number) {}
  public ricarica(credit: number): number {
    return (this.credito = this.credito + credit);
  }
  public chiamata2(minuti: number): number {
    this.numeroChiamate = this.numeroChiamate + 1;
    return (this.credito = this.credito - (minuti*0.2));
  }
  public numero404(): number {
    return this.credito;
  }
  public getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
  public azzeraChiamate(): number {
    return (this.numeroChiamate = 0);
  }
}

const randomButton: any = document.getElementById("randomButton");
const resetButton: any = document.getElementById("resetButton");
const updateButton: any = document.getElementById("updateButton");
const newCredit = document.getElementById("newCredit") as HTMLInputElement;
const call = document.getElementById("call") as HTMLInputElement;
const myCredit = document.getElementById("myCredit") as HTMLInputElement;
const numChiamate = document.getElementById("numChiamate") as HTMLInputElement;

randomButton.onclick = function () {
  let randomNumber: number = Math.ceil(Math.random() * 29);
  call.value = randomNumber.toString();
};

resetButton.onclick = function () {
  numChiamate.value = "0";
};

updateButton.onclick = function () {
  let parsedNewCredit = parseFloat(newCredit.value);
  if (isNaN(parsedNewCredit)) {
    parsedNewCredit = 0;
  }
  let parsedCall = parseFloat(call.value);
  if (isNaN(parsedCall)) {
    parsedCall = 0;
  }
  let parsedMyCredit = parseFloat(myCredit.value);
  let parsedNumChiamate = parseFloat(numChiamate.value);

  const user = new EpicPhone(parsedMyCredit, parsedNumChiamate);
  user.ricarica(parsedNewCredit);
  user.chiamata2(parsedCall);
  myCredit.value = (user.numero404()).toString();
  numChiamate.value = (user.getNumeroChiamate()).toString();
  newCredit.value = '';
  call.value = '';
};
