import express from "express";
import adminCreateUserRoutes from "./admin/createUser.js";
import signInUserRoutes from "./signIn/signInUsers.js";

const router = express.Router();

router.use("/admin", adminCreateUserRoutes);
router.use("/signIn", signInUserRoutes);

export default router;
