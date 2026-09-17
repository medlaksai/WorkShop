const prompt = require('prompt-sync')();

let kmperhour = parseFloat(prompt("Enter Km Speed :"));
let mpersecond = kmperhour * 0.27778 
console.log(`the speed in seconds is : ${mpersecond}`);