'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Monster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Level}) {
      Monster.belongsTo(Level, {foreignKey: 'monsterId'});
    }
  }
  Monster.init({
    name: DataTypes.TEXT,
    health: DataTypes.INTEGER,
    power: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    role: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Monster',
  });
  return Monster;
};