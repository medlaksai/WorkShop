const prompt = require("prompt-sync")();

const length = parseFloat(prompt("Enter The length :"));
const width = parseFloat(prompt("Enter The Width :"));

surface = length * width ;
console.log(surface);