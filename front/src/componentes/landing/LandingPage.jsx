import { Link } from "react-router-dom";
import style from './style.module.css'
import { useEffect, useState } from "react";
import Login from '../login/Login'
import lg from '../../../public/lg.svg'
import Modal from "../modal/Modal";
import Register from "../register/Register"

const LandingPage = () => { 
    
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
            <Login className={style.loginComponent} />
            <br />
            <div>
      {/* Tu contenido existente */}
      <button onClick={openModal}>Crear cuenta nueva</button>

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