import { useState, useEffect } from "react"
import validation from "./validation";
import { allPasseger, confirmacion, login, solicitud } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";
import GoogleButton from 'react-google-button';
import { getStorage, uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { v4 } from 'uuid'
import Nav from "../nav/Nav";
import Swal from 'sweetalert2'








const Login = () => {

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
  const storage = getStorage(app)


  const analytics = getAnalytics(app);
  const authGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        console.log(user);
        const userAuth = {
          nombreUsuario: user.displayName,
          correoElectronico: user.email,
          nombreCompleto: user.displayName,
          contraseña: user.uid,
          img: user.photoURL

        }
        console.log(userAuth);
        dispatch(login(userAuth, navigate));


      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);

      });
  }
  const navigate = useNavigate();
  const dispatch = useDispatch()




  const [dataUser, setDataUser] = useState({
    correoElectronico: "",
    contraseña: ""
  });


  const handlechange = (event) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value
    })
  }

  console.log(dataUser);
  const token = useSelector(state => state.token);
console.log(token);
  // Verifica que el token tenga un valor antes de guardarlo
  if (token) {
    localStorage.setItem('token', JSON.stringify(token));
dispatch(allPasseger(token))
  }

  console.log(token);


  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(dataUser);
      dispatch(login(dataUser, navigate))
    } catch (error) {
      console.error(error);
      alert('Contraseña / Correo incorrecto' + error)
    }


  }



  return (

    <div className={style.navBar}>

      <div className={style.divContainer}>


        <div className={style.formContainer}>
          <form onSubmit={handleSubmit}>
            <h2 className={style.login}></h2>
            <div>
              <span>Correo electrónico:</span>
              <br />
              <input
                type="email"
                name="correoElectronico"
                value={dataUser.correoElectronico}
                onChange={handlechange}
                className={style.textInput}
                placeholder='ejemplo@hotmail.com'
              />

            </div>

            <div>
              <span>Contraseña:</span>
              <br />
              <input
                type="password"
                name="contraseña"
                value={dataUser.password}
                onChange={handlechange}
                className={style.textInput}
                placeholder='Al menos 6 caracteres'
              />

            </div>
            <br />
            <button type="submit" className={style.button} >Ingresar</button>




          </form>
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


              Iniciar con Google
            </button>
            <br />
            {/* <p className={style.olvido}>¿Has olvidado tu contraseña?</p> */}


          </div>
        </div>
      </div>
    </div>
  );
};


export default Login