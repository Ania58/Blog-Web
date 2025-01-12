import express from 'express';
import router from './routes/routes.js';
import authRoutes from './routes/authRoutes.js';
import { dbConnection } from './config/db.js';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import admin from "firebase-admin";
import { readFile } from 'fs/promises'; 
import cookieParser from 'cookie-parser';
import path from 'path';
import './config/adminFirebase.js';

dotenv.config();

const app = express();
const PORT = 3000;

dbConnection();

app.use(express.urlencoded( {extended: true}));
app.use(cookieParser()); 
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    res.locals.isAuthenticated = !!req.cookies.token; 
    next();
  });
app.use("/", router);
app.use("/", authRoutes); 


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
