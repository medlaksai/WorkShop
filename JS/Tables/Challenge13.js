const prompt = require("prompt-sync")();

let elem = parseInt(prompt("Enter Your Number OF elements :"))
let arrays = []
let odd = []

for (let i = 0 ; i < elem ; i++ ){
    let nums = parseInt(prompt(`Enter Your Number ${i +1} :`))
    arrays.push(nums)
}

for (let i = 0 ; i < arrays.length ; i++ ){
    if (arrays[i]% 2== 1){
        odd.push(arrays[i])
        }
}
console.log ("Your Nums Are :" , arrays)
console.log("Your Even Number Are : " , odd)