/* PRIMA PROVA MA HO FATTO TUTTO CON PROPRIETA'

class Wallet {
    deposit: number;
    withdraw: number;
    balance: number;
    constructor(_deposit: number, _withdraw: number, _balance: number) {
        this.deposit = _deposit;
        this.withdraw = _withdraw;
        this.balance = _balance;
    }
    finance(): string{
        return `Initial Balance: ${this.balance}. Deposit: ${this.deposit}. Withdraw: ${this.withdraw}. Final Balance: ${this.balance + this.deposit - this.withdraw}`
    }
}

let sonWallet = new Wallet(500, 200, 0);
console.log(sonWallet.finance());

class MotherWallet extends Wallet {
    
}

*/

/**SECONDA PROVA CON METODI 

class Wallet {
  protected balance: number;

  constructor(_balance: number = 0) {
    this.balance = _balance;
  }
  deposit(hardly: number) {
    this.balance += hardly;
  }
  withdraw(tooOften: number) {
    if (tooOften > this.balance) {
      console.log("You are poor");
      return;
    } else {
      this.balance -= tooOften;
    }
  }
  myBalance(): number {
    return this.balance;
  }
}

class SonWallet extends Wallet {
  constructor(_balance: number = 0) {
    super(_balance);
  }
}

class MotherWallet extends Wallet {
  constructor(_balance: number = 0) {
    super(_balance);
  }
  addInterest() {
    this.balance += this.balance * 0.1
  }
}

const sonWallet = new SonWallet(0);
sonWallet.deposit(1000)
sonWallet.withdraw(497);

const motherWallet = new MotherWallet(0);
motherWallet.deposit(10000);
motherWallet.withdraw(3124)
motherWallet.addInterest();


console.log(sonWallet.myBalance());
console.log(motherWallet.myBalance());
*/

/**TERZA PROVA CON METODI E DISPLAY */

const sonButton: any = document.getElementById("sonButton");
const motherButton: any = document.getElementById("motherButton");

class Wallet {
  protected balance: number;

  constructor(_balance: number = 0) {
    this.balance = _balance;
  }
  deposit(hardly: number) {
    this.balance += hardly;
  }
  withdraw(tooOften: number) {
    if (tooOften > this.balance) {
      console.log("You are poor");
      return;
    } else {
      this.balance -= tooOften;
    }
  }
  myBalance(): number {
    return this.balance;
  }
}

class SonWallet extends Wallet {
  constructor(_balance: number = 0) {
    super(_balance);
  }
}

class MotherWallet extends Wallet {
  constructor(_balance: number = 0) {
    super(_balance);
  }
  addInterest() {
    this.balance += this.balance * 0.1;
  }
}

sonButton.onclick = function () {
  const sonDeposit: any = document.getElementById(
    "sonDeposit"
  ) as HTMLInputElement;
  let parsedSonDeposit = parseFloat(sonDeposit.value);
  if (isNaN(parsedSonDeposit)) {
    parsedSonDeposit = 0;
  }

  const sonWithdraw: any = document.getElementById(
    "sonWithdraw"
  ) as HTMLInputElement;
  let parsedSonWithdraw = parseFloat(sonWithdraw.value);
  if (isNaN(parsedSonWithdraw)) {
    parsedSonWithdraw = 0;
  }

  const sonBalance: any = document.getElementById(
    "sonBalance"
  ) as HTMLInputElement;
  const parsedSonBalance = parseFloat(sonBalance.value);

  const sonWallet = new SonWallet(parsedSonBalance);
  sonWallet.deposit(parsedSonDeposit);
  sonWallet.withdraw(parsedSonWithdraw);
  sonBalance.value = sonWallet.myBalance();

  sonDeposit.value = "";
  sonWithdraw.value = "";
};

motherButton.onclick = function () {
    const motherDeposit: any = document.getElementById(
      "motherDeposit"
    ) as HTMLInputElement;
    let parsedMotherDeposit = parseFloat(motherDeposit.value);
    if (isNaN(parsedMotherDeposit)) {
      parsedMotherDeposit = 0;
    }
  
    const motherWithdraw: any = document.getElementById(
      "motherWithdraw"
    ) as HTMLInputElement;
    let parsedMotherWithdraw = parseFloat(motherWithdraw.value);
    if (isNaN(parsedMotherWithdraw)) {
      parsedMotherWithdraw = 0;
    }
  
    const motherBalance: any = document.getElementById(
      "motherBalance"
    ) as HTMLInputElement;
    const parsedMotherBalance = parseFloat(motherBalance.value);
  
    const motherWallet = new MotherWallet(parsedMotherBalance);
    motherWallet.deposit(parsedMotherDeposit);
    motherWallet.withdraw(parsedMotherWithdraw);
    motherWallet.addInterest();
    motherBalance.value = motherWallet.myBalance();
  
    motherDeposit.value = "";
    motherWithdraw.value = "";
  };
