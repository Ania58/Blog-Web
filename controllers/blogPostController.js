import BlogPost from "../models/BlogPost.js";

const getPosts = async (req, res) => {
    try {
        const posts = await BlogPost.find().select('title content');
        res.render("index.ejs", { posts })
    } catch (error) {
        res.status(500).json({ message: "There was an error fetching the posts" });
    }
}

const createPost = async (req, res) => {
    try {
        const title = req.body["title"];
        const content = req.body["content"];
        const userUid = req.user.uid;
        await BlogPost.create({title, content, userUid});
        res.redirect("/");
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: "There was a problem trying to create a post" });
    }
}

const showPostById = async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id).select('title content comments');
        res.render("showPost.ejs", { post })
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).json({ message: "There was a problem trying to fetch a post" });
    }
}

const showUpdateForm = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await BlogPost.findByIdAndUpdate(req.params.id, { title, content })
        res.render("updatePost.ejs", { post })
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ message: "There was a problem trying to update a post" });
    }
}

const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        await BlogPost.findByIdAndUpdate(req.params.id, { title, content });
        res.redirect(`/posts/${req.params.id}`);
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ message: "There was a problem trying to update a post" });
    }
  };

const showDeleteForm = async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        if (!post) {
            return res.status(404).send("Post not found");
          }
        res.render("deletePost.ejs", { post });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ message: "There was a problem trying to delete a post" });
    }
}


const deletePost = async (req, res) => {
    try {
        await BlogPost.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ message: "There was a problem trying to delete a post" });
    }
}


const addComment = async (req, res) => {
    try {
        const { text } = req.body;
        const postId = req.params.id;
        const userUid = req.user.uid; 
        const username = req.user.name || "Anonymous";
        const post = await BlogPost.findById(postId);

        if (!post) {
            return res.status(404).send("Post not found");
        }
        post.comments.push({ username, text, userUid });
        await post.save();
        res.redirect(`/posts/${postId}`);
    } catch (error) {
        console.error('Error adding a comment:', error);
        res.status(500).json({ message: "There was a problem trying to add a comment" });
    }
}

const updateComment = async (req, res) => {
    try {
        const { id, commentId } = req.params; 
        const { text } = req.body;
    
        const post = await BlogPost.findOneAndUpdate(
          { _id: id, "comments._id": commentId }, 
          { $set: { "comments.$.text": text } }, 
          { new: true } 
        );
  
      if (!post) {
        return res.status(404).send("Post or comment not found");
      }
  
      res.redirect(`/posts/${id}`); 
    } catch (error) {
      console.error("Error updating comment:", error);
      res.status(500).json({ message: "There was a problem updating the comment." });
    }
  };

  const deleteComment = async (req, res) => {
    try {
      const { id, commentId } = req.params; 
  
      const post = await BlogPost.findByIdAndUpdate(
        id, 
        { $pull: { comments: { _id: commentId } } }, 
        { new: true } 
      );
  
      if (!post) {
        return res.status(404).send("Post or comment not found");
      }
  
      res.redirect(`/posts/${id}`);
    } catch (error) {
      console.error("Error deleting comment:", error);
      res.status(500).json({ message: "There was a problem deleting the comment." });
    }
  };


export { getPosts, createPost, showPostById, showUpdateForm, updatePost, showDeleteForm, deletePost, addComment, updateComment, deleteComment };