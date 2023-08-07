console.log("this is Date and Time Tutorial");
// ******(1)****************
let now = new Date();
console.log(now);
// ******(2)****************
let dt = new Date(1000);
console.log(dt);
// ******(3)****************
// let newDate = new Date("2029-09-30");
// console.log(newDate);
// ******(4)****************
// let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
console.log(newDate);
// ******(5)****************
let yr = newDate.getFullYear();
console.log("This Year is ", yr);
let mon = newDate.getMonth();
console.log("The month is ", mon);
let dat = newDate.getDate();
console.log("The date is ", dat);
let hr = newDate.getHours();
console.log("The hours is ", hr);
let min = newDate.getMinutes();
console.log("The minutes is ", min);
let sec = newDate.getSeconds();
console.log("The seconds is ", sec);
let ms = newDate.getMilliseconds();
console.log("The mili seconds is ", ms);

// ******(6)****************
newDate.setDate(15);
newDate.setMinutes(29);
console.log(newDate);
//date 32 likheto ye apne apko automatically correct kar lega
// ******(7)****************
// Date.now() //in console
// ******(8)****************
setInterval(updateTime, 1000);

function updateTime() {
    time.innerHTML = new Date();
}