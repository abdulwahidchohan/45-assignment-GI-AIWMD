// Function to create a sandwich summary based on the ingredients provided.
// The function accepts an array of strings as input and prints a summary of the sandwich being ordered.


// An array of strings representing the ingredients of the sandwich.
 
function make_sandwich(ingredients) {
    
    // Print the header for the sandwich summary.
    console.log("\nMaking Your Sandwich With :");

    // Iterate over the ingredients and print each one.
    ingredients.forEach(element => console.log('- ' + element));

    // Print the footer for the sandwich summary.
    console.log("\nEnjoy Your Sandwich !");
}

// Call the function with different number of ingredients.
make_sandwich(["Turkey", "Bacon", "Cheese", "Lettuce", "Barbecue Sauce"]);

make_sandwich(["Ham", "Egg", "Cheese", "Mayo", "Lettuce"]);

make_sandwich(["Ham", "Turkey", "Parmesan Cheese", "Lettuce", "Barbecue Sauce"]);
