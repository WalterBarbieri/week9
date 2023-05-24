const calculateButton: any = document.getElementById("calculateButton");

class PIva {
  codredd: number;
  ral: number;
  tasseInps: number;
  tasseIrpef: number;
  constructor(_ral: number, _codredd: number) {
    this.codredd = _codredd;
    this.ral = _ral;
    this.tasseInps = 0.2623;
    this.tasseIrpef = 0.15;
  }
  getUtileTasse(): number {
    return this.ral * this.codredd;
  }
  getTasseInps(): number {
    return this.getUtileTasse() * this.tasseInps;
  }
  getTasseIrpef(): number {
    return this.getUtileTasse() * this.tasseIrpef;
  }
  getRedditoAnnuoNetto(): number {
    return this.ral - (this.getTasseIrpef() + this.getTasseInps());
  }
}

calculateButton.onclick = function () {
  const ral: any = document.getElementById("ral") as HTMLInputElement;
  let parsedRal = parseFloat(ral.value);
  if (isNaN(parsedRal)) {
    parsedRal = 0;
  }
  console.log(parsedRal);

  const codredd: any = document.getElementById("codredd") as HTMLInputElement;
  let parsedCodredd = parseFloat(codredd.value);
  if (isNaN(parsedCodredd)) {
    parsedCodredd = 0;
  }
  console.log(parsedCodredd);

  const taxation: any = document.getElementById(
    "taxation"
  ) as HTMLInputElement;

  const netIncome: any = document.getElementById(
    "netIncome"
  ) as HTMLInputElement;

  const lavoratore = new PIva(parsedRal, parsedCodredd);
  taxation.value = (lavoratore.getTasseInps() + lavoratore.getTasseIrpef())
  netIncome.value = lavoratore.getRedditoAnnuoNetto();
  
};
