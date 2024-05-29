"use strict";
//  Function to describe a city and its country. 
//  Takes the name of a city and its country as parameters.
//  Prints a simple sentence, such as "Karachi is in Pakistan".
//  The country parameter has a default value of "Default Country".
//  The name of the city.
//  The name of the country.
function describe_city(city, country = "Default Country.") {
    // Print a sentence describing the city and its country.
    console.log(` ${city} is in ${country} `);
}
// Call the function for different cities.
// Karachi is in Pakistan.
describe_city("Karachi", "Pakistan");
// Paris is in France.
describe_city("Paris", "France");
// Los Angeles is in USA.
describe_city("Los Angeles", "USA");
// Tokyo is in Default Country (no country specified).
describe_city("Tokyo");
