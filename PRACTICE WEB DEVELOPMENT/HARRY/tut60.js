// *******(1)**********************
// function greet() {
//     console.log('Good morning');
// }
// greet();
/****************(2)*************************/
//Arrow Function in javascript
// ***************Method (1)**********
// greet = () => {
//     console.log('Good morning');
// }
// greet();
// **********Method (2)**************
greet = () => console.log('Good morning');
greet();
/****************(3)*************************/
// setTimeout ko access karne ka naya tateka  simple method
setTimeout(() => {
    console.log("we are inside setTimeout")
}, 3000);

/****************(4)*************************/
// Method- 1 
// let sum2 = (a, b) => {
//     return a + b;
// };
// Method- 2 
let sum2 = (a, b) => a + b;
/****************(5)*************************/
let half = (a) => a / 2;
/****************(6)*************************/
let obj1 = {
    greeting: "Good Morning",
    names: ["Harry", "Rohan", "SkillF", "DjKhiladi"],
    speak() {
        this.names.forEach((student) => {
            console.log(this.greeting + " Kukdoo Koo " + student);
        });
    }
}
obj1.speak();