const prompt = require ("prompt-sync")();

let nums = parseFloat(prompt("Enter The Elments Number :"))
let arrays = [];

for (let i = 0 ; i < nums ; i++ ){
    let num = parseFloat(prompt("Please Enter Your Number : "))
    arrays.push(num)
}
let arrayscopy = [];

 for (let i = à ; i < nums ; i++ ){
     arrays [i] = arrayscopy [i]
 }
 console.log(arrays)
 console.log(arrayscopy)