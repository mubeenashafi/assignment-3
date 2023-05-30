var readlineSync = require("readline-sync");
let num=readlineSync.question("enter a number")

if(num%2==0){
    console.log("entered even number");
}
else{
    console.log("entered odd number");
}

