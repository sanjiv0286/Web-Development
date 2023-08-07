// ***** This function help us to access other js modules*******
// require("./tut61.js");
// ========================================
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'amit.txt');
const data = fs.readFileSync(filePath, 'utf8');

console.log(data);

// ************************************
// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire
// ************************************
// console.log("hello Sanjiv , Good Morning");
// const fs = require("fs");
// // // *********** WHAT IS THE ERROR***************
// fs.readFile("amit.txt", "utf-8", (err, data) => {
//     console.log(data);
// });
// // // ************************************
// console.log("This is a message");