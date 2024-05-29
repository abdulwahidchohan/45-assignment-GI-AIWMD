// This code snippet demonstrates how to remove leading and trailing whitespace from a string.
// It declares a variable `personName` and assigns it a string value with leading and trailing whitespace.
// Then, it uses the `trim()` method to remove the whitespace and logs the results.
// Declare a variable and assign it a string value with leading and trailing whitespace

let personName: string =  "\t\n John Doe \t\n";

// Log the original string with leading and trailing whitespace
console.log("Original:", personName);

// Use the trim() method to remove leading and trailing whitespace and log the result
console.log("Stripped:", personName.trim());
