const { User, Posible } = require('../db.js')
const bcrypt = require('bcrypt');





const postRegister = async (req, res) => {
    try {
        const { contraseña, correoElectronico, nombreUsuario, nivel, nombreCompleto  } = req.body;
        console.log(contraseña, correoElectronico, nombreUsuario, nivel);
        if (!contraseña || !correoElectronico || !nombreUsuario || !nivel ) {
            res.status(400).send('Faltan Datos')
        } else {
    
            const register = await User.create({
                contraseña: contraseña,
                correoElectronico: correoElectronico,
                nombreUsuario: nombreUsuario,
                nombreCompleto :nombreCompleto ,
            nivel: nivel,
            activo: true
            })
            console.log(contraseña, correoElectronico, nombreUsuario, nivel, nombreCompleto );
            await Posible.destroy({ where: { correoElectronico: correoElectronico } });
            res.status(200).json({ message: 'Usuario registrado correctamente', user: register });
        }
    } catch (error) {
        res.status(404).json({ message: error.message })

    }



}


module.exports = {

    postRegister

}