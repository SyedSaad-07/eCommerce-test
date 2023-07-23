'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Store) {
      Brand.hasMany(Store, {onDelete:'CASCADE', onUpdate:'CASCADE'})
      Store.belongsTo(Brand,{onDelete:'CASCADE', onUpdate:'CASCADE'})
      // define association here
    }
  }
  Brand.init({
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
    website: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};