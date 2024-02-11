import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPosible, postConfirm } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import RegisterStyle from './RegisterStyle.module.css'
import { Link } from 'react-router-dom';

const RegisterInfo=()=>{



    const [user, setUser] = useState(null);
console.log(user);
    useEffect(() => {
      const userString = localStorage.getItem('user');
      if (userString) {
        const userData = JSON.parse(userString);
        setUser(userData);
      }
    }, []);
  

  

    
return (
    <div className={RegisterStyle.container}>
      <div className={RegisterStyle.content}>
        <h2>Bienvenido a BLU, {user}</h2>
        <p>¡Nos alegra tenerte en nuestra comunidad hotelera!</p>
        <p>Hemos enviado un código de confirmación a tu correo electrónico. Por favor, revisa tu bandeja de entrada y sigue las instrucciones para confirmar tu identidad.</p>
        <form>
          <div className={RegisterStyle.inputWrapper}>
            <label htmlFor="pass">Confirma la contraseña:</label>
            <input
              type="password"
              name="pass"
              id="pass"
              className={RegisterStyle.input}
              required
            />
          </div>
          <button type="submit" className={RegisterStyle.button}>
            Confirmar
          </button>
        </form>
        <Link to="/">
          <button className={RegisterStyle.secondaryButton}>Ir al login</button>
        </Link>
      </div>
    </div>
  );


}


export default RegisterInfo