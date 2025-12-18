// 1. Create a hello world webapp using ExpressJS. (A)

const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.status(200);
    res.send("Home Page ");
});

app.listen(3000, (req, res) => {
    console.log("Server started at port 3000");
});