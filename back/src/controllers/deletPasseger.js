const { Passeger } = require('../db'); 

const deletPasseger = async (req, res) => {
  try {
    const { id } = req.params;
    const pasajero = await Passeger.findByPk(id);
      console.log(Passeger);
  
      if (!pasajero) {
        return res.status(404).json({ mensaje: 'Pasajero no encontrado' });
      }
      await pasajero.destroy();
  
      res.status(200).json({ mensaje:' pasajero eliminado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar el pasajero' });
    }
  };

  module.exports = {
    deletPasseger
  };