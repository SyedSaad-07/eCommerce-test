'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Brand, Product) {
      Store.belongsTo(Brand,{onDelete:'CASCADE', onUpdate:'CASCADE'})
      Store.hasMany(Product, {onDelete:'CASCADE', onUpdate:'CASCADE'})
      // define association here
    }
  }
  Store.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey:true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Brand_id:{
      type: DataTypes.INTEGER,
        references:{
          model:'Brands',
          key:'id',
        },
        autoIncrement:false,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};