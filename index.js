import express from 'express';
import router from './routes/routes.js';
import { dbConnection } from './config/db.js';
import dotenv from 'dotenv';
import methodOverride from 'method-override';
import admin from "firebase-admin";
import { readFile } from 'fs/promises'; 
import path from 'path';
import firebaseAdmin from './config/firebase.js';
const serviceAccountPath = new URL('./path/to/serviceAccountKey.json', import.meta.url).pathname; 
const serviceAccount = JSON.parse(await readFile(serviceAccountPath, 'utf8'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

dotenv.config();

const app = express();
const PORT = 3000;

dbConnection();

app.use(express.urlencoded( {extended: true}));
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use("/", router);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})