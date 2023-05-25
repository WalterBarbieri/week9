function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Persona {
  name: string;
  constructor(_name: string) {
    this.name = _name;
    console.log("Creazione persona");
  }
}

const persone = new Persona("Mario");
console.log(persone);
