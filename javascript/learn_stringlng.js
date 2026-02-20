//counts the actuall length of the string incuding the spaces in between
let str1 = "i am in Bengaluru";
console.log(str1.length);

// remove the spaces in between the string and then counts the actual string length
let str2 = "i am in Bengaluru";
console.log(str2.trim().length);

//
let str3 = "i am in Bengaluru";
console.log(str3.split(""));

// the split method splits the string but the join method is exactly opposite of split it combines the string again
let str4 = "i am in Bengaluru";
console.log(str4.split("").join(""));

// converts the string into uppercase
let str5 = "i am in Bengaluru";
console.log(str5.toLocaleUpperCase());

//  convert the string into lowercase
let str6 = "i am in Bengaluru";
console.log(str6.toLocaleLowerCase());

// concate is used to merge the two strings for example the the city and state are two different strings but added to a single sentence using concat
let city = "Mumbai";
let state = "Maharashtra";
console.log(state.concat(" ", city));
// another and basic way of doing it
console.log(state + city);

// the incudes method checks in the given string have the same value given into it * it is K sensetive
let str7 = "i am in Bengaluru";
console.log(str7.includes("Am"));

// the search method used fro searching but it uses indexing method if the vaue will not be present it will give a negative value
// the indexing starts from 0 not 1 os in bengaluru word the index will be 8 not 9
let str8 = "i am in Bengaluru";
console.log(str8.search("Bengaluru"));
