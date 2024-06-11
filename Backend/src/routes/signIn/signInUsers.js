import express from "express";
import { signInController } from "../../controllers/signInController.js";
const router = express.Router();

router.get("/", signInController);

export default router;
