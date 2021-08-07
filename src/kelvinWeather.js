//declare a const variable named kelvin and assign it the value of 293
const kelvin = 293;
//declare a const variable named celsius and assign it the value of kelvin minus 273
const celsius = kelvin - 273;
//declare a variable named fahrenheit and assign it the evaluated result of converting celius to farenheit
let fahrenheit = celsius * (9/5) + 32;
//re-assign value of farenheit to the evaluated result of truncating fahrenheit
farenheit = ~~(fahrenheit);
//log to the console a string using string interpolation with our fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//declare a variable named newtonScale and assign it the evaulated result of converting celsius to Newtonscale
const newtonScale = ~~(celsius * (33/100));
//log to the console a string using string interpolation with our newtonScale
console.log(`The temperature is ${newtonScale} Newton.`);