const prompt = require ("prompt-sync")();

let num = parseInt(prompt("Enter a number :"));

console.log("~~~~ Table De multiplacations ~~");

for (let i = 1 ; i <= 10 ; i++){
   let resultat = num * 2 ;

       console.log(`${num} * ${i} = ${resultat}`);
 }