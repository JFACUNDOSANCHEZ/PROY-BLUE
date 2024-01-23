import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { confirmacion, } from '../../redux/actions'
import style from './style.module.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const Register = () => {
   
    const dispatch = useDispatch();
    const [user, setUser] = useState({
      nombreUsuario: '',
      correoElectronico: '',
      nombreCompleto: '',
      contraseña: ''
    });
    console.log(user);
  


    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const firebaseConfig = {
      apiKey: "AIzaSyCEae_iFGpst8mtdi1uAf7xPrLOzCLF-4A",
      authDomain: "blu-p-51f37.firebaseapp.com",
      projectId: "blu-p-51f37",
      storageBucket: "blu-p-51f37.appspot.com",
      messagingSenderId: "1093585399520",
      appId: "1:1093585399520:web:794aae7c3810003c3caa85",
      measurementId: "G-KC8877420F"
    };
  
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const  authGoogle = () => {
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
        
          const user = result.user;

          const userAuth = {nombreUsuario: user.displayName,
              correoElectronico: user.email,
              nombreCompleto: user.displayName,
              contraseña: user.uid
              
          }
          console.log(userAuth);
          dispatch(confirmacion(userAuth, navigate));
        
       
        }).catch((error) => {
        
          const errorCode = error.code;
          const errorMessage = error.message;
        
          const email = error.customData.email;
         
          const credential = GoogleAuthProvider.credentialFromError(error);
         
        });
    }   


  
    const handleChange = (event) => {
      setUser({
        ...user,
        [event.target.name]: event.target.value
      });
    };
  
    const handleRegister = (event) => {
      event.preventDefault();
      if (!user.nombreUsuario || !user.correoElectronico || !user.nombreCompleto || !user.contraseña) {
        alert('¡Faltan datos!');
      } else {
        dispatch(confirmacion(user));
   // Puedes ajustar el tiempo según lo prefieras
      }
    };
  
  
  
    return (
      <div>

       

      <div className={style.registerContainer}>
  
        <form onSubmit={handleRegister} className={style.form}>
          <h1>Registro</h1>
          <div>
            <span>Nombre completo</span>
            <input
              type="text"
              name="nombreCompleto"
              value={user.nombreCompleto}
              onChange={handleChange}
              className={style.input}
              />
          </div>
          <div>
            <span>Correo electronico: </span>
            <input
              type="text"
              name="correoElectronico"
              value={user.correoElectronico}
              onChange={handleChange}
              className={style.input}
              />
          </div>
          <div>
            <span>Nombre del usuario</span>
            <input
              type="text"
              name="nombreUsuario"
              value={user.nombreUsuario}
              onChange={handleChange}
              className={style.input}
              />
          </div>
          <div>
            <span>Contraseña</span>
            <input
              className={style.input}
              type="password"
              name="contraseña"
              value={user.contraseña}
              onChange={handleChange}
              />
          </div>
          <div>
          <button type="submit" className={style.button}>
            Cargar usuario
          </button>

          </div>
          <br />
          <br />
<div>

          <button onClick={authGoogle}>Por google</button>
</div>
          <br />
          <br />
   
      
        </form>


    
      </div>
              </div>
    );
};

export default Register;