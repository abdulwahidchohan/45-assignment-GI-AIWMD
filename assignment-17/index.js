"use strict";
// Array to store the guest list.
let Guest_list = ['Mr. ShahRukh Khan', 'Mr. Robert Downey Jr', 'Mr. Hugh Jackman'];
// Guest that is not coming to the dinner party.
let absent_guest = 'Mr. ShahRukh Khan';
//New guest that is being added to the guest list.
let new_guest = 'Ms. Ana De Armas';
// Replacing the first guest in the guest list with the new guest.
Guest_list[0] = new_guest;
//Printing a message to the console for each guest in the guest list.
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]},\n\n It Is Our Pleasure To Invite You In Our Dinner Party.\n\n Thank You!\n\n `);
}
//Printing a message to the console indicating that a guest is not coming to the dinner party.
console.log(`${absent_guest} is not coming to the Dinner Party.`);
// Printing a message to the console indicating that a table has been found, and three guests are being invited.
console.log('Good News ! We Find A Big Table, So Now We Are Inviting 3 More Guests.');
//Adding three guests to the guest list.
Guest_list.unshift('Mr. Christian Bale');
Guest_list.splice(2, 0, 'Ms. Emma Watson');
Guest_list.push('Ms. Anne Hathaway');
//Printing a message to the console for each guest in the guest list.
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]},\n\n It Is Our Pleasure To Invite You In Our Dinner Party.\n\n Thank You!\n\n `);
}
// Printing a message to the console indicating that a table can't be arranged, and only two guests will be invited.
console.log('\nSorry we can not arrange Big Table, Only Two Peoples will be invited.');
// Removing guests from the guest list until only two guests remain.
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry ${remove_Guest}, You are not invited for Dinner.`);
}
// Printing a message to the console for each remaining guest in the guest list.
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]},\n\nYou Are Still Invited To The Dinner Party.\n\nThank You!\n\n`);
}
// Removing all guests from the guest list.
Guest_list.splice(0, Guest_list.length);
console.log(Guest_list);
