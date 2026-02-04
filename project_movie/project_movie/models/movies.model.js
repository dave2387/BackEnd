const db = require("../db/mysql");

async function getAll(){
    try{
        const [data,fields] = await db.query(`SELECT * FROM movies`);
        return data;
    }
    catch(err){
        return false;
    }
}

async function getByID(id){
    try{
        const [data,fields] = await db.query(`SELECT * FROM movies where MovieID=`+id);
        return data[0];
    }
    catch(err){
        return false;
    }
}

async function insert(formData){
    try{
        const [data,fields] = await db.query(`INSERT INTO movies (MovieID, MovieName, MovieImage) VALUES (NULL, '${formData.MovieName}', '${formData.MovieImage}');`);
        return data;
    }
    catch(err){
        return false;
    }
}

async function update(){
    try{
        const [data,fields] = await db.query(`UPDATE movies SET MovieName = '${formData.MovieName}', MovieImage = '${formData.MovieImage}' WHERE movies.MovieID = ${id};`);
        return data;
    }
    catch(err){
        return false;
    }
}

async function deleteById(id){
    try{
        const [data,fields] = await db.query(`DELETE FROM movies WHERE movies.MovieID = '${id}'`);
        return data;
    }
    catch(err){
        return false;
    }
}

module.exports = {getAll,getByID,insert,update,deleteById}