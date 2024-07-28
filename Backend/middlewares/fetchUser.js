require('dotenv').config({ path: 'Backend/.env' })
const jwt = require('jsonwebtoken');
const fetchAuthUser=(req,res,next)=>{

    const token=req.headers.authorization.split(' ')[1];
    console.log(process.env.JWT_SECRET_KEY)
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user_id=decoded.id;

    }catch(err){
        return res.status(401).json({error:err})
    }

    next();
}

module.exports=fetchAuthUser