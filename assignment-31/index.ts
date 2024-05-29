// This script is used to test the removeAllUserNames function.
// It checks if the userNames array is empty and prints the appropriate message.

// Import the userInfo function from the os module
import { userInfo } from "os";

// The userNames array stores the usernames of users.
// It is initialized with some user names.
let userNames : string [] = ['Admin', 'Haider', 'Omer', 'Warasat', 'Monty'];

// Check if the userNames array is empty.
// If it is empty, print the message "We Need To Some Users !".
// Otherwise, remove all the usernames from the array and print the message indicating that all the user names have been removed.
if(userNames.length === 0){
    // If the userNames array is empty, print the message
    console.log('We Need To Some Users !');
}
else{
    // If the userNames array is not empty, remove all the usernames from the array and print the message indicating that all the user names have been removed.
    userNames = [];
    console.log('All User Names Has Been Removed. ' + userNames.length);
}

