import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { solicitud} from '../../redux/actions'
import style from './style.module.css'



const Register = () => {
   
    const dispatch = useDispatch();
    const [user, setUser] = useState({
      nombreUsuario: '',
      correoElectronico: '',
      nombreCompleto: '',
      contraseña: ''
    });
    console.log(user);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
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
        setShowSuccessMessage(true); // Mostrar el mensaje de éxito
        setTimeout(() => {
          setShowSuccessMessage(false); // Ocultar el mensaje después de unos segundos
        }, 3000); // Puedes ajustar el tiempo según lo prefieras
      }
    };
  
  
  
    return (
      <div className={style.registerContainer}>
        <div className={style.back}>
          <Link to="/">
            <button>👈</button>
          </Link>
        </div>
  
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
        {showSuccessMessage && <p>¡Usuario registrado! Recibira un mail</p>}
        </form>
      </div>
    );
};

export default Register;