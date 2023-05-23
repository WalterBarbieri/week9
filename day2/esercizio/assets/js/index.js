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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var sonButton = document.getElementById("sonButton");
var motherButton = document.getElementById("motherButton");
var Wallet = /** @class */ (function () {
    function Wallet(_balance) {
        if (_balance === void 0) { _balance = 0; }
        this.balance = _balance;
    }
    Wallet.prototype.deposit = function (hardly) {
        this.balance += hardly;
    };
    Wallet.prototype.withdraw = function (tooOften) {
        if (tooOften > this.balance) {
            console.log("You are poor");
            return;
        }
        else {
            this.balance -= tooOften;
        }
    };
    Wallet.prototype.myBalance = function () {
        return this.balance;
    };
    return Wallet;
}());
var SonWallet = /** @class */ (function (_super) {
    __extends(SonWallet, _super);
    function SonWallet(_balance) {
        if (_balance === void 0) { _balance = 0; }
        return _super.call(this, _balance) || this;
    }
    return SonWallet;
}(Wallet));
var MotherWallet = /** @class */ (function (_super) {
    __extends(MotherWallet, _super);
    function MotherWallet(_balance) {
        if (_balance === void 0) { _balance = 0; }
        return _super.call(this, _balance) || this;
    }
    MotherWallet.prototype.addInterest = function () {
        this.balance += this.balance * 0.1;
    };
    return MotherWallet;
}(Wallet));
sonButton.onclick = function () {
    var sonDeposit = document.getElementById("sonDeposit");
    var parsedSonDeposit = parseFloat(sonDeposit.value);
    if (isNaN(parsedSonDeposit)) {
        parsedSonDeposit = 0;
    }
    var sonWithdraw = document.getElementById("sonWithdraw");
    var parsedSonWithdraw = parseFloat(sonWithdraw.value);
    if (isNaN(parsedSonWithdraw)) {
        parsedSonWithdraw = 0;
    }
    var sonBalance = document.getElementById("sonBalance");
    var parsedSonBalance = parseFloat(sonBalance.value);
    var sonWallet = new SonWallet(parsedSonBalance);
    sonWallet.deposit(parsedSonDeposit);
    sonWallet.withdraw(parsedSonWithdraw);
    sonBalance.value = sonWallet.myBalance();
    sonDeposit.value = "";
    sonWithdraw.value = "";
};
motherButton.onclick = function () {
    var motherDeposit = document.getElementById("motherDeposit");
    var parsedMotherDeposit = parseFloat(motherDeposit.value);
    if (isNaN(parsedMotherDeposit)) {
        parsedMotherDeposit = 0;
    }
    var motherWithdraw = document.getElementById("motherWithdraw");
    var parsedMotherWithdraw = parseFloat(motherWithdraw.value);
    if (isNaN(parsedMotherWithdraw)) {
        parsedMotherWithdraw = 0;
    }
    var motherBalance = document.getElementById("motherBalance");
    var parsedMotherBalance = parseFloat(motherBalance.value);
    var motherWallet = new MotherWallet(parsedMotherBalance);
    motherWallet.deposit(parsedMotherDeposit);
    motherWallet.withdraw(parsedMotherWithdraw);
    motherWallet.addInterest();
    motherBalance.value = motherWallet.myBalance();
    motherDeposit.value = "";
    motherWithdraw.value = "";
};
