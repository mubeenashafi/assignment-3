var readlineSync = require("readline-sync");
let num=readlineSync.question("enter a number");
if(num==1){
    console.log("sunday");
}
else if(num==2){
    console.log("monday");
}
else if(num==3){
    console.log("tuesday");
}
else if(num==4){
    console.log("wednesday");
}
else if(num==5){
    console.log("thursday");
}
else if(num==6){
    console.log("friday");
}
else if(num==7){
    console.log("saturday");
}