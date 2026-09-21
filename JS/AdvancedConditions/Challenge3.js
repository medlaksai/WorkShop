const prompt = require("prompt-sync")();

let vacationdays = parseInt(prompt("Enter Days Granted :"));
let useddays = parseInt(prompt("Enter How Many Days You Used :"));
let status = parseFloat(prompt("Choose Your Status : 0 - Part Time 1 - Full Time"));




//Full-time: Days remaining = Days granted - Days used
//Part-time: Days remaining = (Days granted / 2) - Days used
//If the days used exceed the days allowed, display an alert message.