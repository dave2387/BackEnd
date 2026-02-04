const express = require('express')
const routerUser = require('./routes/users.route')
const routerMovie = require('./routes/movies.route')
const app = express()

app.use(express.json());

app.use("/users",routerUser)
app.use("/movies",routerMovie)

app.listen(3000,()=>{
    console.log("server started at 3000")
})