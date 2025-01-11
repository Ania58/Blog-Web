import express from "express";

const router = express.Router();

import getPosts from "./controllers/blogPostController.js";

router.get("/", getPosts);




export default router; 