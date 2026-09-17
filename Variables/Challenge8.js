const prompt = require("prompt-sync")();

let a = parseFloat(prompt("Enter the first Number : "));
let b = parseFloat(prompt("Enter The Second Number : "));
let c = parseFloat(prompt("Enter The 3rd Number : "));

let geometric  =  (a * b * c)^(1/3); 
console.log(geometric);