// Write a Node.js program that uses fs.readFile() to read a ƒle named data.txt asynchronously and print its content on the consoll

const fs = require('fs');

fs.readFile("hello.txt",(err,data)=>{
    if(err){
        console.log("Error :",err);
    }
    console.log("Data :",data.toString());
})