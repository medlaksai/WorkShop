const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Enter First Number :"));
let num2 = parseFloat(prompt("Enter Second One :"));

if (num1 == num2){
    let sum = (num1 + num2) * 3;
    console.log(sum);
} else {
    let sum = num1 + num2;
    console.log(sum);
}