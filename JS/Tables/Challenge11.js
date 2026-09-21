const prompt = require ("prompt-sync")();

let elem = parseInt(prompt(" Enter Your Number Of Elements :"))
let arrays = [];

for (let i = 0 ; i  < elem ; i++){
   let nums = parseInt(prompt(`Enetr Your Number ${i + 1} :`))
    arrays.push(nums)
}

let search = parseInt(prompt("Enter The Value You Want To replace :"))
let replace = parseInt(prompt("Enter New Value :"))

 for (let i = 0 ; i < arrays.length ; i++){
    if (arrays[i] == search ){
        arrays[i] = replace
        }
 }
 
    
console.log(arrays)