// Write a program using fs.watch() to monitor changes in watchme.txt. Whenever ƒle content changes, print: "File Changed"

const fs = require('fs');

fs.watch('.', (eventType, filename) => {
  console.log("Event type:",eventType);
  if (filename) {
    console.log("Filename: ",filename);
  }
});