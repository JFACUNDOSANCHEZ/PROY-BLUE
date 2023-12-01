const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {


  sequelize.define("Passeger", {
   
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    motivo:{
      type: DataTypes.STRING,
      allowNull: false,

    },
  

})}