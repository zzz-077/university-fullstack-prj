import express from "express";
import adminCreateUserRoutes from './admin/createUser.js'
const router = express.Router();

router.use('/admin',adminCreateUserRoutes)