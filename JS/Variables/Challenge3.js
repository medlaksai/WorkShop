// Challenge 3 : Conversion de la distance
const prompt = require('prompt-sync')();

let Km = parseFloat(prompt("Entre the distance In Km :"));
let  Yards = Km * 1093.61
console.log(`The Yards Distance is : ${Yards}`);