"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSeeds = void 0;
const models_1 = __importDefault(require("../../models"));
const books_1 = require("../../seeders/books");
const stores_1 = require("../../seeders/stores");
const author_1 = require("../../seeders/author");
const storeBooks_1 = require("../../seeders/storeBooks");
const createAuthors = () => {
    author_1.authors.forEach(async (author) => {
        await models_1.default.Author.create(author);
    });
};
const createBooks = () => {
    books_1.books.forEach(async (book) => {
        await models_1.default.Book.create(book);
    });
};
const createStores = () => {
    stores_1.stores.forEach(async (store) => {
        await models_1.default.Store.create(store);
    });
};
const createStoreBooks = () => {
    storeBooks_1.storeBooks.forEach(async (store) => {
        await models_1.default.StoreBooks.create(store);
    });
};
const createSeeds = async (req, res) => {
    try {
        createAuthors();
        createBooks();
        createStores();
        createStoreBooks();
        res.status(200).json({ 'message': `Database is filled with data successfully :)` });
    }
    catch (error) {
        res.status(400).json(error.message);
    }
};
exports.createSeeds = createSeeds;
