function isAnagram(str1, str2) {
  const normalize = str;

  const s1 = normalize(str1);
  const s2 = normalize(str2);

  if (s1.length !== s2.length) return false;
  return s1.split("").sort().join("") === s2.split("").sort().join("");
}

// Example
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
