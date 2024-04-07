import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errors.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res, next) => {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ error: "User is already exist" });
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ fullName, email, password: hashPassword });
    try {
        if (newUser) {
            //generate JWT token here
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).json(error.message);
        // next(error);
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, "User not found"));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, "Wrong credentials!"));
        }
        generateTokenAndSetCookie(validUser._id, res);

        res.status(200).json({
            _id: validUser._id,
            fullName: validUser.fullName,
            email: validUser.email,
            profilePic: validUser.profilePic
        });

    } catch (error) {
        next(error);
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.clearCookie('jwt');
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}