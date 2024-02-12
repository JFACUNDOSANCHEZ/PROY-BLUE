import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPosible, postConfirm } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import RegisterStyle from './RegisterStyle.module.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const RegisterInfo=()=>{

const navigate = useNavigate()
const dispatch = useDispatch()
    const [user, setUser] = useState(null);
    useEffect(() => {
      const userEmail = localStorage.getItem('user');
      if (userEmail) {
        const userData = JSON.parse(userEmail);
        setUser(userData);
      }
    }, []);
    
    const [code, setCode] =useState('')
    const [codigo, setCodigo]= useState('')
useEffect(()=>{

    const code = Math.random().toString(36).substring(2, 8); // Genera un código de 6 caracteres alfanuméricos
   setCodigo(code)
   
  },[])
  
  const handleCodeChange = (event) => {
    const { value } = event.target;
    setCode(value); // Actualiza el estado code con el nuevo valor ingresado por el usuario

  };

  const handleSubmit=()=>{
    if (code === codigo) {
      Swal.fire({
        title: 'Espere la confirmacion de la administracion',
        text: 'Recibira un mail de confirmacion.',
        icon: 'success',
        confirmButtonText: '¡Entendido!',
        onClose: () => {
            location.reload(); // Esto recargará la página después de que se muestre el mensaje de éxito
        }
    });
      navigate('/')
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'El codigo no es correcto',
        text: 'El codigo no es correcto',
      });
    }

  }
  useEffect(() => {
    dispatch(postConfirm(codigo, user));
  }, []);

  console.log(user);
  console.log(codigo);

const codig = useSelector((state)=> state.codigo)
    console.log(codig);
return (
    <div className={RegisterStyle.container}>
      <div className={RegisterStyle.content}>
        <br />
        <h2>Bienvenido a BLU</h2>
        <p>¡Somos una herramienta de seguridad para nuestra comunidad hotelera!</p>
        <br />
        <p>Hemos enviado un código de confirmación a tu correo electrónico {user} para confirmar tu identidad.</p>

        <form onSubmit={handleSubmit}>
<br />
          <div className={RegisterStyle.inputWrapper}>
         
          <input
        type="text"
        id="codeInput"
        placeholder="Ingrese el código"
        value={code}
        onChange={handleCodeChange} // Llama al manejador de cambio cuando el usuario ingresa el código
        required
        maxLength={6} // Limita la longitud máxima del código a 6 caracteres
      />
      
          </div>
         
         
         
          <button type="submit" className={RegisterStyle.button}>
            Confirmar
          </button>
        </form>
        <Link to="/">
          <button className={RegisterStyle.button}>Ir al login</button>
        </Link>
      </div>
    </div>
  );


}


export default RegisterInfo