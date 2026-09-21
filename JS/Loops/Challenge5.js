
const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter base :"));
let x = parseInt(prompt("Enter Exposant :"))
let resualts = 1;

for (let i = 0 ; i < x ; i++ ){
     resualts *= n; 
    console.log(resualts)

}

