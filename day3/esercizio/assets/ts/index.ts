export class PIva {
    codredd: number;
    ral: number;
    tasseInps: number;
    tasseIrpef: number;
    constructor (_codredd: number, _ral: number) {
        this.codredd = _codredd;
        this.ral = _ral;
        this.tasseInps = 0.2623;
        this.tasseIrpef = 0.15;
    }
    getUtileTasse(): number {
        return (this.ral * this.codredd)
    }
    getTasseInps(): number {
        return (this.getUtileTasse() * this.tasseInps)
    }
    getTasseIrpef(): number {
        return (this.getUtileTasse() * this.tasseIrpef)
    }
    getRedditoAnnuoNetto(): number {
        return (this.ral - (this.getTasseIrpef() + this.getTasseInps()))
    }
}