const prompt = require("prompt-sync")();

let x1 = parseFloat(prompt("Enter X Value :"));
let y1 = parseFloat (prompt("Enter Y Value :"));
let z1 = parseFloat(prompt("Enter Z Value :"));
let x2 = parseFloat(prompt("Enter X Value :"));
let y2 = parseFloat (prompt("Enter Y Value :"));
let z2 = parseFloat(prompt("Enter Z Value :"));

let distance =Math.sqrt((x2 - x1)** 2 + (y2-y1)**2 + (z2-z1)**2) ;
console.log(distance);