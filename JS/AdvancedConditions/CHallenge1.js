const prompt = require ("prompt-sync")();

let income = parseFloat(prompt("Enter Your annuel income :"));
let score =  parseFloat(prompt("Enter Your credit Score :"));
let period = parseFloat(prompt("Enter The Loan Period "));

if ( income >= 30000 && score >= 700 && period <= 10 ){

    console.log("You Are Eligible For The Loan");

}else if (income >= 30000 && score >= 650 && period <= 15){

    console.log("You are Eligible  But with conditions");

} else {
    
    console.log(" Sorry You Not Eligible For Loan ");
}