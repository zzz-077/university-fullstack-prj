import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT, () => {
      console.log("Server is running on porst " + process.env.PORT + "!");
    });
  })
  .catch((error) => {
    console.log("Connection error:", error);
  });
