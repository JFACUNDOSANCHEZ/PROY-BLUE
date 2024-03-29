import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { confirmacion, getPosible, postConfirm } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import RegisterStyle from './RegisterStyle.module.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const RegisterInfo=()=>{

const navigate = useNavigate()
const dispatch = useDispatch()



    
    const [code, setCode] =useState('')
    const [codigo, setCodigo]= useState('')
    useEffect(()=>{
      const code = Math.random().toString(36).substring(2, 8); 
      setCodigo(code)
    },[])
    
    const handleCodeChange = (event) => {
      const { value } = event.target;
      setCode(value);      
    };
    
    const usuario  = JSON.parse(localStorage.getItem('user'));
    const handleSendCode = () => {
      const code = Math.random().toString(36).substring(2, 8); 
      setCodigo(code)
      if (code && usuario.correoElectronico) {
          dispatch(postConfirm(code,  usuario.correoElectronico));
        }
  };

  const handleSubmit=()=>{
    if (code === codigo) {
      dispatch(confirmacion(usuario, navigate))
      Swal.fire({
        title: 'Recibimos tu registro, espere confirmacion',
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
const codig = useSelector((state)=> state.codigo)
return (
    <div className={RegisterStyle.container}>
      <div className={RegisterStyle.content}>
        <br />
        <h2>Bienvenido a BLU</h2>
        <p>¡Somos una herramienta de seguridad para nuestra comunidad hotelera!</p>
        <br />
        <p>Vamos a enviar un código de confirmación a tu correo electrónico {usuario?.correoElectronico} para confirmar tu identidad.</p>
        <button onClick={handleSendCode} className={RegisterStyle.buttonG}>Enviar Código</button>
        <form onSubmit={handleSubmit}>
<br />
          <div className={RegisterStyle.inputWrapper}>
         
          <input
          className={RegisterStyle.input}
        type="text"
        id="codeInput"
        placeholder="Ingrese el código de 6 digitos"
        value={code}
        onChange={handleCodeChange} 
        required
        maxLength={6} 
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