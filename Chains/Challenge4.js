const prompt = require ("prompt-sync")();
let text1 = prompt("Enter Text 1 : ")
let text2 = prompt("Enter Text 2 : ")

if (text1 === text2){
    console.log("They Are Equal")
    
} else {
    console.log("Not Equal")
}