"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.status(200).send({ msg: "This is the main get directory at http://localhost/", port });
});
// Error page
app.get('/*', (req, res) => {
    res.send("404: Page Not Found");
});
// Server listen at port 5000
app.listen(port, () => {
    console.log(`Server listening at http://localhost/${port}`);
});
