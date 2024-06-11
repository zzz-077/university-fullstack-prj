import cors from "cors";
import express from "express";
const router = express.Router();
router.use(
  cors({
    origin: `http://localhost:5173`,
    credentials:true
  })
);
router.use(express.json());


export default router;
