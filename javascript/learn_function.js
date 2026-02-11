// function declaration
function SayHello() {
  console.log("hi.hello");
}
SayHello();

// function expression
var PrintHello = function () {
  console.log("hi hello");
};
PrintHello();

// function with arguments
function getSallary(value) {
  console.log("Salary is :", value);
}
getSallary(1000);

// function with return statements
function GetSallary(value) {
  return value;
}
var Salary = GetSallary(2000);
console.log("salary is : ", Salary);
