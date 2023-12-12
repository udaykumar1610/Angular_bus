import express from 'express';
import { login, register, registerAdmin } from '../controllers/auth.controller.js';

const router = express.Router();

//register

router.post("/register", register)
router.post("/login",login)

//register as admin
router.post("/register-admin",registerAdmin)

//login
router.post("/login",login)

export default router