const prompt = require ("prompt-sync")();

let elem = parseInt(prompt("Enter Number Of  Elements :"))

let array = [];
let arrayrev = [];

for (let i = 0 ; i < elem ; i++ ){
    let num = parseInt(prompt(`Enter Your Number  n°${i + 1} : `))
    array.push(num)
}

for (let i = elem - 1 ; i >= 0 ; i-- ){
        arrayrev.push(array[i]);

}

console.log(array)
console.log(arrayrev)