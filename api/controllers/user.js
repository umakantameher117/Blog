import User from "../models/User.js";
import bcrypt from "bcrypt";
export const updateProfile = async (req, res, next) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    res
      .status(401)
      .json({ message: "Unauthorized User. You can only update your account" });
  }
};

export const deleteProfile = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        // await Post.deleteMany({ username: user.username });
        // console.log('post udeideli');
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
};

export const getProfile = (req, res) => {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  };
