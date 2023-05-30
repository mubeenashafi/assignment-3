var readlineSync = require("readline-sync");
let num=readlineSync.question("enter a number to get multiplication table")
for(let i=1;i<=10;i++){
    console.log(i,"*",num,"=",num*i);
}