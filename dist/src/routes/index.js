"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const author_route_1 = __importDefault(require("../routes/author.route"));
const book_route_1 = __importDefault(require("../routes/book.route"));
const store_route_1 = __importDefault(require("../routes/store.route"));
const router = (0, express_1.Router)();
/**
 * List all root paths for all routes
 * but all sub-routes will be inside separate route file
 */
router.use('/author', author_route_1.default);
router.use('/book', book_route_1.default);
router.use('/store', store_route_1.default);
exports.default = router;
