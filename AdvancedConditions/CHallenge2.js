const prompt = require ("prompt-sync")();

let primeDeBase = 500;
let age = parseFloat(prompt("Enter Your Age :"));
let type = parseFloat(prompt("ENter Your Car Type number : 1: sportive , 2: utilitaire 3: familiale :"));
let accidents = parseFloat(prompt(" nombre d'accidents 5 d'anne derniere : "));

if (age < 25) {
    primeDeBase *= 1.5;
} else if (age > 65) {
    primeDeBase *= 1.2;
} 

if (type === 1) {
    primeDeBase *= 2;
} else if (type === 2) {
    primeDeBase *= 1.2;
} else if (type === 3) {
    primeDeBase *= 1.1;
}

if (accidents > 1) {
    primeDeBase *= 1.3; // +30%
}

console.log(`Votre prime d'assurance sera de : ${primeDeBase} €`);