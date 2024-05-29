"use strict";
/**
 * This code snippet demonstrates how to manipulate strings in TypeScript.
 * It declares a variable `personName` and assigns it the value "Abdul Wahid".
 * Then, it uses various string methods to transform the string and logs the results.
 * The commented lines provide additional explanations for each operation.
 */
// Declare a variable and assign it a string value
let personName = "Abdul Wahid";
// Convert the string to lowercase and log the result
console.log("lowercase", personName.toLowerCase());
// Convert the string to uppercase and log the result
console.log("uppercase", personName.toUpperCase());
// Capitalize the first letter of the string and convert the rest to lowercase
// The `charAt(0)` method retrieves the first character
// The `slice(1)` method retrieves the substring starting from the second character
// The `toUpperCase()` method converts the first character to uppercase
// The `toLowerCase()` method converts the rest of the substring to lowercase
console.log("titlecase", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
