"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthor = void 0;
const models_1 = __importDefault(require("../../models"));
const uuid_1 = require("uuid");
const createAuthor = async (req, res) => {
    try {
        const authorId = (0, uuid_1.v4)();
        const name = req.body.name;
        await models_1.default.Author.create({
            id: authorId,
            name
        });
        res.status(200).json({ 'message': `Author: ${name} has been created successfully :)` });
    }
    catch (error) {
        res.status(400).json(error.message);
    }
};
exports.createAuthor = createAuthor;
