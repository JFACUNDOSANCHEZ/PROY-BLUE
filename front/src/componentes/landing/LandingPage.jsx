import { Link } from "react-router-dom";
import style from './style.module.css'
import { useEffect, useState } from "react";
import Login from '../login/Login'
import lg from '../../../public/lg.png'
import Modal from "../modal/Modal";
import Register from "../register/Register"


const LandingPage = () => {


  const [estado, setEstado] = useState('Login')
  useEffect(() => {
    const token = localStorage.getItem('token');

    console.log(token);



  }, []);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEstado = () => {

    if (estado === 'Login') {
      setEstado('Registro')
    }
    if (estado === 'Registro') {
      setEstado('Login')
    }
  }


  return (
    <div className={style.divContainer}>
      <div className={style.imgLogin}>
        <div className={style.text}>

          <br /><br />

          {estado === 'Login' ? (
            <>

              <Login className={style.loginComponent} />
              <div className={style.containerRegister}>
                <h2 className={style.sinCuenta}>¿Todavia no tienes cuenta?  </h2>
                <button
                  onClick={handleEstado}
                  className={style.reg}
                >Registro</button>
              </div>
            </>
          ) : (
            <>

              <Register className={style.loginComponent} />
              <button onClick={handleEstado} className={style.reg}>Ir al login</button>
            </>
          )}
          <br />
          <div>



           

          </div>
        </div>

      </div>

    </div>
  );
};



export default LandingPage