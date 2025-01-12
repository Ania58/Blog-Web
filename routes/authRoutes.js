import express from "express";
import { registerForm, loginForm, logoutForm, registerUser, loginUser, logoutUser } from "../controllers/authController.js";

const router = express.Router();


router.get("/register", registerForm);  
router.post("/register", registerUser); 

router.get("/login", loginForm);       
router.post("/login", loginUser);       

router.get("/logout", logoutForm);   
router.post("/logout", logoutUser);     

export default router;