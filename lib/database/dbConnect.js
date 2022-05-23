import mongoose from "mongoose";

const { MONGODB_URL } = process.env;

export default async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("ERROR: could not connect.", error.message);
  }
}
