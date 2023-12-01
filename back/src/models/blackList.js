const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {


  sequelize.define("BlackList", {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   dni: {
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true 
},
   motivo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
}   , {timestamps: false}

)}