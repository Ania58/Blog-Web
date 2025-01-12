import express from "express";
import { registerForm, loginForm, registerUser, loginUser, logoutUser } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


router.get("/register", registerForm);  
router.post("/register", registerUser); 

router.get("/login", loginForm);       
router.post("/login", loginUser);       

router.post("/logout", logoutUser);     

router.get("/dashboard", authMiddleware);

export default router;