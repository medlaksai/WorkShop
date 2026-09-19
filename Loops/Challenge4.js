const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter an integer :"));

let sum = 0;

for (let i = 0 ; i <= 10 ; i++ ){
     sum += i; 
     console.log(sum)
}
    
