import express from "express";
import {
  postAcademicRecords,
  getAcademicRecords,
} from "../controllers/academicRecords/academicRecordsController.js";
const router = express.Router();

router.post("/post", postAcademicRecords);
router.get("/get", getAcademicRecords);

export default router;
