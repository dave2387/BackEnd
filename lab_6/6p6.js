// Write a program that creates a folder named my-data using fs.mkdir(). If the folder already exists, show an appropriate message. 

const fs = require('fs');

fs.mkdir("my-data",recursive=true,(err)=>{
    if(err){
        console.log("Error :",err);
    }
    console.log("Directory created successfully...");
})