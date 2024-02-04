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
           <h1>BLU <br /> </h1>
          
          <ul className={styles.featureList}>
            <li>
            <img src="https://cdn-icons-png.flaticon.com/512/76/76037.png" alt="" className={styles.icono} />
              <p>Accede a nuestra base de datos con rapidez para consultar la lista negra.</p>
            </li>
            <li>
                <img src="https://cdn-icons-png.flaticon.com/512/3201/3201052.png" alt="" className={styles.icono}/>

              <p>Registra incidentes y agrega información relevante de pasajeros problemáticos  con unos pocos clics.</p>
            </li>
            <li>
            <img src="https://cdn.icon-icons.com/icons2/3249/PNG/512/people_community_filled_icon_200428.png" className={styles.icono}  alt="" />  
              <p>Trabaja de manera colaborativa con tu comunidad para mantener la lista actualizada.</p>
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
