const { User } = require('../db');



const putUser = async (req, res) => {
  const { id } = req.params;
  const { activo, nombreUsuario, nombreCompleto } = req.body;

  try {
    const usuario = await User.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    if (activo) {
      usuario.activo = activo;
    }

    if (nombreCompleto) {
      usuario.nombreCompleto = nombreCompleto;
    }

    if (nombreUsuario) {
      usuario.nombreUsuario = nombreUsuario;
    }

    await usuario.save();

    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(501).json({ mensaje: 'Hubo un error al actualizar el estado del usuario' });
  }
}


module.exports = {
  putUser
}

