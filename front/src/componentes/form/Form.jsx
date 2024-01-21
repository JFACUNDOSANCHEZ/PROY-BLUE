import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postP, userID } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import style from './style.module.css'



const Form = () => {






  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    dni: '',
    motivo: '',
  })


  


  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   console.log('aca esta eltoken ' + token);

  //   if (token) {
  //     try {
  //       const decodedToken = jwtDecode(token);
  //       console.log(decodedToken);


  //     } catch (error) {
  //       console.error('Error al decodificar el token:', error);
  //       navigate('/');
  //     }
  //   }
  // }, [dispatch]);
  const handleChange = (event) => {
    event.preventDefault();
    let value = event.target.value;


    if (event.target.name === 'name') {
      value = value.toUpperCase();
    }

    setForm({
      ...form,
      [event.target.name]: value
    });
  }

  const usuario = useSelector(state => state.user)
  console.log(usuario);



  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.dni || !form.motivo) {
      alert('Faltan Datos!')
    } else {
      const data = { ...form, uId: usuario.id }
      dispatch(postP(data))
    }

  }

  console.log(form);


  return (

    <div>
      <div className={style.formContainer}>
        <h2>Ingresar datos del pasajero</h2>
      <button onClick={authGoogle}>click</button>

        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.div}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/007/033/146/non_2x/profile-icon-login-head-icon-vector.jpg"
              alt="icn"
              width="150px"
              className={style.img}
            />
          </div>

          <div className={style.formGroup}>
            <h3>Nombre: </h3>
            <input className={style.dni} type="text" name="name" onChange={handleChange} value={form.name} />
          </div>

          <div className={style.formGroup}>
            <h3>
              DNI:
            </h3>
            <input className={style.dni} type="text" name="dni" onChange={handleChange} value={form.dni} />
          </div>

          <div className={style.formGroup}>
            <h3>Motivo: </h3>
            <input type="text" name="motivo" onChange={handleChange} value={form.motivo} className={style.largeInput} />
          </div>

          <button type="submit" className={style.button}>CARGAR DATOS</button>
        </form>

      </div>
    </div>
  );
};


export default Form