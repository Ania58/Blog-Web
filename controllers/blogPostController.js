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
        await BlogPost.create({title, content});
        res.redirect("/");
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: "There was a problem trying to create a post" });
    }
}

const showPostById = async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id).select('title content');
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
        const post = await BlogPost.findByIdAndDelete(req.params.id);
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
        const { username, text } = req.body;
        const postId = req.params.id;
        const post = await BlogPost.findById(postId);

        if (!post) {
            return res.status(404).send("Post not found");
        }
        post.comments.push({ username, text });
        await post.save();
        res.redirect(`/posts/${postId}`);
    } catch (error) {
        console.error('Error adding a comment:', error);
        res.status(500).json({ message: "There was a problem trying to add a comment" });
    }
}


export { getPosts, createPost, showPostById, showUpdateForm, updatePost, showDeleteForm, deletePost, addComment };