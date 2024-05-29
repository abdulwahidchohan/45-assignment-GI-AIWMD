"use strict";
// This code snippet demonstrates how to iterate over an array of guests
// and print invitation messages to each guest.
// Create an array of guest names
let guest_list = ['Amir', 'Anwar', 'Kashaan'];
// Iterate over the guest list
for (let i = 0; i < guest_list.length; i++) {
    // Print an invitation message to each guest
    console.log(`
        Dear Mr. ${guest_list[i]},
        It is our pleasure to invite you to our party.
        Thank you!
    `);
}
