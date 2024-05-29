// Write A Program That Creates Objects Containing These Items

// An interface for defining a person
interface Person {
    Name: string; // The name of the person
    Age: number; // The age of the person
    Nationality: string; // The nationality of the person
    Student: boolean; // A boolean indicating if the person is a student
}

// Create a person object
let person: Person = {
    Name: 'Abdul Wahid',
    Age: 17,
    Nationality: 'Pakistani',
    Student: true
}

console.log(person); // Log the person object to the console

// An interface for defining a car
interface Car {
    Company: string; // The company that manufactured the car
    Model: string | number; // The model of the car
    Color: string; // The color of the car
}

// Create a car object
let car: Car = {
    Company: 'Rolls Royce',
    Model: '2024 Rolls-Royce Cullinan',
    Color: 'Black'
}

console.log(car); // Log the car object to the console

