const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.statusCode = 200;
        res.end("Home page");
    }
    else if(req.url === '/about'){
        res.statusCode = 200;
        res.end("About page");
    }
    else if(req.url === '/contact'){
        res.statusCode = 200;
        res.end("Contact page");
    }
    else if(req.url === '/network'){
        res.statusCode = 200;
        res.end("Network page");
    }
    else{
        res.statusCode = 404;
        res.end("Not found ");
    }
});

server.listen(3000,()=>{
    console.log("Server created successfully ");
});