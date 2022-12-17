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
    static associate({ Game, Role }) {
      Character.belongsTo(Game, { foreignKey: 'characterId' });
      Character.hasOne(Role, { foreignKey: 'roleId' });
    }
  }
  Character.init({
    name: DataTypes.TEXT,
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roles',
        key: 'id',
      },
    },
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};