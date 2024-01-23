import { Link } from "react-router-dom";
import style from './style.module.css'
import { useEffect, useState } from "react";
import Login from '../login/Login'
import lg from '../../../public/lg.svg'
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

const handleEstado = () =>{

  if (estado === 'Login') {
    setEstado('Registro')
  }
  if (estado === 'Registro') {
setEstado('Login')    
  }
}


      return (
        <div className={style.container}>
        <div className={style.content}>
        <div className={style.text}>

        <h1>
            <span className={`${style.letter1}`}>B</span>
            <span className={`${style.letter2}`}>L</span>
            <span className={`${style.letter3}`}>U</span>
          </h1>

          <p className={style.boldText}>Seguridad en tus manos</p>

          {estado === 'Login' ? (
  <>
    <Login className={style.loginComponent} />
    <button onClick={handleEstado}>Crear cuenta nueva</button>
  </>
) : (
  <>
    <Register className={style.loginComponent} />
    <button onClick={handleEstado}>Ir al login</button>
  </>
)}
            <br />
            <div>



      {/* Renderiza el modal si showModal es verdadero */}
      {showModal && (
        <Modal closeModal={closeModal}>
          {/* Contenido del modal */}
        <Register></Register>
          {/* ... Otros elementos dentro del modal */}
        </Modal>
      )}
      
    </div>
        </div>
        
        </div>
        <div className={style.image}>
          <img
            src={lg}
            alt="log"
          
          />
        </div>
      </div>
      );
    };
    
    

export default LandingPage