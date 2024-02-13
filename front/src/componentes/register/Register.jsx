import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { confirmacion, guardarUser, } from '../../redux/actions'
import style from './style.module.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import Swal from 'sweetalert2'


const Register = () => {

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    nombreUsuario: '',
    correoElectronico: '',

    contraseña: '',
    nivel: '2'
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
  const authGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
      
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        const userAuth = {
          activo:'pendiente',
          nombreUsuario: user.displayName,
          correoElectronico: user.email,
          nombreCompleto: user.displayName,
          contraseña: user.uid,
          nivel: '2',
          img: user.photoURL

        }
        console.log(userAuth);
        localStorage.setItem('user', JSON.stringify(userAuth));
        navigate('/RegisterInfo')

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
    if (!user.correoElectronico || !user.nombreCompleto || !user.contraseña) {
      Swal.fire({
        title: 'Faltan Datos',
        text: 'Complete todos los campos.',
        icon: 'warning',
        confirmButtonText: '¡Entendido!',
        onClose: () => {
            location.reload(); // Esto recargará la página después de que se muestre el mensaje de éxito
        }
    });

    } else {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/RegisterInfo')

    }
  };



  return (
    <div className={style.navBar}>
    <div className={style.divContainer}>


      <div className={style.formContainer}>

        <form onSubmit={handleRegister} >
  
          <div>
            <br />
            <span>Nombre completo:</span>
            <br />
            <input
              type="text"
              name="nombreCompleto"
              value={user.nombreCompleto}
              onChange={handleChange}
              className={style.textInput}
              placeholder='Armando Barreda'
            />
          </div>
          <div>
            <span>Correo electronico: </span>
            <br />
            <input
              type="text"
              name="correoElectronico"
              value={user.correoElectronico}
              onChange={handleChange}
              className={style.textInput}
              placeholder='ejemplo@hotmail.com'
            />
          </div>
          <div>
            <span>Contraseña:</span>
            <br />
            <input
             className={style.textInput}
              type="password"
              name="contraseña"
              value={user.contraseña}
              onChange={handleChange}
              placeholder='Al menos 6 caracteres'
            />
          </div>

          <div>
            <button type="submit" className={style.button}>
              Cargar usuario
            </button>
          </div>

        </form>
        <div>
          <div className={style.linea}></div>
          <div className={style.div}>
          <br />
          <button
            className={style.goog}
            onClick={authGoogle} >

            <img
              className={style.googimg}
              src="https://cdn.icon-icons.com/icons2/1584/PNG/512/3721671-google_108054.png"
              width='50px'
            />


            Registarse con Google
          </button>
        </div>

        <br />

        
</div>




</div>
      </div>
    </div>
  );
};

export default Register;