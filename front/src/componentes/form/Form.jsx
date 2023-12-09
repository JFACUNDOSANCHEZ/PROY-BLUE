import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postP } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import style from './style.module.css'


const Form = () => {
    
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: '',
        dni: '',
        motivo: '',
    })
    

 
    //  useEffect(() => {
    //       const token = localStorage.getItem('token');
    //      if (token) {
    //    console.log(token);
    //    const decodedToken = jwtDecode(token); 
    //    console.log(decodedToken);
    //        if (decodedToken && decodedToken.nivel) {
 
    //          switch (decodedToken.nivel) {
    //              case "1":
    //            alert('Solo puede acceder el nivel 2')
    //              navigate('/home');
    //              break;
    //            case "2":
     
    //              navigate('/home/post');
    //              break
    //              case "3":
     
    //              navigate('/home/post');
    //              break;
    
    //            default:
    //              navigate('/');
    //              break;
    //          }
    //        }
    //      } else navigate('/')
    //    }, []);
    const handleChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
    
        // Verificar si el campo que se está modificando es 'name'
        if (event.target.name === 'name') {
            value = value.toUpperCase(); // Convertir el valor a mayúsculas
        }
    
        setForm({
            ...form,
            [event.target.name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!form.name || !form.dni || !form.motivo) {
            alert('Faltan Datos!')
        } else {
dispatch(postP(form))
        }

    }

    console.log(form);


    return (<div>

        <Link to={'/home'}>
          <button>Volver</button>
        </Link>
        <h1 className={style.h}>Agregar pasajero a la lista negra</h1>
        <div className={style.formContainer}>
  
  
        <form onSubmit={handleSubmit} className={style.form}>
      <h2>Ingresar datos</h2>
      <div className={style.div}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/033/146/non_2x/profile-icon-login-head-icon-vector.jpg"
          alt="icn"
          width="150px"
          className={style.img}
        />
      </div>

      <div className={style.formGroup}>
        <span>Nombre: </span>
        <input className={style.dni} type="text" name="name" onChange={handleChange} value={form.name} />
      </div>

      <div className={style.formGroup}>
        <span>DNI: </span>
      </div>
        <input className={style.dni} type="text" name="dni" onChange={handleChange} value={form.dni} />

      <div className={style.formGroup}>
        <span>Motivo: </span>
        <input type="text" name="motivo" onChange={handleChange} value={form.motivo} className={style.largeInput} />
      </div>

      <button type="submit" className={style.button}>CARGAR DATOS</button>
    </form>
      </div>
    </div>
    );
  };


export default Form