// Alien Colors #3: Turn Your If-Else Chain From Exercise 25-26 Into An Else-If Chain.
// Write three versions of this program, making sure each message is printed for the appropriate color alien.
// 1. If the alien is green, print a message that the player earned 5 points.
// 2. If the alien is yellow, print a message that the player earned 10 points.
// 3. If the alien is red, print a message that the player earned 15 points.

// Version 1 Of The Program

let alienColor : string = " Green ";

/**
 * Prints the appropriate message for the alien color.
 */
function printMessageForAlienColor() {
    if(alienColor === " Green "){
        console.log(" The Player Just Earned 5 Points !! ");
    }
    else if(alienColor === " Yellow "){
        console.log(" The Player Just Earned 10 Points !! ");
    }
    else if(alienColor === " Red "){
        console.log(" The Player Just Earned 15 Points !! ");
    }
    else{
        console.log(" Please Select The Right Color ");
    }
}

printMessageForAlienColor();

// Version 2 Of The Program 

alienColor = " Yellow ";
printMessageForAlienColor();

// Version 3 Of The Program 

alienColor = " Red ";
printMessageForAlienColor();

