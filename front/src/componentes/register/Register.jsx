import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { confirmacion, } from '../../redux/actions'
import style from './style.module.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';


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
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        const userAuth = {
          nombreUsuario: user.displayName,
          correoElectronico: user.email,
          nombreCompleto: user.displayName,
          contraseña: user.uid,
          nivel: '2'

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
    if (!user.correoElectronico || !user.nombreCompleto || !user.contraseña) {
      alert('¡Faltan datos!');

    } else {
      dispatch(confirmacion(user));
      // Puedes ajustar el tiempo según lo prefieras
    }
  };



  return (
    <div className={style.divContainer}>

      <div className={style.imgLogin}>

        <img src="https://media.admagazine.com/photos/6467b71e70d3fa4f8a2aa26c/16:9/w_2560%2Cc_limit/FedeC-LowRes7463.jpg" alt="1" className={style.imgLogin} />
      </div>
      <div className={style.formContainer}>

        <form onSubmit={handleRegister} >
          <h1 className={style.title}>Registro</h1>
          <div>
            <span>Nombre completo</span>
            <input
              type="text"
              name="nombreCompleto"
              value={user.nombreCompleto}
              onChange={handleChange}
              className={style.input}
              placeholder='Armando Barreda'
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
              placeholder='ejemplo@hotmail.com'
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
              placeholder='Al menos 6 caracteres'
            />
          </div>

          <div>
            <button type="submit" className={style.btnIniciarSesion}>
              Cargar usuario
            </button>
          </div>

        </form>
        <div>
          <div className={style.linea}></div>
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
        <Link to={'/'}>
        <p>
¿Ya tienes cuenta ?
        </p>
        </Link>






      </div>
    </div>
  );
};

export default Register;