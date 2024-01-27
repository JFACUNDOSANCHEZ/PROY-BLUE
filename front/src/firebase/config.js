import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";
import GoogleButton from 'react-google-button';
import { getStorage, uploadBytes, getDownloadURL , ref} from "firebase/storage";
import {v4} from 'uuid'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions";


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
  const storage= getStorage(app)

  export const  uploadFile = async (file) =>{
    const storageRef= ref(storage, v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    console.log(url);
    return url
  }
  
  const analytics = getAnalytics(app);
  export const authGoogle = () => {
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
          contraseña: user.uid

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
