import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { solicitud} from '../../redux/actions'
import style from './style.module.css'
import Authgoogle from "../authGoogle/Authgoogle"


const Register = () => {
   
    const dispatch = useDispatch();
    const [user, setUser] = useState({
      nombreUsuario: '',
      correoElectronico: '',
      nombreCompleto: '',
      contraseña: ''
    });
    console.log(user);
  
  
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
        dispatch(solicitud(user));
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
          <button type="submit" className={style.button}>
            Cargar usuario
          </button>
          <br />
          <br />
          <div>

          <Authgoogle />
          </div>
      
        </form>


    
      </div>
              </div>
    );
};

export default Register;