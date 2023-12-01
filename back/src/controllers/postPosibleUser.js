const { PosibleUser } = require('../db.js');
const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS, JWT_SECRET } = process.env;
require('dotenv').config();
const jwt = require('jsonwebtoken');

const generarToken = (datos) => {
  // Genera un token con los datos proporcionados (puedes personalizar qué datos incluir)
  return jwt.sign(datos, JWT_SECRET, { expiresIn: '1h' }); // Personaliza la duración del token según tu necesidad
};

const postPosibleUser = async (req, res) => {
  try {
    const { nombreUsuario, correoElectronico, nombreCompleto, contraseña } = req.body;
    if (!nombreUsuario || !correoElectronico || !nombreCompleto || !contraseña) {
      res.status(400).send('Faltan Datos');
    } else {
      const token = generarToken({ correoElectronico }); // Genera el token usando el correo electrónico
      const solicitud = await PosibleUser.create({ nombreUsuario, correoElectronico, nombreCompleto, contraseña, token });

      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      });
      const confirmacionUrl = `https://proy-blue.vercel.app/confirmar-correo?token=${token}`; // URL de confirmación con el token
      const mailOptions = {
        from: EMAIL_USER,
        to: correoElectronico,
        subject: 'Confirmación de correo electrónico',
        text: `Por favor, haz clic en este enlace para confirmar tu correo electrónico: ${confirmacionUrl}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(201).json({ message: 'Mensaje enviado correctamente' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { 
  postPosibleUser,
};