const prompt = require("prompt-sync")();

let elem = parseInt(prompt("Enter Your Number OF elements :"))
let arrays = []
let even = []

for (let i = 0 ; i < elem ; i++ ){
    let nums = parseInt(prompt(`Enter Your Number ${i +1} :`))
    arrays.push(nums)
}

for (let i = 0 ; i < arrays.length ; i++ ){
    if (arrays[i]% 2== 0){
        even.push(arrays[i])
        }
}
console.log ("Your Nums Are :" , arrays)
console.log("Your Even Number Are : " , even)