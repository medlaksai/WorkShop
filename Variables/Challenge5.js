// Challenge 5 : Temperature Display 

const prompt = require('prompt-sync')();

let tempCelsius = parseFloat(prompt("Enter the temperature :"));
 
if (tempCelsius < 0 ) {
console.log("Solid");
} else if (tempCelsius >= 0  && tempCelsius < 100) {
    console.log("Liquid");
} else 
    console.log("Gas");
