import express from "express";

const router = express.Router();

import { getPosts, createPost, showPostById, showUpdateForm, updatePost } from "../controllers/blogPostController.js";

router.get("/", getPosts);
router.post("/create", createPost);
router.get("/create", (req, res) => res.render("createPost.ejs"));
router.get("/posts/:id", showPostById);
router.get("/posts/:id/edit", showUpdateForm);
router.put("/posts/:id", updatePost);




export default router; 