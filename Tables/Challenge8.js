const prompt = require ("prompt-sync")();

let elem = parseFloat(prompt("Enter The Elments Number :"))
let arrays = [];
let arrayscopy = [];


for (let i = 0 ; i < elem ; i++ ){
    let num = parseFloat(prompt(`Enter Your Number  n°${i + 1} : `))
    arrays.push(num)
}

console.log("User Table Numbers :")
 console.log(arrays)

for (let i = 0; i < arrays.length ; i++) {
    arrayscopy.push(arrays[i]);
}


 console.log("Cloned Table :")
 console.log(arrayscopy)    