const { Passeger } = require('../db');

const updatePasseger = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, dni, motivo } = req.body;


    const pasajero = await Passeger.findByPk(id);

    if (!pasajero) {
      return res.status(404).json({ mensaje: 'Pasajero no encontrado' });
    }

    if (name) {
      pasajero.name = name;
    }
    if (dni) {
      pasajero.dni = dni;
    }
    if (motivo) {
      pasajero.motivo = motivo;
    }
  
    await pasajero.save();
console.log(pasajero);;
    res.status(200).json(pasajero);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el pasajero' });
  }
};

module.exports = {
  updatePasseger
};