const express = require('express')
const { getAllMovies, getMovieByID, insertMovie, updateMovie, deleteMovie } = require('../services/movies.service')

const routerMovie =express.Router()

//get all
routerMovie.get("/",async(req,res)=>{
    const data = await getAllMovies();
    res.send(data);
});

//get by id
routerMovie.get("/:id",async(req,res)=>{
    const data = await getMovieByID(req.params.id);
    res.send(data);
});

//insert
routerMovie.post("/",async(req,res)=>{
    const data = await insertMovie(req.body);
    res.send(data);
});

//update
routerMovie.patch("/:id",async(req,res)=>{
    const data = await updateMovie(req.params.id,req.body);
    res.send(data);
});

//delete
routerMovie.get("/:id",async(req,res)=>{
    const data = await deleteMovie(req.params.id);
    res.send(data);
});

module.exports = routerMovie;