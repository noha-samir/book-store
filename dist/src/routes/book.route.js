"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controllers_1 = require("../controllers/book.controllers");
const router = (0, express_1.Router)();
router.post('/', book_controllers_1.createBook);
router.get('/:storeId', book_controllers_1.listBooks);
router.get('/author/:authorId', book_controllers_1.listBooksByAuthor);
exports.default = router;
