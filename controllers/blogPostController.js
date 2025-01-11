import BlogPost from "../models/BlogPost.js";

const getPosts = async (req, res) => {
    try {
        const posts = await BlogPost.find();
        res.render("index.ejs", { posts })
    } catch (error) {
        res.status(500).json({ message: "There was an error fetching the posts" });
    }
}










export default getPosts;