//  Write a program that checks whether the given path is absolute or relative paths. 

const path = require('path');

console.log(path.isAbsolute("C:\\Users\\daved\\OneDrive\\Desktop\\BACKEND\\lab_1"));
console.log(path.isAbsolute("./p4.js"));