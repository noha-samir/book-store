'use strict';
import {
  Model, UUIDV4
} from 'sequelize';

interface AuthorAttributes {
  id: string;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Author extends Model<AuthorAttributes>
    implements AuthorAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    name!: string;
    static associate(models: any) {
      // define association here
      Author.hasMany(models.Book, {
        as: 'book',
        foreignKey: 'AuthorId',
      })
    }
  }
  Author.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
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