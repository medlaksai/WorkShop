const prompt = require("prompt-sync")();

let num = parseFloat(prompt("Please Enter A Number :"));

if (num % 2 === 0){
    console.log(`The Number ${num} is even `);
} else {
    console.log(`The Number ${num} is odd`);
}
