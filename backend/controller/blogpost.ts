import { Request, Response } from "express";
import { blogpost0 } from "../types/blogpost";

// Declare function to get data from types/blogpost.ts
export function getPosts(req: Request, res: Response) : void {
    try {res.send(blogpost0)}
    catch(error) {
        console.log(`Blogpost not found`);
        res.status(404).send(`Blog post not found`);
    }
}