// Challenge 1 : Displaying Information

const prompt = require('prompt-sync')();

const firstname = prompt('What is your First name ? : ');
const lastname = prompt('What is your Last Name ? : ');
const age = prompt('How Old Are You ? : ');
const gender = prompt ('Whats Your Gender ? : ');
const email = prompt ('Whats Your Adress Email ? : ')

console.log(`This is Your Informations :
- First Name : ${firstname}
- Last Name : ${lastname}
- Age : ${age} yo
- Gender : ${gender}
- E-mail : ${email}`);

