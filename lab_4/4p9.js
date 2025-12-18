// Write a program that prints how long the system has been running (uptime) in seconds and in hours.

const os = require('os');

console.log(os.uptime(),"Seconds");
console.log(os.uptime()/3600,"Hour");