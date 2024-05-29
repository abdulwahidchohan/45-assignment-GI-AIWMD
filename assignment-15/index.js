"use strict";
// This is an array of guests that are invited to a party.
let guest_list = ['Ali', 'Arshman', 'Kashaf',];
// This variable stores the name of a guest who is not attending the party.
let guestnotAttend = "Ali";
// This variable stores the same as guest_list array.
let guestAttend = guest_list;
// This variable stores the name of a guest that is to be removed from the guest_list array.
let nameToRemove = 'Ali';
// This variable stores the name of a guest that is to be added to the guest_list array.
let newNameToAdd = 'Haseeb';
// This variable stores the index of the guest in the guest_list array.
let indexToRemove = guest_list.indexOf(nameToRemove);
// If the guest is found in the guest_list array, remove the guest and add a new guest.
if (indexToRemove !== -1) {
    guest_list.splice(indexToRemove, 1); // Remove the name
    guest_list.push(newNameToAdd); // Add the new name
}
// Print the invitation message to the console for each guest in the guest_list array.
console.log(`You are invited to my party ${guest_list[0]} \nRegards \nAbdul Wahid\n`);
console.log(`You are invited to my party ${guest_list[1]} \nRegards \nAbdul Wahid\n`);
console.log(`You are invited to my party ${guest_list[2]} \nRegards \nAbdul Wahid\n`);
console.log(`You are invited to my party ${guest_list[2]} \nRegards \nAbdul Wahid\n`);
