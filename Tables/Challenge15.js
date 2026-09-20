const prompt = require ("prompt-sync")();

let elem1 = parseInt(prompt("Enter How Many Elemnts IN First One :"))

let array1 = []
let array2 = []
let arrymerg = []

for (let i = 0 ; i < elem1 ; i++){
    let num1 = parseInt(prompt("Enter a Number : "))
    array1.push(num1)
}
let elem2 = parseInt(prompt("Enter How Many Elements on Second One :"))

for (let i = 0 ; i < elem2 ; i++){
    let num2 = parseInt(prompt("Enter a Number : "))
    array2.push(num2)
}
for (let i = 0 ; i < elem1 ; i++ ){
    arrymerg.push(array1[i])
}
for (let i = 0 ; i < elem2 ; i++){
    arrymerg.push(array2[i])
}
console.log(array1)
console.log(array2)
console.log(arrymerg)