require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { Sequelize } = require('sequelize');
const path = require('path');
const fs = require('fs');



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/blu`, {
  logging: false,
  native: false, 
});


const basename = path.basename(__filename);

const modelDefiners = [];


fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));




const {BlackList, Passeger, User, PosibleUser , Posible }  = sequelize.models;
Passeger.belongsTo(BlackList);

BlackList.hasMany(Passeger);
Passeger.belongsTo(User);

User.hasMany(Passeger)

PosibleUser

Posible


module.exports = {
    ...sequelize.models, 
    conn: sequelize,     
  };