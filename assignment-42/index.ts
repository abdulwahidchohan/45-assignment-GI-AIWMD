// Exercise 40: Great Magicians

//  This function modifies the array of magicians by adding the phrase 'The Great' to each magician's name.
//  @param MagiciansList - The array of magicians' names

function make_great (MagiciansList : string[]){
    // Iterate through each magician in the list
    for(let i=0; i<MagiciansList.length; i++){
        // Add 'The Great' to the magician's name
        Magicians[i] = "The Great " + MagiciansList[i]
    }
}

/**
 * This function prints each magician's name to the console.
 * @param magicians - The array of magicians' names
 */
function show_magicians(magicians : string[]){
    // Iterate through each magician in the list
    magicians.forEach(element => {
        // Print the magician's name to the console
        console.log(element);
    })
}

// Create an array of magicians' names
let Magicians : string [] = ["Albus Dumbledore", "Harry Potter", "Hermione Granger", "Sirius Black", "Minerva McGonagall"];

// Modify the magicians' names
make_great(Magicians);

// Print the modified magicians' names
show_magicians(Magicians);
