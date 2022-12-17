'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      Token.belongsTo(User, {foreignKey: 'userId'})
    }
  }
  Token.init({
    userId:{
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    refreshToken: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};