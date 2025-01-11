import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.urlencoded( {extended: true}));
app.use(express.static("public"));








app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})