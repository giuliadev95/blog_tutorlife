import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express(); 
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

// Main "get" route
app.get('/', (req, res) => {
    res.status(200).send({ msg: "This is the main GET directory at http://localhost", port });
});

// Server listening at port 
app.listen(port, ()=> {
    console.log(`Server listening at http://localhost:${port}`); 
});