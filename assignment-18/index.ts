// Store the locations in an array. Make sure the array is not in alphabetical order.
let places : string[] = ['Eiffel Tower', 'Times Square', 'Cologne Cathedral', 'Rhine Falls', 'Amalfi Coast', 'Alnwick Castle'];

// Print the original array.
console.log('Orignal ' + places);

// Print the array in alphabetical order without modifying the actual list.
console.log('Copy ' + [...places].sort());

// Show that the original array is still in its original order by printing it.
console.log('Orignal ' + places);

// Print the array in reverse alphabetical order without changing the order of the original list.
console.log('Copy ' + [...places].sort().reverse());

// Show that the original array is still in its original order by printing it again.
console.log('Orignal ' + places);

// Reverse the order of the list. Print the array to show that its order has changed.
console.log('Orignal ' + places.reverse());

// Reverse the order of the list again. Print the list to show it’s back to its original order.
console.log('Orignal ' + places.reverse());

// Sort the array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Orignal ' + places.sort());

// Sort to change the array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Orignal ' + places.sort().reverse());

