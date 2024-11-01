import mongoose from "mongoose";
import dotenvx from "@dotenvx/dotenvx";

dotenvx.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://root:example@mongo:27017/test";

export const connectMongooseDb = async () => {
  try {
    console.log('start to connect db', MONGODB_URI);
    await mongoose.connect(MONGODB_URI, {});
    console.log("Mongo DB connected!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}; 
