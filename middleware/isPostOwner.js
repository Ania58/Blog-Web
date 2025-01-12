import BlogPost from "../models/BlogPost.js";

const isPostOwner = async (req, res, next) => {
    try {
      const post = await BlogPost.findById(req.params.id);
      if (!post) {
        return res.status(404).send('Post not found');
      }
  
      if (post.userUid !== req.user.uid) {
        return res.status(403).send("You are not authorized to modify this post");
      }
  
      next(); 
    } catch (error) {
      console.error('Error in isPostOwner middleware:', error);
      res.status(500).send('Error checking post ownership');
    }
  };

  export default isPostOwner;