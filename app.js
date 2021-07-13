/* 
    Author: Ngozi Young
    Date: July 13th, 2021
    Description: Guessing game that prompts user to enter a number that is used to generate a random number which the user must then guess to win the game. Open browser console to see when you've won the game and other details. Enter 'q' to quit the game.
*/
let maximum = parseInt(prompt("Hey, enter your maximum number!"));
// Reprompts if a number greater than 0 is not entered
while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number"));
}
// Generates a random number between 1 and user's maximum number
const targetNum = Math.floor(Math.random() * maximum) + 1

/* User prompted to enter a valid guess number between 1 and max number. 
    Game stops when user enters 'q' or guess the correct number */
let userInput = (prompt("Enter your guess!"));
let attempts = 1;
while (parseInt(userInput) !== targetNum) {
    if (userInput === 'q') {
        console.log('Game quitted successfully!');
        break;
    } else if (!parseInt(userInput)) {
        userInput = prompt("Please enter a valid number");
        attempts--; // doesn't count the attempt
    } else if (userInput > targetNum) {
        userInput = prompt("Too high, try again!");
    } else {
        userInput = prompt("Too low, try again!");
    }
    attempts++;
}
if (parseInt(userInput) === targetNum) {
    console.log(`Congratulations, you won! You've entered the correct target number which was ${targetNum} in ${attempts} attempts`);
}