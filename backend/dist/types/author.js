"use strict";
// Create the type for the author "Giulia Moukouyou"
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTHOR_GM = exports.Author = void 0;
class Author {
    constructor(name, surname, role, instagram, x, website) {
        this.name = name,
            this.surname = surname,
            this.role = role,
            this.instagram = instagram,
            this.x = x,
            this.website = website;
    }
}
exports.Author = Author;
exports.AUTHOR_GM = new Author("Giulia", "Moukouyou", "Blogger, tutor, web developer", "www.instagram.com", "www.x.com", "www.giulia.com");
