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
      Role.belongsTo(Character, {foreignKey: 'roleId'});
    }
  }
  Role.init({
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    speed: DataTypes.INTEGER,
    health: DataTypes.INTEGER,
    power: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};