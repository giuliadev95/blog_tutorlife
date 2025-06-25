import express, {Request, Response} from "express";
import cors from 'cors';

const app = express(); 
const port = 5000;
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({msg:"This is the main get directory at http://localhost/",port});
});

// Error page
app.get('/*', (req: Request, res: Response)=>{
    res.send("404: Page Not Found");
});

// Server listen at port 5000
app.listen(port, ()=> {
    console.log(`Server listening at http://localhost/${port}`);   
});