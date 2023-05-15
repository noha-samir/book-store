"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondUUID = exports.firstUUID = void 0;
const uuid_1 = require("uuid");
exports.firstUUID = (0, uuid_1.v4)();
exports.SecondUUID = (0, uuid_1.v4)();
//JUST FOR TESTING WE WILL SAVE THE UUIDs here to initialize the database data with it.
