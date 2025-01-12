import BlogPost from "../models/BlogPost.js";

const isCommentOwner = async (req, res, next) => {
    try {
      const post = await BlogPost.findById(req.params.id);
      const comment = post.comments.id(req.params.commentId);
  
      if (!comment) {
        return res.status(404).send('Comment not found');
      }
  
      if (comment.userUid !== req.user.uid) {
        return res.status(403).send("You are not authorized to modify this comment");
      }
  
      next(); 
    } catch (error) {
      console.error('Error in isCommentOwner middleware:', error);
      res.status(500).send('Error checking comment ownership');
    }
  };
  
  export default isCommentOwner;