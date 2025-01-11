import express from "express";

const router = express.Router();

import { getPosts, createPost, showPostById, showUpdateForm, updatePost, showDeleteForm, deletePost, addComment, updateComment, deleteComment } from "../controllers/blogPostController.js";

router.get("/", getPosts);
router.post("/create", createPost);
router.get("/create", (req, res) => res.render("createPost.ejs"));
router.get("/posts/:id", showPostById);
router.get("/posts/:id/edit", showUpdateForm);
router.put("/posts/:id", updatePost);
router.get("/posts/:id/delete",showDeleteForm);
router.delete("/posts/:id", deletePost);
router.post("/posts/:id/comments", addComment); 
router.put("/posts/:id/comments/:commentId", updateComment); 
router.delete("/posts/:id/comments/:commentId", deleteComment);




export default router; 