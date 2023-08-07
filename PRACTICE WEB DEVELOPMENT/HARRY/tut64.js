// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, 'amit.txt');
// data = fs.readFileSync(filePath, 'utf8');

// console.log("The content of the file is");
// console.log(data);

// data = data.replace("sanjiv", "Sanjiv Kushwaha");
// console.log(data);

// console.log("Creating a new file...");
// fs.writeFileSync("sanjiv.txt", data);
// ======================================================
const fs = require("fs");
let text = fs.readFileSync("\amit.txt", "utf-8");
text = text.replace("sanjiv", "sanjiv kushwaha");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("rohan.txt", text);