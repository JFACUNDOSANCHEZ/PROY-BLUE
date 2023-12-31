import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPosible, postConfirm } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css'
import { Link } from 'react-router-dom';

const ConfirmarCorreo = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const [contra, setContraseña] = useState({
        pass: ''

    });
    console.log(contra.pass);
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');
        console.log(" aca esta el token de ahora " + token);
        dispatch(getPosible(token))
    }, [])
    const handleChange = (event) => {
        setContraseña({
            ...contra,
            [event.target.name]: event.target.value
        })
    }
    const posible = useSelector(state => state.getPosible)
    console.log(posible);
    const handleSubmit = (e) => {
        e.preventDefault()
        const contraseña = contra.pass
        const token = posible.token
        console.log(" aca esta el token en el handle" + token);
        console.log("aca esta la contraseña en el handle " + contraseña);
        dispatch(postConfirm(contraseña, token))

        console.log(contraseña);
    }
    return (
<div className={style.container}>
      <div className={style.content}>
        
        <h1 className={style.title}>Confirmacion</h1>
        {posible && <h2>Bienvenido {posible.nombreCompleto}</h2>}
        <br />
        {posible && <h3>Hemos confirmado el correo {posible.correoElectronico}</h3>}
        <form onSubmit={handleSubmit}>
         <br />
          <div className={style.inputWrapper}>
            <span>Confirma la contraseña:</span>
         
            <input
              type="password"
              name="pass"
              value={contra.pass}
              onChange={handleChange}
              className={style.input}
            />
          </div>
         
         <br /><br />
         
          {/* Otros campos del formulario si los tienes */}
          <button type="submit" className={style.button}>
            Confirmar
          </button>
        </form>
        <Link to={'/'}>
          <button>Ir al login</button>
        </Link>
      </div>
    </div>
    )
}
export default ConfirmarCorreo