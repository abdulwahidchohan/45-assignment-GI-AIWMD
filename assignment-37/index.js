"use strict";
//  Function to create shirts with different sizes and messages.
//   The size of the shirt. Default is "Large".
//   The message on the shirt. Default is "I Love TypeScript".
function make_shirt(size = "Large", text = "I Love TypeScript") {
    // Log the creation of a shirt with the specified size and message.
    console.log(`Creating A ${size} Shirt With The Message : ${text}`);
}
// Create a large shirt with the default message.
make_shirt();
// Create a medium shirt with the default message.
make_shirt("Medium");
// Create a small shirt with a different message.
make_shirt("Small", "I love Learning New Things");
// Create an extra large shirt with a different message.
make_shirt("Extra Large", "Big Dawg Things");
