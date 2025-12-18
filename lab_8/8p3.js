// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using express (C )

const express = require('express')
const fs = require('fs');

const app = express();

app.get("/", (req, res) => {
    res.status(200);
    fs.readFile("Hello.txt",(err,data)=>{
        if(err){
            console.log("Error",err);
        }
        res.send(data.toString()); 
    });
});

app.listen(3001, (req, res) => {
    console.log("Server started at port 3000");
});