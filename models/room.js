'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  room.init({
    id_mess: DataTypes.INTEGER,
    user_member: DataTypes.INTEGER,
    user_created: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'room',
  });
  return room;
};