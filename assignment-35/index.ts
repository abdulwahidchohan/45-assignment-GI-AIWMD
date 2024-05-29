// This program stores the names of different animals in a list and prints out
// a statement about each animal, such as a dog would make a great pet.
// The program also prints a statement about what these animals have in common.

// List to store the names of animals
let animals : string [] = ["Siberian Husky", "Macaw", "Lion"];

// Loop through the list of animals and print a statement about each
for(let animal of animals){

    // Print a statement about each animal
    console.log(`A ${animal} Would Make A Great Pet !`);
}

// Print a statement about what the animals have in common
console.log(`Any Of These Animals Would Make A Great Pet !`);
