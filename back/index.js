const server = require('./src/app.js');
const { conn } = require('./src/db.js');


server.listen(3001, () => {
  conn.sync({ force: true }).then(() => {
    console.log('%s listening at 3001'); 
  });
});
