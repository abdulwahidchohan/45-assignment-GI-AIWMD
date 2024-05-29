
// Tests for equality and inequality with strings

// Equality ( Test No 1 )
// This test checks if the string "MacBook" is equal to the string "MacBook".
console.log("Equality Test With Strings: ", "MacBook" === "MacBook");

// InEquality ( Test No 2 )
// This test checks if the string "MacBook" is not equal to the string "Surface Book".
console.log("InEquality Test With Strings: ", ("MacBook" as String) != "Surface Book");

// Tests Using The Lower Case Function ( Test No 3 )
// This test checks if the string "TALAL" converted to lower case is equal to the string "talal".
console.log("Lower Case Function Test: ", "TALAL".toLowerCase() === "talal");

// Numerical Tests Involving Equality And InEquality

// Equality ( Test No 4 )
// This test checks if the number 24 is equal to the number 24.
console.log("Equality Test With Numbers: ", 24 === 24);

// InEquality ( Test No 5 )
// This test checks if the number 24 is not equal to the number 98.
console.log("InEquality Test With Numbers: ", (24 as Number) != 98);

// Tests Greater Than ( Test No 6 )
// This test checks if the number 98 is greater than the number 24.
console.log("Greater Than Test:", 98 > 24);

// Less Than ( Test No 7 )
// This test checks if the number 24 is less than the number 98.
console.log("Less Than Test:", 24 < 98);

// Greater Than Or Equal To ( Test No 8 )
// This test checks if the number 98 is greater than or equal to the number 98.
console.log("Greater Than And Equal To Test:", 98 >= 98);

// Less Than Or Equal To ( Test No 9 )
// This test checks if the number 24 is less than or equal to the number 98.
console.log("Less Than Or Equal To Test:", 24 <= 98);

// Tests Using "And" Operator ( Test No 10 )
// This test checks if the number 1 is equal to the number 1 and if the number 98 is greater than the number 24.
console.log("And Operator Test:", 1===1 && 98 > 24 );

// Test Using "Or" Operator ( Test No 11 )
// This test checks if the number 1 is equal to the number 1 or if the boolean value false is true.
console.log("Or Operator Test:", 1===1 || false);

// Test Whether An Item Is In A Array ( Test No 12 )
// This test checks if the string "Mango" is in the array Fruits.
const Fruits : String[] = ['Mango', 'WaterMelon', 'Plums'];
console.log('Test "Mango" In The Array: ', Fruits.includes("Mango"));

// Test Whether An Item Is In A Array ( Test No 13 )
// This test checks if the string "Mango" is in the array Fruits.
console.log('Test "Mango" In The Array: ', Fruits.includes("Mango"));

// Test Whether An Item Is In A Array ( Yahan Bs False Lanay k Liye Fruits Se Pehlay ! Sign Use ki Hai ) ( Test No 14 )
// This test checks if the string "Mango" is not in the array Fruits.
console.log('Test "Mango" In The Array: ', !Fruits.includes("Mango"));



