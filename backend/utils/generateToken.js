import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (emailId, res)=>{
    const token = jwt.sign({emailId},process.env.JWT_SECRET,{
        expiresIn:"10d",
    });

    res.cookie('jwt',token,{
        maxAge:10*24*60*1000, //milliseconds
        httpOnly:true,//prevent XSS attacks cross-site scripting attacks
        sameSite:"strict",//CSRF attacks cross-site request forgery attacks
    })
}

export default generateTokenAndSetCookie;