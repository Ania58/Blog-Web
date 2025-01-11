import express from "express";

const router = express.Router();

import { getPosts, createPost } from "../controllers/blogPostController.js";

router.get("/", getPosts);
router.post("/create", createPost);
router.get("/create", (req, res) => res.render("createPost.ejs"));




export default router; 