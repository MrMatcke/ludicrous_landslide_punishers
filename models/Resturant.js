const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resturant extends Model {}

Resturant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'resturant',
  }
);

module.exports = Resturant;
