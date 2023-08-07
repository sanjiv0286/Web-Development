let jsonobj = {
        name: "Harry",
        channel: "CWH",
        friend: "Sanjiv Kushwaha",
        food: "Bhindi"
    }
    // console.log(jsonobj);
    //***********JSON String*****
let myJsonStr = JSON.stringify(jsonobj);
// console.log(myJsonStr);
//*********Json string to object conversion*******
myJsonStr = myJsonStr.replace('Harry', 'Larry');
console.log(myJsonStr);
//*********Json object  to string conversion*******
newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);