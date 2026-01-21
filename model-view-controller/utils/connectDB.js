import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose connected successfully");
  } catch (error) {
    console.error("Mongoose connection failed:", error.message);
  }
};

export default connectDB;
