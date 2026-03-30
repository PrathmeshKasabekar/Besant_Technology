function hasVowels(str) {
  return /[aeiou]/i.test(str);
}

// Example
console.log(hasVowels("sky")); // false
console.log(hasVowels("apple")); // true
