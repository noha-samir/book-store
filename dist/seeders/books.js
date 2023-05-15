"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
const constants_1 = require("../constants");
exports.books = [
    {
        id: 1,
        name: 'Gone with the wind',
        pages: 200,
        AuthorId: constants_1.firstUUID
    },
    {
        id: 2,
        name: 'The secret',
        pages: 100,
        AuthorId: constants_1.SecondUUID
    }
];
