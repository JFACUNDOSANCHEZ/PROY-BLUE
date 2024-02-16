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

  const dispatch = useDispatch();
  useEffect(() => {

    localStorage.removeItem('token');

  }, [])

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };


  const [showModalRegister, setShowModalRegister] = useState(false);

  const toggleModalRegister = () => {
    setShowModalRegister(!showModalRegister);
  };
  return (
    <>
    <div className={styles.landingContainer}>
      <h1 className={styles.ELh1}><strong>BLU.</strong></h1>
      <h2 className={styles.h2}>Seguridad en tus manos</h2>
      <button onClick={toggleModal} className={styles.buton}>Login</button>
      <button onClick={toggleModalRegister} className={styles.buton}>Registro</button>
      {showModal && (
        <div className={styles['modal-overlay']}>
          <div className={styles['modal-content']}>
            <Login />
            <span className={styles.close} onClick={toggleModal}>×</span>
          </div>
        </div>
      )}
      {showModalRegister && (
        <div className={styles['modal-overlay']}>
          <div className={styles['modal-content']}>
            <Register />
            <span className={styles.close} onClick={toggleModalRegister}>×</span>
          </div>
        </div>
      )}
    </div>
  </>
  );
};

export default Landing;
