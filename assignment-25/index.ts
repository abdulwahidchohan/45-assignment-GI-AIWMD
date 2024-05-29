
// Creating a variable 'alien_color'
let alien_color: string = ' Green ';

// Testing if the alien's color is Green
if (alien_color === ' Green ') {
    console.log("Player Just Earned 5 Points !!");
}

// Testing if the alien's color is not Green
alien_color = ' Red ';

if (alien_color === ' Green ') {
    // This block will not be executed because the condition is false
    console.log("Player Just Earned 5 Points !!");
}

