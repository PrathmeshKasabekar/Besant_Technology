let laptop = {
  name: "HP",
  model: "Victus",
  genration: "13th",
  color: "blue",
  price: "75000",
};
console.log(laptop);
console.log(laptop.name);
console.log(laptop["name"]);

let employee = {
  name: "David",
};
console.log(employee);

employee.programming = "javaScript";
console.log(employee);

employee["id"] = 1234;
console.log(employee);
