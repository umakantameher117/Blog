import User from "../models/User.js";
import Post from "../models/Post.js";

export const createPost = async (req, res, next) => {
  try {
    const username = req.user.username;

    const newPostData = {
      username: username,
      title: req.body.title,
      description: req.body.description,
      photo: req.body.photo,
      category: req.body.category,
    };

    const newPost = new Post(newPostData);

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json("Post Deleted");
  } catch (error) {
    next(error);
  }
};

export const getPost = async(req, res) => {
    console.log(req.params);
    const post = await Post.findById(req.params.id)
  res.status(200).json(post);
};

export const getAllPost=async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        console.log(username);
        posts = await Post.find({ username });
        console.log(posts);
      } else if (catName) {
        console.log(catName);
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  };