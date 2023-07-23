'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Brand) {
      User.hasOne(Brand, {onDelete:'CASCADE', onUpdate:'CASCADE'})
      Brand.belongsTo(User)
      // define association here
    }
  }
  User.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    fullname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    user_type: {
      allowNull: true,
      type: DataTypes.STRING
    },
    Brand_id:{
      type: DataTypes.INTEGER,
        references:{
          model:'Brands',
          key:'id',
        },
        autoIncrement:false,
        allowNull: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};