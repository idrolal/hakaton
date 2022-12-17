'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Character, Level}) {
      Game.belongsTo(User, {foreignKey: 'userId'});
      Game.hasOne(Character, {foreignKey: 'gameId'});
      Game.hasMany(Level, {foreignKey: 'levelId'});
    }
  }
  Game.init({
    points: DataTypes.INTEGER,
    levelId:{
      type: DataTypes.INTEGER,
      references: {
        model: 'Levels',
        key: 'id',
      },
    },
    userId:{
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    lastLevel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};