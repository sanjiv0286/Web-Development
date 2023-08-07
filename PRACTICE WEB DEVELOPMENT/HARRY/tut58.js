console.log("This is tutorial 58");
// setTimeout --> Alllows us to run the function once after the interval of time
// setinterval --> Alllows us to run the function repeatedly after the interval of time

// function greet(name, byetext) {
//     console.log("Hello , good Morning " + name + " " + byetext);
// }
//(1)
// setTimeout(greet, 1000, "harry", "TakeCare");
// ********************
//(2)
// setTimeout(greet(), 12000); --> Wrong as it is calling the function inside setTimeout
// ************************
//(3)ek id deta hai aur fir hum cleartimeout(id) ki madad se use clear ka sakte hai
// timeout = setTimeout(greet, 9000, "harry", "TakeCare");
// console.log(timeout);
// *******************************
//(4)
// setInterval(greet, 1000, "harry", "taketare");
// **********************
//(5)
// IntervalId = setInterval(greet, 2000, "harry", "taketare");
// clearInterval(IntervalId);// ye jo print ho rha use bar bar clear kar rha
//**************************
//(6)

function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);