const prompt = require ("prompt-sync")();
let text = prompt("Enter Your Text :")
let count = 0;
for ( let i of text){
    count++
}
console.log(count)