'use strict';
import {
  Model
} from 'sequelize';

interface BookAttributes {
  id: number;
  name: string;
  pages: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Book extends Model<BookAttributes>
    implements BookAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    name!: string;
    pages!: number;
    static associate(models: any) {
      // define association here
      Book.belongsToMany(models.Store, {
        through: 'StoreBooks'
      })
      Book.belongsTo(models.Author, {
        as: 'author',
        foreignKey: 'AuthorId',
        targetKey: 'id'
      })
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