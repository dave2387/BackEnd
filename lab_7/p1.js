const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("Hello world !!");
    res.end(" End !!");
});

server.listen(3000,()=>{
    console.log("Server created successfully ");
});