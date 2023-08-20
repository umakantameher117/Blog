import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(console.log("Database connected"));
  } catch (error) {
    console.log("Error connecting to database: " + error.message);
  }
};

export default connectDB;