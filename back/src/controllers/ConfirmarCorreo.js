const { PosibleUser }= require('../db.js')

const confirmarCorreo = async (req, res) => {
  const { token } = req.query; 
    const { contraseña } = req.body; 
  
    if (!token || !contraseña) {
      return res.status(400).json({ message: 'Token o contraseña no proporcionados' });
    }
  
    try {
      const usuario = await PosibleUser.findOne({ token });
  
      if (!usuario) {
        return res.status(404).json({ message: 'Token inválido o expirado' });
      }
  
    console.log("el usuario de db, posible user" + usuario.nombreCompleto);
    console.log("contra contra" + usuario.contraseña);
      usuario.contraseña = contraseña; 
  console.log("esta es la contra" + contraseña);
      await usuario.save();
  
      return res.status(200).json({mensaje: "en hora buena"})
    } catch (error) {
      return res.status(500).json({ message: 'Error al confirmar correo', error: error.message });
    }
  };
  
  module.exports = {
    confirmarCorreo,
  };