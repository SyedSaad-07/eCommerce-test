'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Store) {
      Product.belongsTo(Store, {onDelete:'CASCADE', onUpdate:'CASCADE'})
      // define association here
    }
  }
  Product.init({
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
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    Store_id:{
      type: DataTypes.INTEGER,
        references:{
          model:'Stores',
          key:'id',
        },
        autoIncrement:false,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};