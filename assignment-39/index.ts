
//   city_country: Takes in the name of a city and its country and returns a string
//   formatted like "Lahore, Pakistan".
//   @param {string} city - The name of the city.
//   @param {string} country - The name of the country.
//   @return {string} The formatted string with the city and country.

function city_country(city : string, country : string){

    // Concatenate the city and country with a comma in between.
    return `${city},${country}`;
}

// Call the city_country function with different city-country pairs and print the result.
console.log(city_country("Karachi","Pakistan"));

console.log(city_country("Paris","France"));

console.log(city_country("Los Angeles","USA"));

console.log(city_country("Sydney","Australia"));
