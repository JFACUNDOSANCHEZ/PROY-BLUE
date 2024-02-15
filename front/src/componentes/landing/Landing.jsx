import { useEffect, useState } from 'react';
// import {lan} from '../../../public/lan.jpg'
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
useEffect(()=>{

  localStorage.removeItem('token');

},[])

const handleEstado =()=> {
setEstado(!estado)

}
return (
  <>
    <div className={styles.landingContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.loginRegisterContainer}>
         
            
            <div>
          <div className={styles.flipCard}>

      <h1 className={styles.ELh1}>Bienvenido a <strong>
         BLU.
        </strong>
         </h1>
            <div className={`${styles.flipCardInner} ${estado ? styles.flipped : ''}`}>
              <div className={`${styles.cardContainer} ${styles.flipCardFront}`}>
                <Login />
                <br /><br />
            <button onClick={handleEstado} className={styles.goog}>
              {!estado ? 
              
              
              <p>

                 Aún no tienes cuenta? 
               </p> 
              
              : <p>Ir al Login</p>}
            </button>
              </div>
              <div className={`${styles.cardContainer} ${styles.flipCardBack}`}>
                <Register />
         
                <br /><br />
            <button onClick={handleEstado} className={styles.goog}>
              {!estado ? 
              
              
              <p>

                 Aún no tienes cuenta? 
               </p> 
              
              : <p>Ir al Login</p>}
            </button>
              </div>
            </div>
          </div>

          </div>
     
      
        

      
              </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
