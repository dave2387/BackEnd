// Use fs.readFileSync() to read info.txt and print the content, Compare execution with the asynchronous version

const fs = require('fs');

try {
    const data = fs.readFileSync("hello.txt");
    console.log("Data :", data.toString());
}
catch(err){
    console.log("Error :", err);
}
