import express from "express";
import updateGrades from "../controllers/lecturer/gradeUpdateController.js";
const router = express.Router();

router.put("/grades", updateGrades);

export default router;
