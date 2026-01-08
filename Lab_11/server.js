import express from 'express';
const { dbConnect } = require('./config/db');


dbConnect();
const server = http.createServer((req,res)=>{
    res.end("hello");
});

server.listen(3000,()=>{
    console.log("Server created successfully ");
});