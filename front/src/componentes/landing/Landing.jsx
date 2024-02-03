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
    
            <div className={styles.landingContainer} >
           
                <div className={styles.contentContainer}>
                    <div className={styles.searchBar}>

                        <div className={styles.searchHeader}>
                           {
!estado ? 
                               <Login ></Login>
          : <Register></Register>
                            }
                        
                        </div>
                 <button onClick={handleEstado}>

                 {!estado ?
                 <p>Aun no tienes cuenta ?</p>
                : <p> Ir al Login</p>           
                 }
                 </button>
                          
                            <div>
                               
                            </div>
                           
   
                           
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;
