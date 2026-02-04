const { getAll, getByID, insert, update, deleteById, getByUserName } = require("../models/users.model")
var jwt = require('jsonwebtoken')

async function getAllUsers(){
    const data = await getAll();
    if(data){
        return {
            error : false,
            data,
            message :"user fetched success"
        }
    }
    else{
        return {
            error : true,
            message :"some error occured while fetching the user"
        }
    }
}

async function getUserByID(id){
    const data = await getByID(id);
    if(data){
        return {
            error : false,
            data,
            message :"user fetched success"
        }
    }
    else{
        return {
            error : true,
            message :"some error occured while fetching the user"
        }
    }
}

async function checkLogin(formData){
    const data = await getByUserName(formData.UserName);
    var token = jwt.sign(data, 'shhhhh');
    if(data){
        if(data.Password===formData.Password){
            return {
                error : false,
                data:token,
                message :"user inserted success"
            }
            
        }
        return {
            error : true,
            message :"UserName/password does not match"
        }
    }
    else{
        return {
            error : true,
            message :"UserName/password does not match"
        }
    }
}

async function inserUser(formData){
    const data = await insert(formData);
    if(data){
        return {
            error : false,
            data,
            message :"user inserted success"
        }
    }
    else{
        return {
            error : true,
            message :"some error occured while inserting the user"
        }
    }
}

async function updateUser(id,formData){
    const data = await update(id,formData);
    if(data){
        return {
            error : false,
            data,
            message :"user updated success"
        }
    }
    else{
        return {
            error : true,
            message :"some error occured while updating the user"
        }
    }
}

async function deleteUser(id){
    const data = await deleteById(id);
    if(data){
        return {
            error : false,
            data,
            message :"user delete success"
        }
    }
    else{
        return {
            error : true,
            message :"some error occured while deleting the user"
        }
    }
}

module.exports={getAllUsers,getUserByID,inserUser,updateUser,deleteUser,checkLogin}    