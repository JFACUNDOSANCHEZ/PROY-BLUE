import { useEffect, useState } from 'react';
import styles from './Landing.module.css';
import Login from '../login/Login';
import { Link } from 'react-router-dom';
import Register from '../register/Register'
import { handleClose, handleLogout, handleNewReview } from './functions/functions';
import { useDispatch, useSelector } from 'react-redux';
// import { getReviews, nextPageCommentAction, prevPageCommentaction } from '../../redux/actions';


const Landing = () => {
   const [estado , setEstado] = useState(null)
    const dispatch = useDispatch();


const handleEstado =()=> {
setEstado(!estado)

}
return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.loginRegisterContainer}>
            <div className={styles.searchBar}>
              {!estado ? <Login /> : <Register />}
              <button onClick={handleEstado}>
                {!estado ? <p>Aún no tienes cuenta?</p> : <p>Ir al Login</p>}
              </button>
            </div>
          <div className={styles.descriptionContainer}>
          <h1>Bienvenido a Blu - Gestión de Lista Negra de Alojamientos</h1>
          <p>
            Blu simplifica el proceso de mantener un registro actualizado y efectivo, permitiéndote realizar consultas y agregar pasajeros a la lista negra con facilidad.
          </p>
          
          <ul className={styles.featureList}>
            <li>
              <strong>Consulta Rápida:</strong>
              <p>Accede a nuestra base de datos de alojamientos con rapidez para verificar su estatus en la lista negra.</p>
            </li>
            <li>
              <strong>Agrega Pasajeros Fácilmente:</strong>
              <p>Registra incidentes y agrega información relevante de pasajeros problemáticos con unos pocos clics.</p>
            </li>
            <li>
              <strong>Colaboración en Tiempo Real:</strong>
              <p>Trabaja de manera colaborativa con tu equipo para mantener la lista negra siempre actualizada y precisa.</p>
            </li>
          </ul>

          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
