import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async(req,res,next)=>{
    const {fullName, email, password} = req.body;
    const hashPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({fullName, email, password:hashPassword});
    try{
        await newUser.save();
        res.status(201).json("User created successfully");
    }catch(error){
        res.status(500).json(error.message);
        // next(error);
    }
}