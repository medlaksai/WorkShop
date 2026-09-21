const prompt = require("prompt-sync")();
const nums = parseInt(prompt("Enter Your Numbers :"));
let num = [];

for (let i = 0 ; i < nums ; i++){
    
      let value = prompt(`Entrez l'élément n°${i + 1} :`);
       num.push(value);

}
console.log(num);

