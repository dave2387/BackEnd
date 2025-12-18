// Write a program that copies a ƒle named source.txt to a new ƒle named backup.txt using fs.copyFile()

const fs = require('fs');

fs.copyFile("hello.txt","copy.txt",(err)=>{
    if(err){
        console.log("Error :",err);
    }
    else{
        console.log("File copied successfully...");
    }
})