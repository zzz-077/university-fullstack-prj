import express from "express";
import { getAllUsers, createNewUsers } from "../controllers/userCont.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createNewUsers);

export default router;
