
// Determines the stage of life of a person based on their age.
//   @param age - The age of the person.

function determineStageOfLife(age: number): void {
    // If the person is less than 2 years old, print a message that the person is a baby.
    if(age < 2){
        console.log(" The Person Is A Baby. ");
    }
    // If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
    else if(age >= 2 && age < 4){
        console.log(" The Person Is A Toddler. ");
    }
    // If the person is at least 4 years old but less than 13, print a message that the person is a kid.
    else if(age >= 4 && age < 13){
        console.log(" The Person Is A Kid. ");
    }
    // If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
    else if(age >= 13 && age < 20){
        console.log(" The Person Is A Teenager. ");
    }
    // If the person is at least 20 years old but less than 65, print a message that the person is an adult.
    else if(age >= 20 && age < 65){
        console.log(" The Person Is An Adult. ");
    }
    // If the person is age 65 or older, print a message that the person is an elder.
    else if(age > 65 ){
        console.log(" The Person Is An Elder. ");
    }
}

// Call the function with an age value
determineStageOfLife(17); // Replace with the appropriate age value

