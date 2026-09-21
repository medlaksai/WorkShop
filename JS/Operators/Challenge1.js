const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Enter First Number :"));
let num2 = parseFloat(prompt("Enter Second Number :"));

let sum = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let quot = num1 / num2;

console.log(" Resualts : ");
console.log(` Somme  = ${sum}`);
console.log(` Différence = ${diff}`);
console.log(` Produit = ${prod}`);
console.log(` Quotient = ${quot}`);

