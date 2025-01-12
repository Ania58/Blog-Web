import express from "express";

const router = express.Router();

import { getPosts, createPost, showPostById, showUpdateForm, updatePost, showDeleteForm, deletePost, addComment, updateComment, deleteComment } from "../controllers/blogPostController.js";

import isCommentOwner from "../middleware/isCommentOwner.js";
import isPostOwner from "../middleware/isPostOwner.js";
import ensureAuthenticated from "../middleware/ensureAuthenticated.js";

router.get("/", getPosts);
router.post("/create", ensureAuthenticated, createPost);
router.get("/create", ensureAuthenticated, (req, res) => res.render("createPost.ejs"));
router.get("/posts/:id", showPostById);
router.get("/posts/:id/edit",  ensureAuthenticated, showUpdateForm);
router.put("/posts/:id", ensureAuthenticated, isPostOwner, updatePost);
router.get("/posts/:id/delete", ensureAuthenticated, showDeleteForm);
router.delete("/posts/:id", ensureAuthenticated, isPostOwner, deletePost);
router.post("/posts/:id/comments", ensureAuthenticated, addComment); 
router.put("/posts/:id/comments/:commentId", ensureAuthenticated, isCommentOwner, updateComment); 
router.delete("/posts/:id/comments/:commentId", ensureAuthenticated, isCommentOwner, deleteComment);
router.get("/dashboard", ensureAuthenticated, getPosts);




export default router; 