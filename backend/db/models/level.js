'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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