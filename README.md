# Blog Web Project

A simple blog web application where users can create, edit, delete, and comment on posts using **Node.js**, **Express**, **MongoDB**, and **EJS**.

---

## Features
- 📄 **Create Blog Post**: Add a new post with a title and content.
- ✏️ **Edit Post**: Update the title or content of existing posts.
- ❌ **Delete Post**: Confirm deletion of a post.
- 💬 **Comments**: Add, update, or delete comments on posts.
- 🌐 **Responsive Design**: Optimized for desktop and mobile.

---

## Technologies
- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, EJS
- **Database**: MongoDB 
- **Utilities**: dotenv, method-override

---

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/blog-web.git
   cd blog-web
2. **Install dependencies:**
    ```bash
    npm install
3. **Create .env file:**

    MONGO_URI=your_mongo_connection_string

4. **Start the server:**
    ```bash
    npm start

5. **Project Structure:**
    ```bash

        blog-web/
        
        ├── controllers/          # Controller logic
        ├── models/               # Mongoose schemas
        ├── routes/               # Express routes
        ├── views/                # EJS templates
        ├── public/               # Static CSS
        ├── .env                  # Environment variables
        └── index.js                # Main application

