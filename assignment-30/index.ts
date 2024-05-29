/**
 * This code snippet is a loop that iterates over an array of usernames.
 * For each username, it prints a greeting.
 * If the username is 'Admin', it prints a special greeting.
 * Otherwise, it prints a generic greeting.
 */

// Array of usernames
const userNames: string[] = ['Admin', 'Hazique', 'Anas', 'Mubashir', 'Afridi'];

// Loop through the array of usernames
for (let i = 0; i < userNames.length; i++) {
    // Check if the username is 'Admin'
    if (userNames[i] === 'Admin') {
        // Print a special greeting for the 'Admin' user
        console.log('Hello Admin, Would You Like To See A Status Report?');
    }
    else {
        // Print a generic greeting for other users
        console.log(`Hello ${userNames[i]}, Thank You For Logging In Again. `);
    }
}
