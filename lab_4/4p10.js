// 10) Write a Node.js program that prints: (B)
//  • Number of CPU cores
//  • Model name of each core
//  • Network interface details

const os = require('os');

console.log(os.cpus());
console.log("\nCPU Core Details:");
os.cpus().forEach((core, index) => {
    console.log(`Core ${index + 1}: ${core.model}`);
});

console.log(os.networkInterfaces());