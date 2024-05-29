// This is an array of guests that are invited to dinner.
let Guest_list: string[] = ['Mr. ShahRukh Khan', 'Mr. Robert Downey Jr', 'Mr. Hugh Jackman'];

// This is the guest who is not able to come to the dinner party.
let absent_guest: string = 'Mr. ShahRukh Khan';

// This is the new guest that we are inviting to the dinner party.
let new_guest: string = 'Ms. Ana De Armas';

// Replace the first guest in the list with the new guest.
Guest_list[0] = new_guest;

// Add a new guest at the beginning of the list.
Guest_list.unshift('Mr. Christian Bale');

// Add a new guest at the second position in the list.
Guest_list.splice(2, 0, 'Ms. Emma Watson');

// Add a new guest at the end of the list.
Guest_list.push('Ms. Anne Hathaway');

// Remove all the guests from the list except the first two.
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
}

// Remove the first two guests from the list.
Guest_list.splice(0, 2);

// Print the remaining guests in the list.
console.log(Guest_list);

// Print the total number of guests invited to the dinner party.
console.log(`Total Number Of Guests Are : ${Guest_list.length}`);

