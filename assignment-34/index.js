"use strict";
// Pizzas: Think Of At Least Three Kinds Of Your Favorite Pizza.
// Store These Pizza Names In A Array, And Then Use A For Loop To Print The Name Of Each Pizza.
// Modify Your For Loop To Print A Sentence Using The Name Of The Pizza Instead Of Printing Just The Name Of The Pizza.
// For Each Pizza You Should Have One Line Of Output Containing A Simple Statement like I Like Pepperoni Pizza.
// Add A Line At The End Of Your Program, Outside The For Loop, that states how much you like Pizza.
// The Output Should Consist Of Three Or More Lines About The Kinds Of Pizza You Like &
// Then An Additional Sentence, Such As I Really Love Pizza!
//  An array of Pizza names
//  @type {string[]}
let pizzas = ["Four Cheese Pepperoni", "BBQ Chicken", "Supreme"];
// Loop through the pizza names and print a sentence about each one
for (let pizza of pizzas) {
    // Print a sentence using the name of the pizza
    console.log(`I Like ${pizza} Pizza.`);
}
// Print a sentence stating how much you love pizza
console.log(`I Really Love Pizza !`);
