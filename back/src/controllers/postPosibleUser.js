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
      const confirmacionUrl = `https://proy-blue-git-main-facus-projects-9f3b8a33.vercel.app/confirmar-correo?token=${token}`; 
      const mailOptions = {
        from: EMAIL_USER,
        to: correoElectronico,
        subject: 'Confirmación de correo electrónico',
        html: `
        <h2>Hola ${nombreUsuario} </h2>
        <p>Por favor, haz clic en el botón de abajo para confirmar tu correo electrónico:</p>
        <a href="${confirmacionUrl}">
          <button style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;">
            Confirmar correo electrónico
          </button>
        </a>
      `,
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