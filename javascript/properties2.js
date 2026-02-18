let employee = {
  name: "david",
  id: 1234,
};
console.log(Object.keys(employee));
console.log(Object.values(employee));

let person1 = {
  name: "prathmesh",
};
let person2 = {
  name: "sanika",
  id: 12324,
};
let op = Object.assign(person1, person2);
console.log(op);
