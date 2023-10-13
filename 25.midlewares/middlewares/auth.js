const auth = (req,res,next)=>{
    if(req.body.isAdmin){
        next()
    }else{
        res.status(401).end()
    }
}

module.exports = auth