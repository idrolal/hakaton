'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    static associate({Game, Monster}) {
      Level.belongsTo(Game, {foreignKey: 'levelId'});
      Level.hasMany(Monster, {foreignKey: 'monsterId'});
    }
  }
  Level.init({
    name: DataTypes.TEXT,
    monsterId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Monsters',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Level',
  });
  return Level;
};