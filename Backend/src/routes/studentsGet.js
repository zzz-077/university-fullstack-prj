import express from "express";
import studentsGetController from "../controllers/lecturer/studentsGetController.js";
const router = express.Router();

router.get("/studentsGet", studentsGetController);

export default router;
