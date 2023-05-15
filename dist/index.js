"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../book-store/src/routes"));
const compression_1 = __importDefault(require("compression"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const models_1 = __importDefault(require("./models"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, morgan_1.default)('combined'));
app.use((0, helmet_1.default)());
// Body parsing Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    return res.status(200).send({ message: `Welcome to the book-store API! \n Endpoints available at http://localhost:${port}/api/v1` });
});
app.use((0, compression_1.default)());
try {
    models_1.default.sequelize.sync().then(() => {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    });
}
catch (error) {
    console.log(`Error occurred: ${error.message}`);
}
app.use('/v1', routes_1.default);
