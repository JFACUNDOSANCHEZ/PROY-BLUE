const { PosibleUser, Posible } = require('../db.js');
const bcrypt = require('bcrypt');

const confirmarCorreo = async (req, res) => {
  const { token } = req.query;
  const { contraseña } = req.body;

  if (!token || !contraseña) {
    return res.status(400).json({ message: 'Token o contraseña no proporcionados' });
  }

  try {
    const usuario = await PosibleUser.findOne({ where: { token } });

    if (!usuario) {
      return res.status(404).json({ message: 'Token inválido o expirado' });
    }
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    
    const nuevoUsuarioPosible = await Posible.create({
      nombreUsuario: usuario.nombreUsuario,
      correoElectronico: usuario.correoElectronico,
      nombreCompleto: usuario.nombreCompleto,
      contraseña: hashedPassword, 
    });

    return res.status(200).json({ mensaje: 'Usuario creado en Posible', nuevoUsuarioPosible });
  } catch (error) {
    return res.status(500).json({ message: 'Error al confirmar correo', error: error.message });
  }
};

module.exports = {
  confirmarCorreo,
};