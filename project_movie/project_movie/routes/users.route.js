const express = require('express');
const { getAllUsers, getUserByID, inserUser, updateUser, deleteUser, checkLogin } = require('../services/users.service');
const { authMiddleware } = require('../middlewares/auth.middleware');

const routerUser = express.Router();

routerUser.use(authMiddleware)

//get all
routerUser.get("/",async(req,res)=>{
    const data = await getAllUsers();
    res.send(data);
});

//get by id
routerUser.get("/:id",async (req,res)=>{
    const data = await getUserByID(req.params.id);
    res.send(data);
});

//login
routerUser.post("/login",async(req,res)=>{
    const data = await checkLogin(req.body);
    res.send(data);
});

//insert
routerUser.post("/",async(req,res)=>{
    const data = await inserUser(req.body);
    res.send(data);
});

//edit
routerUser.patch("/:id",async(req,res)=>{
    const data = await updateUser(req.params.id,req.body);
    res.send(data);
});

//delete
routerUser.delete("/:id",async(req,res)=>{
    const data = await deleteUser(req.params.id);
    res.send(data);
});

module.exports = routerUser;