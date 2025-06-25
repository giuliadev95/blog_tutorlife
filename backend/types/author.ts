// Create the type for the author "Giulia Moukouyou"

type url = string;

export interface AuthorInterface {
    name: string,
    surname: string,
    role : string,
    instagram: url,
    x : url,
    website: url
}

export class Author implements AuthorInterface {
    name: string;
    surname: string;
    role : string;
    instagram: url;
    x : url;
    website: url;

    constructor (
        name: string,
        surname: string,
        role : string,
        instagram: url,
        x : url,
        website: url
    ) {
        this.name = name,
        this.surname = surname,
        this.role = role,
        this.instagram = instagram,
        this.x = x,
        this.website = website
    }
}

export const authorGiulia : Author = new Author (
    "Giulia", 
    "Moukouyou", 
    "Blogger, tutor, web developer", 
    "www.instagram.com", 
    "www.x.com", 
    "www.giulia.com"
);