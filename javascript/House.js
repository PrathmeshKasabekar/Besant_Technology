class House {
  constructor(name) {
    this.name = name;
  }
  myhouse() {
    console.log(`house owner ${this.name}`);
  }
}
class Appartment extends House {
  myhouse() {
    console.log(`i am in the children class`);
  }
}
let obj = new House("Harsha");
console.log(obj);
obj.myhouse();
