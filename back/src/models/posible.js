const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {


  sequelize.define("Posible", {
 
    nombreUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correoElectronico: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    nombreCompleto : {
        type: DataTypes.STRING,
        allowNull: false
    },
    contraseña:{
        type: DataTypes.STRING,
        allowNull: false

    },

},{timestamps: true});


}