//  Write a program to delete a ƒile named temp.txt using fs.unlink() and display success or error

const fs = require('fs');

fs.unlink("delete.txt",(err)=>{
    if(err){
        console.log("Error  :",err);
    }
    else{
        console.log("Deleted successfully !!!");
    }
})