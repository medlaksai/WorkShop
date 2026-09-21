const prompt = require ("prompt-sync")();
let char = prompt("Enter Your Character : ")
let charrev = "";

for (let i = char.length - 1  ; i >= 0 ; i--){
 
    charrev = charrev + char[i]
}
console.log(charrev)
