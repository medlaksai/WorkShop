const prompt = require ("prompt-sync")();

let n = parseInt(prompt("Enter Your Number :"));
let facto = 1;

for (let i=1 ; i <= n ; i++){
    facto *= i;
}
console.log(`${n} is factoriel of ${facto}`)