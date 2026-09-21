const prompt = require("prompt-sync")();

const nums = parseInt(prompt("Enter the number of elements: "));
let array = [];

for (let i = 0; i < nums; i++) {
    array[i] = parseInt(prompt(`Enter number ${i + 1}: `));
}

let n = array.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log("Sorted arrays:", array);

