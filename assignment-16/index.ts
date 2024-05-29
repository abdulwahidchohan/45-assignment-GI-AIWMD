// This code snippet demonstrates how to remove guests from a list based on a condition.
// It removes guests from the list until there are only two guests remaining.
// It then prints an invitation message to each remaining guest.

// Create an array of guest names
let guest_list: string[] = ['Ali', 'Arshman', 'Kashaf', 'Haseeb'];

// Remove guests from the list until there are only two guests remaining
while (guest_list.length > 2) {
    // Remove the last guest from the list
    const removeGuest = guest_list.pop();
    // Print a message indicating that the guest is no longer invited
    console.log(`Sorry, ${removeGuest} you are no longer invited`);
}

// Print an invitation message to each remaining guest
guest_list.forEach((guest) => {
    console.log(`Dear ${guest}, You are invited for Party.`);
});

// Print the final list of guests
console.log("Final List:", guest_list);
console.log("Final List:", guest_list)

