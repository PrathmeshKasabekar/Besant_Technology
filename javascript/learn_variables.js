// let is a block scope
// intialization is optional
// let cannot be re-declared and cannot be re-intialized
{
  let name = "David";
  console.log("Inside", name);
}
console.log("outside", name);

// const is a blick scope
// initialization is mandatory
// cannot be re-declared cannot br re-intialized
{
  const name = "David";
  console.log("Inside", name);
}
console.log("outside", name);

//var is a function scope
// intialization is optional
// var can be re-declared and can be re-initialized
{
  var name = "David";
  console.log("Inside", name);
}
console.log("outside", name);

let final;