const { User } = require('../db.js')
const bcrypt = require('bcrypt');





const postRegister = async (req, res) => {
    try {
        const { contraseña, correoElectronico, nombreUsuario, nivel } = req.body;
        console.log(contraseña, correoElectronico, nombreUsuario, nivel);
        if (!contraseña || !correoElectronico || !nombreUsuario || !nivel) {
            res.status(400).send('Faltan Datos')
        } else {
            const hashedPassword = await bcrypt.hash(contraseña, 10);
            const register = await User.create({
                contraseña: hashedPassword,
                correoElectronico: correoElectronico,
                nombreUsuario: nombreUsuario,
            nivel: nivel
            })
            console.log(contraseña, correoElectronico, nombreUsuario, nivel);

            res.status(200).json({ message: 'Usuario registrado correctamente', user: register });
        }
    } catch (error) {
        res.status(404).json({ message: error.message })

    }



}


module.exports = {

    postRegister

}