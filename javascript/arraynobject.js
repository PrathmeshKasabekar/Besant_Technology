let response = [
  { brand: "iphone", color: "black" },
  { brand: "samsung", color: "white" },
  { brand: "redme", color: "gray" },
  { brand: "iphone", color: "blue" },
];
arr = [];
for (let i = 0; i < response.length; i++) {
  if (response[i].brand == "iphone") {
    arr.push(response[i]);
  }
}
console.log(arr);
