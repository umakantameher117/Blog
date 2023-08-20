import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";
import catRouter from "./routes/categories.js";
import connectDB from "./database/db.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errors.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/category", catRouter);

//ErrorMiddleware
app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(process.env.PORT, () => {
  console.log(
    `Server is runnning on port ${process.env.PORT} in ${process.env.NODE_URI} mode`
  );
});
