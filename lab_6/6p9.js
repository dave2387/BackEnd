//  Write a program that checks if the ƒle conƒg.json exists in the current directory using fs.existsSync() and prints the result.

const fs = require('fs');


if (fs.existsSync("hello.txt")) {
    console.log("file exist");
}
else{
    console.log("File not exist")
}