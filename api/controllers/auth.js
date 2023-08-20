import User from "../models/User.js";
import bcrypt from 'bcrypt'
import sendCookie from '../utility/features.js';
import ErrorHandler from "../middlewares/errors.js";

export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return next(new ErrorHandler("user already exists", 400));
    }
    const hashPassword = await bcrypt.hash(password, 10);
    user = await User.create({ username, email, password: hashPassword });
    res.send(201).json(user)
    sendCookie(user, res, "Registered Successfully", 201);
    
  } catch (error) {
    next(error);
    console.log(error);
  }
};
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("user not found", 404));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return next(new ErrorHandler("Either Email or Pasword is invalid", 400));
    }
    sendCookie(user, res, `Welcome back, ${user.username}`, 200);
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_URI === "Development" ? "lax" : "none",
      secure: process.env.NODE_URI === "Development" ? false : true,
    })
    .json({
      success: true,
    });
};
