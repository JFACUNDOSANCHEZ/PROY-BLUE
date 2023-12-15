const { PosibleUser } = require('../db.js');
const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS, JWT_SECRET } = process.env;
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generarToken = (datos) => {
 
  return jwt.sign(datos, JWT_SECRET, { expiresIn: '1h' }); 
};

const postPosibleUser = async (req, res) => {
  try {
    const { nombreUsuario, correoElectronico, nombreCompleto, contraseña } = req.body;
    if (!nombreUsuario || !correoElectronico || !nombreCompleto || !contraseña) {
      res.status(400).send('Faltan Datos');
    } else {
      const token = generarToken({ correoElectronico }); 
      const hashedPassword = await bcrypt.hash(contraseña, 10);
      const solicitud = await PosibleUser.create({ nombreUsuario, correoElectronico, nombreCompleto, contraseña: hashedPassword, token });

      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      });
      const confirmacionUrl = `http://localhost:5173/confirmar-correo?token=${token}`; 
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