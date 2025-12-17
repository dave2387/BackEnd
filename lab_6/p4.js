//  Create a program that appends the text into a ƒile named output.txt

const fs = require('fs');

fs.appendFile("writedemo.txt","Hello this is demo for write file for you ",(err)=>{
    if(err){
        console.log("Error :",err);
    }
    else{
        console.log("File updated successfully");
    }
})