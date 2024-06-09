import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import middlewareRouter  from "./src/middleware/index.js";
import routesRouter  from "./src/routes/userRoutes.js";

dotenv.config();
const app = express();

app.use(middlewareRouter);


app.use("/", routesRouter);

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
