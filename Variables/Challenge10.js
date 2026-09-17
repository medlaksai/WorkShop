// Volume of a sphere
const prompt = require("prompt-sync")();
const PI = 3.14159;

let raduis = parseFloat(prompt("Enter The Radius Of The Sephere :"));

volume = (4/3) * PI * (raduis * 3);
console.log(volume);