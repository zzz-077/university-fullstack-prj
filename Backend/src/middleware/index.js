import cors from "cors";
import express from "express";
import router from "../routes/userRoutes.js";
// const router = express.Router();
router.use(
  cors({
    origin: `http://localhost:${process.env.FRONTEND_PORT}`,
  })
);
router.use(express.json());

export default router;
