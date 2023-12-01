const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {


  sequelize.define("User", {
 
    nombreUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correoElectronico: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{timestamps: true});


}