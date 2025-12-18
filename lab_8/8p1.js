// 1. Create a hello world webapp using ExpressJS. (A)

const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.status(200);
    res.send("Home Page ");
});

app.get("/about", (req, res) => {
    res.status(200);
    res.send("about Page ");
});

app.get("/contact", (req, res) => {
    res.status(200);
    res.send("contact Page ");
});

app.get("/network", (req, res) => {
    res.status(200);
    res.send("network Page ");
});

app.use((req,res)=>{
    res.status(404);
    res.send("Page not found");
});

app.listen(3000, (req, res) => {
    console.log("Server started at port 3000");
});