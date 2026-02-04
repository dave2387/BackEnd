const { getAll, getByID, insert, update, deleteById } = require("../models/movies.model");

async function getAllMovies(){
    const data = await getAll();
    if(data){
        return{
            error: false,
            data,
            message: "movies fetched success"
        }
    }
    else{
        return{
            error: true,
            message: "some error occured while fetching movies"
        }
    }
}

async function getMovieByID(id){
    const data = await getByID(id);
    if(data){
        return{
            error: false,
            data,
            message: "movies fetched success"
        }
    }
    else{
        return{
            error: true,
            message: "some error occured while fetching movie"
        }
    }
}

async function insertMovie(formData){
    const data = await insert(formData);
    if(data){
        return{
            error: false,
            data,
            message: "movies inserted success"
        }
    }
    else{
        return{
            error: true,
            message: "some error occured while inserting movie"
        }
    }
}

async function updateMovie(id,formData){
    const data = await update(id,formData);
    if(data){
        return{
            error: false,
            data,
            message: "movies updated success"
        }
    }
    else{
        return{
            error: true,
            message: "some error occured while updating movies"
        }
    }
}

async function deleteMovie(id){
    const data = await deleteById(id);
    if(data){
        return{
            error: false,
            data,
            message: "movies delete success"
        }
    }
    else{
        return{
            error: true,
            message: "some error occured while deleting movies"
        }
    }
}

module.exports = {getAllMovies,getMovieByID,insertMovie,updateMovie,deleteMovie}