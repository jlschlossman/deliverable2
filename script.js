/* Prompt the user for input
prompt for name
prompt for either 3 or 6 holes (if/else statement?)(loop?)
prompt for number of putts for hole 1, 2, 3 (and 4, 5, 6, I/A)
convert total putts to a respective par
output result to console

par calculation, par = (puttNumber=number of puts) - gameHoles*3
if/else
If over par "Nice try, (name)... Your total par was: +(par)."
if under par "Great job, (name)! Your total par was: -(par)."
if even par "Good game, (name). Your total par was: 0." */

let playerName = prompt("Welcome to GC mini golf! What is your name?");

let gameHoles = Number( prompt(`Hi, ${playerName}! Would you like to play 3 or 6 holes today?`) );

let total = 0;

for (let i = 1; i <= gameHoles; i++) {
    let puttNumber = Number( prompt(`How many putts for hole ${i}? (par is 3)`));
    total += puttNumber;
}

let par = total - (gameHoles * 3);


if (par > 0) {
    console.log(`Nice try, ${playerName}... Your total par was: +${par}.`);
} else if (par < 0) {
    console.log(`Great job, ${playerName}! Your total par was: ${par}.`);
} else {
    console.log(`Good game, ${playerName}. Your total par was 0.`);
}