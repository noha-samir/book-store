'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Author extends sequelize_1.Model {
        static associate(models) {
            // define association here
            Author.hasMany(models.Book, {
                as: 'book',
                foreignKey: 'AuthorId',
            });
        }
    }
    Author.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Author',
    });
    return Author;
};
