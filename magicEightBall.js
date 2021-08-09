//declare a variable called userName
let userName = "Jose";
//if user enters a name
//log to the console an interpolated result of Hello + Name | otherwise log Hello!
console.log(userName ? `Hello, ${userName}!` : `Hello!`);
//declare a variable called userQuestion which should contain a string value
const userQuestion = "Am I on the road to greatness";
//log userQuestion to the console with username if provided
console.log(userName ? `${userName} asked, ${userQuestion}?` : `${userQuestion}?`);
//declare a variable named randomNumber and assign it the evaluated result of truncating the evaluated result of invoking the random method on the math object multiplied by the highest number (7 in our case)
const randomNumber = ~~(Math.random() * 8);
//initialize a variable named eightBall to empty string
let eightBall = "";
//re-assign eightBall according to provided switch statement
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}
//log to the console the re-assigned value of eightball
console.log(eightBall);
