"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const store_controller_1 = require("../controllers/store.controller");
const router = (0, express_1.Router)();
router.post('/', store_controller_1.createStore);
router.post('/sell/book', store_controller_1.sellBook);
exports.default = router;
