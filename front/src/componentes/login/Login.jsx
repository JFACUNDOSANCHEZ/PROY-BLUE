import { useState, useEffect } from "react"
import validation from "./validation";
import { confirmacion, login, solicitud } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { authGoogle } from "../../firebase/config"; 


const Login = () => {

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

  // Verifica que el token tenga un valor antes de guardarlo
  if (token) {
    localStorage.setItem('token', token);
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


    <div className={style.divContainer}>
      <img className={style.imgLogin} src="https://images.homify.com/v1512601972/p/photo/image/2350734/DSC_0453-Editar-Editar.jpg" alt="" />

      <div className={style.formContainer}>
        <form onSubmit={handleSubmit}>
          <h2 className={style.login}>LOGIN</h2>
          <div>
            <span>Correo electrónico:</span>
            <input
              type="email"
              name="correoElectronico"
              value={dataUser.correoElectronico}
              onChange={handlechange}
              className={style.textInput}
              placeholder='ejemplo@hotmail.com'
            />

          </div>
          <br />

          <div>
            <span>Contraseña:</span>
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
          <button type="submit" className={style.button}>Ingresar</button>




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
          <p className={style.olvido}>¿Has olvidado tu contraseña?</p>

<Link to='/register'> Aun no tengo cuenta</Link>
        </div>
      </div>

    </div>
  );
};


export default Login