'use strict';
import {
  Model
} from 'sequelize';

interface StoreBooksAttributes {
  BookId: number;
  StoreId: number;
  price: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class StoreBooks extends Model<StoreBooksAttributes>
    implements StoreBooksAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    BookId!: number;
    StoreId!: number;
    price!: number;
    static associate(models: any) {
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