'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({Game, Role}) {
      Character.belongsTo(Game, {foreignKey: 'gameId'});
      Character.hasOne(Role, {foreignKey: 'characterId'});

    }
  }
  Character.init({
      id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.TEXT,
    level: DataTypes.INTEGER,
     gameId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'Games',
          key: 'id',
        },
  }
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};