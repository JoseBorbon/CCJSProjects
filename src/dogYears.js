//declare a variable called my age and assign it my age
let myAge = 26;
//declare a const variable named earlyYears and assign it the value of 2
//re-assign earlyYears to the evaluated result of multiplying 2 by 10.5
const earlyYears = 2 * 10.5;
//declare a variable called laterYears the evaluated result of subtracting 2 from itself
//multiply later years by 4
const laterYears = (myAge - 2) * 4;
//log to the console early years and later years
console.log("Early Years: " + earlyYears, "\nLater Years: " + laterYears);
//declare a variable named myAgeInDogYears and assign it the evaluated result of adding early years and later years
const myAgeInDogYears = earlyYears + laterYears;
//declare a variable called myName and assign it the evaluated result of invoking the toLowerCase method on the string provided by invocation of prompt
const myName = "Jose".toLowerCase();
//log to the console My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
