"use strict";
// Magicians: Make A Array Of Magician’s Names. Pass The Array To A Function Called show_magicians(), 
// Which Prints The Name Of Each Magician In The Array.
// An array of magician's names.
let Magicians = ["Albus Dumbledore", "Harry Potter", "Hermione Granger", "Lord Voldemort", "Sirius Black", "Minerva McGonagall"];
//  Function to print the names of magicians.
//  An array of magician's names.
function show_magicians(magicians) {
    // Iterate over each magician in the array and print their name.
    magicians.forEach(element => {
        console.log(element);
    });
}
// Call the function to print the names of magicians.
show_magicians(Magicians);
