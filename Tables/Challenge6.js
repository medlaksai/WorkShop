const prompt = require("prompt-sync")();

let table = Number(prompt("How Many Elemnts :"));
let elements = [];
let total = 1
for (i = 0 ; i < table ; i++ ){
          let sum = Number(prompt(`Entrez l'élément n°${i + 1} :`));
          elements.push(sum)
          total *= sum
}
console.log(elements)
console.log("The Total is  : " , total)