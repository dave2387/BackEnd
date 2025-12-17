// Create a program that writes the text into a ƒile named output.txt.

const fs = require('fs');

fs.writeFile("writedemo.txt","Hello this is demo for write file",(err)=>{
    if(err){
        console.log("Error :",err);
    }
    else{
        console.log("File created successfully");
    }
})

//syncronas way for this 

// try{
//     fs.writeFileSync("hello.txt","Hello this is demo for write file")
//         console.log("File created successfully");
// }
// catch(err){
//     console.log("Error :",err);
// }