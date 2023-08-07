let myVar = 34;
let myVar2 = "string";
let myVar3 = true;
let myVar4 = null;
let myVar5 = undefined;

// let employee = {
//     name: "Harry",
//     salary: 10,
//     channel: "CodeWithHarry",
//     channel2: " ProgrammingWithHarry ",
// }
// console.log(employee);
// =======================================
// // METHOD--1
// let names = [1, 2, 4, "Harry", undefined];
// console.log(names[0]);
// console.log(names[3]);
// console.log(names[4]);
// console.log(names[5]);

// METHOD--2
// let names = new Array(41, 2, 4, undefined, "Harry");

let names = new Array(23); //THIS DEFINE 23 ELEMENTS IN THE ARRAY
console.log(names.length);
names = names.sort();
names.push("this is pushed");
console.log(names);