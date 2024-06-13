import express from "express";
import adminCreateUserRoutes from "./admin/createUser.js";
import signInUserRoutes from "./signIn/signInUsers.js";
import subjectsRoutes from "./subjects/subjects.js";
import academicRecordsRoutes from "./academicRecord/academicRecord.js";
const router = express.Router();

router.use("/admin", adminCreateUserRoutes);
router.use("/signin", signInUserRoutes);
router.use("/subjects", subjectsRoutes);
router.use("/academicRecords", academicRecordsRoutes);

export default router;
