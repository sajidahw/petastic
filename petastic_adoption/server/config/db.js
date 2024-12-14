// const mongoose = require("mongoose");
import mongoose from "mongoose";

// connecting to MongoDB
export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    // console.log(`MongoDB connected: ${connection.connection.host}`);
    console.log(`MongoDB is connected.`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // 1 = failure, 0 = success
  }
};

// module.exports = { connectDB };
