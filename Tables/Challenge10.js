const prompt = require ("prompt-sync")();
let elem = parseInt(prompt("Enter Number Of Elements :"));
let arrays = [];

for (let i = 0 ; i < elem ; i++){
    let nums = parseInt(prompt(`Enter Your Number  n°${i + 1} : `))
    arrays.push(nums)
}

let search = parseInt(prompt("Enter Your SEARCH Number :"))

for (let i = 0 ;i < arrays.length ; i++ ){
    if ( arrays[i] == search)
    console.log("Your Searched Number Is : " , search)
else {
    console.log("Your Searched Number Doesnt Found")
    break;
}

} 


    
console.log("Your Arryas is :" , arrays)
