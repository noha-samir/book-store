"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listBooksByAuthor = exports.listBooks = exports.createBook = void 0;
const models_1 = __importDefault(require("../../models"));
const createBook = async (req, res) => {
    try {
        const authorId = req.body.authorId;
        const name = req.body.name;
        const pages = req.body.pages;
        await models_1.default.Book.create({
            name: name,
            pages: pages,
            AuthorId: authorId
        });
        res.status(200).json({ 'message': `Book: ${name} has been created successfully :)` });
    }
    catch (error) {
        res.status(400).json(error.message);
    }
};
exports.createBook = createBook;
const listBooks = async (req, res) => {
    const storeId = req.params.storeId;
    models_1.default.Book.findAll({
        include: {
            model: models_1.default.Store,
            through: { where: { StoreId: storeId } }
        }
    }).then((result) => res.status(200)
        .json(result))
        .catch((error) => res.status(400).json(error.message));
};
exports.listBooks = listBooks;
const listBooksByAuthor = async (req, res) => {
    const authorId = req.params.authorId;
    models_1.default.Book.findAll({
        where: { AuthorId: authorId },
    }).then((result) => res.status(200)
        .json(result))
        .catch((error) => res.status(400).json(error.message));
};
exports.listBooksByAuthor = listBooksByAuthor;
