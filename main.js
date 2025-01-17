/*
Q38. Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.
*/
function describe_city(nameofcity, Country) {
    if (Country === void 0) { Country = "Pakistan"; }
    return "".concat(nameofcity, " ").concat(Country);
}
var city1 = describe_city("Karachi");
var city2 = describe_city("Islamabad");
var city3 = describe_city("Lahore");
var city4 = describe_city("Dubai USe");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
