const prompt = require ("prompt-sync")();
let string = prompt("Enter Your Char : ")
let char = prompt("Enter Your Char : ")
let o  = 0 
let i = 0

while(string.length > i){
    if (string[i] == char){
        o++
        
    } 
    i++
}
console.log("there is " + o  +" characters" )
