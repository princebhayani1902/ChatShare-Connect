import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/errors.js";

export const signup = async (req, res, next) => {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ error: "User is already exist" });
    }
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ fullName, email, password: hashPassword });
    try {
        await newUser.save();
        res.status(201).json("User created successfully");
    } catch (error) {
        res.status(500).json(error.message);
        // next(error);
    }
}

export const signin = async (req, res, next) => {
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
        res.status(201).json("User signin successfully");
    } catch (error) {
        next(error);
    }
}