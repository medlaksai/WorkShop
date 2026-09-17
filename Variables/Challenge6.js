// Challenge 6: Calculating and displaying results

const prompt = require('prompt-sync')();

let nb1 = parseFloat(prompt("Enter Your First Number :"));
let nb2 = parseFloat(prompt("Enter Your Second Number :"));

let somme = nb1 + nb2;
let difference = nb1 - nb2;
let produit = nb1 * nb2;
let quotient = nb1 / nb2;

console.log(`Somme : ${somme}`);
console.log(`Différence : ${difference}`);
console.log(`Produit : ${produit}`);
console.log(`Quotient : ${quotient}`);