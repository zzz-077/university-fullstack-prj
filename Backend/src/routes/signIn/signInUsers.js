import express from "express";
import { signInController } from "../../controllers/signInController.js";
const router = express.Router();

router.post("/", signInController);

export default router;
