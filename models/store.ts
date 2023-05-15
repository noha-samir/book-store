'use strict';
import {
  Model
} from 'sequelize';

interface StoreAttributes {
  id: number;
  name: string;
  address: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Store extends Model<StoreAttributes>
    implements StoreAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    name!: string;
    address!: string;

    static associate(models: any) {
      // define association here
      Store.belongsToMany(models.Book, {
        through: 'StoreBooks'
      })
    }
  }
  Store.init({
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
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};