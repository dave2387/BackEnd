//  Write a Node.js program that prints the directory name, file name, file extension, and full path of the code file.

const { log } = require('console');
const path = require('path');

console.log("directory :",__dirname);
console.log("File name :",path.basename(__filename));
console.log("File extention :",path.extname(__filename));
console.log("Full path :",__filename);