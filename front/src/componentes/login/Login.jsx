import { useState, useEffect } from "react"
import validation from "./validation";
import { login , solicitud } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";


const provider = new GoogleAuthProvider();


const Login = () => {
    
    const dispatch = useDispatch()
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

            const userAuth = {nombreUsuario: user.displayName,
                correoElectronico: user.email,
                nombreCompleto: user.displayName,
                contraseña: user.uid
                
            }
            console.log(userAuth);
            dispatch(solicitud(userAuth));
           
         
          }).catch((error) => {
          
            const errorCode = error.code;
            const errorMessage = error.message;
          
            const email = error.customData.email;
           
            const credential = GoogleAuthProvider.credentialFromError(error);
           
          });
      }    



    const navigate = useNavigate();
    const [dataUser, setDataUser] = useState({
        correoElectronico: "",
        contraseña: ""
    });
    // const [errors, setErrors] = useState({});

    const handlechange = (event) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        })
    }
    // useEffect(() => {
    //     if (dataUser.correoElectronico !== "" || dataUser.contraseña !== "") {
    //         const validacion = validation(dataUser);
    //         setErrors(validacion)
    //     }
    // }, [dataUser])
    console.log(dataUser);

    const token = useSelector(state => state.token)
    console.log(token);
if (token) {
  navigate('/home')
}



    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(dataUser);
            dispatch(login(dataUser))
        } catch (error) {
            console.error(error);
            alert('Contraseña / Correo incorrecto' + error)
        }


    }



    return (
        <div className={style.formContainer}>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <span>Correo electrónico:</span>
            <input
              type="email"
              name="correoElectronico"
              value={dataUser.correoElectronico}
              onChange={handlechange}
              className={style.textInput}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <span>Contraseña:</span>
            <input
              type="password"
              name="contraseña"
              value={dataUser.password}
              onChange={handlechange}
              className={style.textInput}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button type="submit" className={style.button}>Ingresar</button>
    

  

        </form>
<div className={style.div}>

       <p className={style.olvido}>¿Has olvidado tu contraseña?</p>

       <button onClick={authGoogle}>Por google</button>
</div>
      </div>
    );
  };
    

export default Login