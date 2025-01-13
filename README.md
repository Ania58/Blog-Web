# Blog Web Project

A simple blog web application where users can create, edit, delete, and comment on posts using **Node.js**, **Express**, **MongoDB**, **EJS**, and **Firebase** for authentication.

---

## Features
- 📄 **Create Blog Post**: Add a new post with a title and content.
- ✏️ **Edit Post**: Update the title or content of existing posts (only available to the post owner).
- ❌ **Delete Post**: Confirm deletion of a post (only available to the post owner).
- 💬 **Comments**: Add, update, or delete comments on posts (updating and deleting only available to the comment owner).
- 🔒 **Authentication**: Secure registration, login, and logout using **Firebase Authentication**.
- ✅ **Authorization**: Only authenticated users can create, edit, or delete posts and comments.
- 🌐 **Responsive Design**: Optimized for desktop and mobile.

---

## Technologies
- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, EJS
- **Database**: MongoDB 
- **Authentication**: Firebase Authentication
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

    FIREBASE_TYPE=service_account
    FIREBASE_PROJECT_ID=your_project_id
    FIREBASE_PRIVATE_KEY_ID=your_private_key_id
    FIREBASE_PRIVATE_KEY=your_private_key
    FIREBASE_CLIENT_EMAIL=your_client_email
    FIREBASE_CLIENT_ID=your_client_id
    FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
    FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
    FIREBASE_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
    FIREBASE_CLIENT_CERT_URL=your_client_cert_url

4. **Start the server:**
    ```bash
    npm start

5. **Project Structure:**
    ```bash

        blog-web/
        
        ├── config/               # Firebase configuration
        ├── controllers/          # Controller logic
        ├── middleware/           # Authorization middlewares
        ├── models/               # Mongoose schemas
        ├── routes/               # Express routes
        ├── views/                # EJS templates
        ├── public/               # Static CSS
        ├── .env                  # Environment variables
        └── index.js              # Main application

## Authentication and Authorization

**Registration and Login:** Handled by Firebase Authentication.

**Ownership Checks:** Middleware ensures that only the user who created a post or comment can update or delete it.

**Global Middleware:** Authentication middleware sets req.user and res.locals.user for user-specific views.

**Protected Routes:** Routes for creating, updating, and deleting posts or comments require authentication.


## Usage

**Home Page (/):** View all posts (available to both logged-in and guest users).

**Dashboard (/dashboard):** See your posts and create new ones (only for logged-in users).

**Authentication Routes:**

**/register:** Register a new account.

**/login:** Log in to an existing account.

**/logout:** Log out securely.