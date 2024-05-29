
// CarInfo function that stores information about a car in an object.
// The name of the car manufacturer.
// The name of the car model.
// Arbitrary number of key-value pairs.
// An object that contains the car information.
 
function CarInfo(Manufacturer: string, ModelName: string | number, ...ExtraOptions: { [key: string]: any }[]): Object {
    
    //   Object that stores the car information.
    const CarInfo = {
        Manufacturer,
        ModelName,
        // Spread the extra options into a single object
        ...Object.assign({}, ...ExtraOptions)
    };

    return CarInfo;
}

// Call the function with the required information and two other name-value pairs
let answer = CarInfo("Lamborghini", "Aventador", {color: "Black"}, {features: ["6.5L V12 Engine", "ABS Brakes"]});

// Print the object to verify that all the information was stored correctly
console.log(answer);
