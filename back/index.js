const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {  PORT } = process.env;
require('dotenv').config();

server.listen(PORT, () => {
  conn.sync({ force: false }).then(() => {
    console.log('%s listening at '+ PORT); 
  });
});
