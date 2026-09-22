const prompt = require ("prompt-sync")();
let text = prompt("Enter Your Text :")
let txt = prompt("Enter Your Char")
let count = 0;

for (let i = 0 ; i < text.length ; i++){
    if (txt === text[i]){
        count++

    }
else{
        console.log("No Matching Found")
    }
}
console.log(count)