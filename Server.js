const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("Hello world!!!");
    res.end("Bye BYEEEEEE");
});

const port = 3000;
server.listen(port,()=>{
    console.log("Hello world!!!!");
}) 