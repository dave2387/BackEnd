//  6) Write a program that prints: (A)
//  • Operating system name
//  • Release version
//  • Platform
//  • Architecture

const os = require('os');

console.log(os.version());
console.log(os.release());
console.log(os.platform());
console.log(os.arch());