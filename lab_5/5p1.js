// Write a Node.js program using child_process.exec() to run the shell command to check the current version of node.

const { exec } = require('child_process');

exec('node --version', (error, stdout, stderr) => {
  if (error) {
    console.log("Error is :",error); // append when any problem in given requested data here (node --version)
    return;
  }
  if (stderr) {
    console.log("Stderr is :",stderr);
    return;
  }
  if (stdout) {
    console.log("stdout is :",stdout);
    return;
  }
});