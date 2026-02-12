var jwt = require('jsonwebtoken')

function authMiddleware(req,res,next){
    try {
        if(req.url.toString().indexOf('login')>-1){
            next()
        }
        else{
            var decoded = jwt.verify(req.headers.authorization.split(" ")[1], 'Hellooo');
            next()
        }
    } catch(err) {
        res.status(403).send({error:true,message:"unauthorize"})
    }
}

module.exports = {authMiddleware}