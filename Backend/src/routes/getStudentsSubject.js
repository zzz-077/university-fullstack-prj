import express from "express";
import getStudentssubject from "../controllers/student/getStudentSubjectsController.js";
const router = express.Router();

router.get("/allSubject", getStudentssubject);
export default router;
