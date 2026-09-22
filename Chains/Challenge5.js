const prompt = require ("prompt-sync")();
let text = prompt("Enter Your Text : ")
let rev = "";
for (let i = text.length - 1 ; i >= 0 ; i--){
    rev += text[i]
}
console.log(rev)