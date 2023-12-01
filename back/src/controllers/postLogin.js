const { User } = require('../db.js')
const {  JWT_SECRET } = process.env;
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const postLogin = async (req, res) => {
    try {
      const { contraseña, correoElectronico } = req.body;
      
      if (!contraseña || !correoElectronico) {
        return res.status(400).send('Faltan Datos');
      }
      
      const usuarioValido = await User.findOne({ where: { correoElectronico: correoElectronico } });
  console.log("ACA ESTA EL USUARIO " + usuarioValido);
      if (!usuarioValido) {
        return res.status(408).json({ mensaje: 'Credenciales inválidas' });
      }
      
      const contraseñaValida = await bcrypt.compare(contraseña, usuarioValido.contraseña);
  console.log("ACA ESTA LA CONTRA DE DB" + contraseñaValida);
      if (!contraseñaValida) {
        return res.status(444).json({ mensaje: 'Credenciales inválidas' });
      }
 
      const token = jwt.sign({ usuarioId: usuarioValido.id, nivel: usuarioValido.nivel }, JWT_SECRET, { expiresIn: '1h' });
      console.log(token);
      res.status(200).json(token);
    } catch (error) {
      res.status(555).json({ message: error.message });
    }
  };
  
  module.exports = {
    postLogin
  };