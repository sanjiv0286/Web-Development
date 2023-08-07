console.log("This is tutorial 53");
// ======================================================
// let name = "Harry";
// let name1 = "Shubham";
// let name2 = "Rohan";
// let name3 = "Sagar";
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// ======================================================
// function greet(name) {
//     console.log(name + " is a good boy");
// }
// let name = "Harry";
// let name1 = "Shubham";
// let name2 = "Rohan";
// let name3 = "Sagar";
// greet(name);
// greet(name1);
// greet(name2);
// greet(name3);
// =======================================================
// function greet(name, greetText) {
//     console.log(greetText + " " + name);
//     console.log(name + " is a good boy");
// }
// let name = "Harry";
// let name1 = "Shubham";
// let name2 = "Rohan";
// let name3 = "Sagar";
// let greetText = "Good Morning";
// greet(name, greetText);
// greet(name1, greetText);
// greet(name2, greetText);
// greet(name3, greetText);
// ================================================


function greet(name, greetText = "Greetings from JavaScript") { //default value
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
    // This line will never execute (Unreachable code)//************************//
    // console.log("Function is returned");
}


let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText1 = "Good Morning";
greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);
// greet(name3);

// let returnVal = greet(name3);
// console.log(returnVal) // Undefined

let returnVal = sum(1, 2, 3);
console.log(returnVal)

// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");