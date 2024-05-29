"use strict";
// This program demonstrates the use of arrays and functions in TypeScript.
//  Creates a copy of the magicians' names array.
//  @param List - The array of magicians' names
//  @returns A new array with the same magicians' names
function CopyMagiciansList(List) {
    // Using the spread operator to create a new array with the same elements as the original array
    return [...List];
}
//  Adds the phrase "The Great" to the beginning of each magician's name in the input array.
//  @param MagiciansList - The array of magicians' names
function make_great(MagiciansList) {
    // Looping through each element of the input array and modifying it
    for (let i = 0; i < MagiciansList.length; i++) {
        if (MagiciansList[i] === undefined) {
            throw new Error("Undefined element in the array");
        }
        MagiciansList[i] = "The Great " + MagiciansList[i];
    }
}
//   Prints each magician's name in the input array to the console.
//   @param magicians - The array of magicians' names
function show_magicians(magicians) {
    // Looping through each element of the input array and printing it to the console
    magicians.forEach(element => {
        if (element === undefined) {
            throw new Error("Undefined element in the array");
        }
        console.log(element);
    });
}
// Creating a copy of the magicians' names array
const Magicians = ["Harry", "Ron", "Hermione"];
const CopyMagicianList = CopyMagiciansList(Magicians);
// Adding "The Great" to the beginning of each magician's name in the copy of the array
make_great(CopyMagicianList);
// Printing the original magicians' names array
console.log("\n\nThis Is My Original Magicians List :");
show_magicians(Magicians);
// Printing the modified magicians' names array
console.log("\n\nThis Is My Modified Magicians List :");
show_magicians(CopyMagicianList);
