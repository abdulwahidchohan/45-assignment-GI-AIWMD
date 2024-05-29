"use strict";
// Checks if usernames are unique.
// Loops through the list of new users and checks if each username already exists in the list of current users.
// If a username already exists, it prints a message saying that the username is not available. If the username is not in the list of current users,
// it prints a message saying that the username is available.
// The comparison is case insensitive, so 'John' should not be accepted if 'JOHN' has been used.
// List of current users
let current_users = ['HaziQue', 'Anas', 'MubasHir', 'Afridi', 'Ahsan'];
// List of new users
let new_users = ['Omer', 'HaziQue', 'Haider', 'MubasHir', 'Warasat'];
// Loops through the list of new users and checks if each username already exists in the list of current users.
new_users.forEach(newusername => {
    // Convert the username to lowercase
    let lowercase = newusername.toLowerCase();
    // Check if the username exists in the list of current users
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`The Username ${newusername} Is Not Available. Please Write A Different Username`);
    }
    else {
        console.log(`The Username ${newusername} Is Available.`);
    }
});
