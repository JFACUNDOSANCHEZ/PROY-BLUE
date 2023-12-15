const {User} = require('../db.js')


const getUserId = async (req, res) => {
   try{
      const {id} =  req.params;

      const usuario = await User.findByPk(id);
  
         
          res.status(200).json(usuario)
      
  
      }catch (error) {
   res.status(503).send(error.message);
   console.log(error.message);
   }
}

 module.exports = {
    getUserId
 }