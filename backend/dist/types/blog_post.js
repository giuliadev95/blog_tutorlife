"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLOG_POST_0 = exports.Post = void 0;
const author_1 = require("./author");
const cathegories_1 = require("./cathegories");
class Post {
    constructor(id, title, first_lines, body, author, created_at, published_at, cathegory) {
        this.id = id,
            this.title = title,
            this.first_lines = first_lines,
            this.body = body,
            this.author = author,
            this.created_at = created_at;
        this.published_at = published_at,
            this.cathegory = cathegory;
    }
}
exports.Post = Post;
exports.BLOG_POST_0 = new Post("0", "La lezione conoscitiva", ["Those are the first lines of text,",
    "ready to be edited soon",
    "by the author, so stay tuned!"
], [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
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
], author_1.AUTHOR_GM, "01/01/2025", "01/01/2025", cathegories_1.metodi_di_insegnamento);
