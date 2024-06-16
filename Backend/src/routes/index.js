import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import adminCreateUserRoutes from "./admin/createUser.js";
import signInUserRoutes from "./signIn/signInUsers.js";
import subjectsRoutes from "./subjects/subjects.js";
import academicRecordsRoutes from "./academicRecord/academicRecord.js";
import { checkIfSignedIn } from "../controllers/checkIfSignedIn.js";
import { logoutController } from "../controllers/logoutController.js";
const router = express.Router();

router.use("/admin", authenticate, adminCreateUserRoutes);
router.use("/signin", signInUserRoutes);
router.use("/subjects", subjectsRoutes);
router.use("/academicRecords", academicRecordsRoutes);
router.get("/auth/status", checkIfSignedIn);
router.get("/logout", logoutController);
export default router;
