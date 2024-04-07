import User from "../model/user.model.js";


export const signup = async(req,res,next)=>{
    const {fullName, email, password} = req.body;
    const newUser = new User({fullName, email, password});
    try{
        await newUser.save();
        res.status(201).json("User created successfully");
    }catch(error){
        res.status(500).json(error.message);
        // next(error);
    }
}