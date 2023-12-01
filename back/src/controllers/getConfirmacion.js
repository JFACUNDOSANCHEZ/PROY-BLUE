const { PosibleUser }= require('../db.js')



const getConfirmacion = async (req, res) => {
   try{
      const {token} =  req.query;
      console.log(token);
      const usuarioPorToken = await PosibleUser.findOne({ where: { token: token } });


      console.log(usuarioPorToken);
     
         
          res.status(200).json(usuarioPorToken)
      
  
      }catch (error) {
   res.status(503).send(error.message);
   console.log(error.message);
   }
}

 module.exports = {
    getConfirmacion
 }