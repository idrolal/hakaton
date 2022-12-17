'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Character}) {
      Role.belongsTo(Character, {foreignKey: 'characterId'});
    }
  }
  Role.init({
      id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    speed: DataTypes.INTEGER,
    health: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
     characterId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Characters',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};