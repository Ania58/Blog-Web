import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  text: {
    type: String,
    required: true,
  },
  userUid: { 
    type: String, 
    required: true },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    userUid: { 
      type: String, 
      required: true },
      
    comments: [commentSchema], 
  },
  {
    timestamps: true, 
  }
);

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;