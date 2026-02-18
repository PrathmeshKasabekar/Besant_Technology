let str = "madam";

let reversed = str.split("").reverse().join("");

if (str === reversed) {
  console.log("It is a Palindrome");
} else {
  console.log("It is NOT a Palindrome");
}
