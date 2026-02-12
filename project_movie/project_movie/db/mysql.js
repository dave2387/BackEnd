const {createPool} = require('mysql2/promise')

const db = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"movie",
    connectionLimit:10
});

console.log("DB connected");

module.exports = db