const prompt = require("prompt-sync");

let a = 9;
let b = 4;

console.log(`Before Changes A = ${a} and B = ${b}`);

let temp = a ;
a = b ;
b = temp ;

console.log(`After changes A = ${a} and b = ${b}`);
