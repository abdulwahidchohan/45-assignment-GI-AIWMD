// Ordinal Numbers: Ordinal Numbers Indicate Their Position In An Array, Such As 1st Or 2nd.
// Most Ordinal Numbers End In th, Except 1, 2, And 3.

// Store The Numbers 1 Through 9 In A Array.
// Loop Through The Array.
// Use An If-Else Chain Inside The Loop To Print The Proper Ordinal Ending For Each Number.
// Your Output Should Read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", And Each Result Should Be On A Separate Line.

// Create an array to store the numbers
let numbers : number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for(let num of numbers){

    // Determine the ordinal ending for each number
    let OrdinalEnding : string;

    // Use an if-else chain to determine the ordinal ending
    if(num === 1){
        OrdinalEnding = "st";  // 1st
    }
    else if(num === 2){
        OrdinalEnding = "nd";  // 2nd
    }
    else if(num === 3){
        OrdinalEnding = "rd";  // 3rd
    }
    else{
        OrdinalEnding = "th";  // All other numbers
    }

    // Print the number with the ordinal ending
    console.log(`${num}${OrdinalEnding}`);
}

