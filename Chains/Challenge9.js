const prompt = require ("prompt-sync")();
let text = prompt("Enter a Text  : ")

const txt = text.split(" ")
console.log(txt.join(""))