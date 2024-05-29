
//   This code snippet initializes an array of names and prints a message for each name.
//   The message is the same for all names.
 

// Initialize an array of names
let names: string[] = ['Arshman','Ali','Haseeb','Fakhar','Mudassir'];

// Message to be printed for each name
let message: string = "Do you like to play football?"

// Loop through the array of names and print a message for each name
for (let i = 0; i < names.length; i++) {
    // Print a message for each name
    console.log(`${names[i]} ${message}`);
}
