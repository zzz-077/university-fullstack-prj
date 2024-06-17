import express from "express";
import {
  postSubjects,
  getSubjects,
} from "../controllers/subjects/subjectsController.js";
const router = express.Router();

router.post("/post", postSubjects);
router.get("/get", getSubjects);

export default router;
