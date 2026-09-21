const prompt = require("prompt-sync");
let a = 10;

console.log(`A = ${a} before changes `)

a += 4;
console.log(` += 4 :  ${a}`);
a -= 4;
console.log(` -= 4 :  ${a}`);
a *= 4;
console.log(` *= 4 :  ${a}`);
a /= 4;
console.log(` /= 4 :  ${a}`);