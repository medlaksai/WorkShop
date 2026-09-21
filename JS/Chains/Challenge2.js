const prompt = require ("prompt-sync")();
const name = prompt("Please Enter Your Name : ")
let count = 0;
for (let i of name){
    count++;
}
console.log("Your Chains Has " ,count )