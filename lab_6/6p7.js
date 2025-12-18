// Write a program to list all ƒles in a folder called documents/ using fs.readdir() and print the ƒle names one by one.

const fs = require('fs');

fs.readdir("../lab_6",(err,data)=>{
    if(err){
        console.log("Error :",err);
        return;
    }
    else{
        console.log("-:Data is here :-");
        data.forEach((file) => {
            console.log(file);
        });
    }
})