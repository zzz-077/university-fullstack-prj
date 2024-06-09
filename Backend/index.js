import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./src/middleware/index.js";
// import router from "./src/routes/userRoutes.js";

dotenv.config();
const app = express();

app.use("/", router);

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
