'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class StoreBooks extends sequelize_1.Model {
        static associate(models) {
            // define association here
        }
    }
    StoreBooks.init({
        BookId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Books',
                key: 'id'
            }
        },
        StoreId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Stores',
                key: 'id'
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'StoreBooks',
    });
    return StoreBooks;
};
