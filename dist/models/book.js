'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Book extends sequelize_1.Model {
        static associate(models) {
            // define association here
            Book.belongsToMany(models.Store, {
                through: 'StoreBooks'
            });
            Book.belongsTo(models.Author, {
                as: 'author',
                foreignKey: 'AuthorId',
                targetKey: 'id'
            });
        }
    }
    Book.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pages: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Book',
    });
    return Book;
};
