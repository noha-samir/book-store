"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellBook = exports.createStore = void 0;
const models_1 = __importDefault(require("../../models"));
const createStore = async (req, res) => {
    try {
        const name = req.body.name;
        const address = req.body.address;
        await models_1.default.Store.create({
            name,
            address
        });
        res.status(200).json({ 'message': `Store: ${name} has been created successfully :)` });
    }
    catch (error) {
        res.status(400).json(error.message);
    }
};
exports.createStore = createStore;
const sellBook = async (req, res) => {
    try {
        const BookId = req.body.bookId;
        const StoreId = req.body.storeId;
        const price = req.body.price;
        await models_1.default.StoreBooks.create({
            BookId,
            StoreId,
            price
        });
        res.status(200).json({ 'message': `Book has been added to store ID: ${StoreId} with price: ${price} successfully :)` });
    }
    catch (error) {
        res.status(400).json(error.message + ' >> ' + error.parent.code);
    }
};
exports.sellBook = sellBook;
