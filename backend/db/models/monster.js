'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Monster extends Model {
    static associate({Level}) {
      Monster.belongsTo(Level, {foreignKey: 'monsterId'});
    }
  }
  Monster.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    health: {
      allowNull: false,
      defaultValue: 10,
      type: DataTypes.INTEGER
    },
    power: {
      allowNull: false,
      defaultValue: 10,
      type: DataTypes.INTEGER
    },
    speed: {
      allowNull: false,
      defaultValue: 10,
      type: DataTypes.INTEGER
    },
    score: {
      allowNull: false,
      defaultValue: 10,
      type: DataTypes.INTEGER
    },
    role: {
      allowNull: false,
      defaultValue: 'mob',
      type: DataTypes.TEXT
    },
    image: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Monster',
  });
  return Monster;
};