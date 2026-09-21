const prompt = require("prompt-sync")();

let string = prompt("Enter Your Main Char : ")
let substring = prompt("Enter Your Sub One :")

if (string.includes(substring)){
    console.log("Match Found !")
}else {
    console.log("Not Match Found !")
}