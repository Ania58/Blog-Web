import express from "express";

const router = express.Router();

import { getPosts, createPost, showPostById, showUpdateForm, updatePost, showDeleteForm, deletePost, addComment, updateComment, deleteComment } from "../controllers/blogPostController.js";

import isCommentOwner from "../middleware/isCommentOwner.js";
import isPostOwner from "../middleware/isPostOwner.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/", getPosts);
router.post("/create", authMiddleware, createPost);
router.get("/create", authMiddleware, (req, res) => res.render("createPost.ejs"));
router.get("/posts/:id", showPostById);
router.get("/posts/:id/edit", authMiddleware, showUpdateForm);
router.put("/posts/:id", authMiddleware, isPostOwner, updatePost);
router.get("/posts/:id/delete",authMiddleware, showDeleteForm);
router.delete("/posts/:id", authMiddleware, isPostOwner, deletePost);
router.post("/posts/:id/comments", authMiddleware, addComment); 
router.put("/posts/:id/comments/:commentId", authMiddleware, isCommentOwner, updateComment); 
router.delete("/posts/:id/comments/:commentId", authMiddleware, isCommentOwner, deleteComment);
router.get("/dashboard", authMiddleware, getPosts);




export default router; 