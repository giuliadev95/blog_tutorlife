import { Author } from "./author";
import { authorGiulia } from "./author";
import { metodi_di_insegnamento } from "./cathegories";
import { comunicazione } from "./cathegories";
import { strumenti } from "./cathegories";
import { benessere } from "./cathegories";

export interface PostInterface {
    id : string,
    title: string,
    first_lines: string[], // store the first 2 lines of the post, to display it in the blog-post-card followed by the 3 ' ... '.
    body: string[], // stores the json blog-post's body as an array of strings, we'll see if this fits later on
    author : Author,
    created_at: string,
    published_at: string,
    cathegory: string
}

export class Post implements PostInterface {
    id : string;
    title: string;
    first_lines: string[];
    body: string[]; 
    author : Author;
    created_at: string;
    published_at: string;
    cathegory: string;

    constructor (
        id : string,
        title : string,
        first_lines: string[], 
        body: string[], 
        author : Author,
        created_at: string,
        published_at: string,
        cathegory: string
    ) {
        this.id = id,
        this.title = title,
        this.first_lines = first_lines, 
        this.body = body, 
        this.author = author,
        this.created_at = created_at
        this.published_at = published_at,
        this.cathegory = cathegory
    }
}

export const blogpost0 : Post = new Post (
    "0",
    "La lezione conoscitiva",
    [   "Those are the first lines of text,",
        "ready to be edited soon", 
        "by the author, so stay tuned!"
    ],
    [ `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 
        
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,

        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,

        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
        leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,      
    ],
    authorGiulia,
    "01/01/2025",
    "01/01/2025",
    metodi_di_insegnamento
);
