// Write a program that prints the total memory and free memory in GB

const { log } = require('console');
const os = require('os');


console.log(os.totalmem()/(1024*1024*1024));
console.log(os.freemem()/(1024*1024*1024));