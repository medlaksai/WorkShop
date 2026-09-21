const prompt = require ("prompt-sync")();
let char1 = prompt("Enter First Character : ")
let char2 = prompt("Enter Second Character : ")


if (char1 == char2){
    console.log("They Are Equal")
} else {
    console.log("Not Equal")
}