const prompt = require ("prompt-sync")();

let elem = parseInt(prompt("Enter Number Of Elements : "))
let arrays = []
let sum = 0;
for (let i = 0 ; i < elem ; i++){
    let nums = parseInt(prompt(`Enter Your Number ${i +1} :`))
    arrays.push(nums)
}
for (let i = 0 ; i < arrays.length ; i++){
     sum = sum + arrays[i]
     
}
let avrage = sum / arrays.length

console.log(sum)
console.log("Avrage is :", avrage)
console.log(arrays)