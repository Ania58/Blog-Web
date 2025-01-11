import BlogPost from "../models/BlogPost.js";

const getPosts = async (req, res) => {
    try {
        const posts = await BlogPost.find();
        res.render("index.ejs", { posts })
    } catch (error) {
        res.status(500).json({ message: "There was an error fetching the posts" });
    }
}

const createPost = async (req, res) => {
    try {
        const title = req.body["title"];
        const content = req.body["content"];
        const post = await BlogPost.create({title, content});
        res.render("index.ejs", { post })
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: "There was a problem trying to create a post" });
    }
}










export { getPosts, createPost };