import express from "express";

const router = express.Router();

import { getPosts, createPost, showPostById } from "../controllers/blogPostController.js";

router.get("/", getPosts);
router.post("/create", createPost);
router.get("/create", (req, res) => res.render("createPost.ejs"));
router.get("/posts/:id", showPostById)




export default router; 