import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postP, userID } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import style from './style.module.css'
import { uploadFile } from "../../firebase/config";
import Nav from "../nav/Nav";
import Swal from 'sweetalert2'
import countryList from 'country-list';


const Form = () => {


  const nationalities = countryList.getNames();




const navigate = useNavigate()
  const dispatch = useDispatch();
  const [file , setFile ] = useState(null )
  const [form, setForm] = useState({
    name: '',
    dni: '',
    motivo: '',
    nacionalidad: ''
  })


  
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) {
        navigate('/');
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
    if (!decodedToken.nivel) {
    switch (decodedToken.nivel) {
    case "1":

    break;
    case "2":
      navigate('/');

    break;
    case "3":
    navigate('/');
    break;
    default:
    navigate('/');
    break;
    }
    }
    }},[])



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
 



  const handleSubmit =async (event) => {
    let result;
    event.preventDefault()
    if (!form.name || !form.dni || !form.motivo) {

            Swal.fire({
                title: 'Faltan datos',
                text: 'Complete todos los campos.',
                icon: 'warning',
                confirmButtonText: '¡Entendido!'
            });
    
    } else {
     
      if (file) {
        result = await uploadFile(file);
        console.log(result);
      } else {
        // Si no hay un archivo nuevo, podrías usar el valor actual de img o proporcionar un valor predeterminado
        result = form.img || 'https://firebasestorage.googleapis.com/v0/b/blu-p-51f37.appspot.com/o/3e3e0831-7a27-4414-be40-ef8e57a0adda?alt=media&token=ac15bbb8-5acd-4ab4-8fc1-836f9bc8efcc';
      }

      const data = { ...form, uId: usuario.id, img: result}
      dispatch(postP(data, navigate))
      console.log(data);
    }

  }



  return (

    <div>
      <div className={style.nav}>

      <Nav></Nav>
      </div>
      <div className={style.formContainer}>
   

        <form onSubmit={handleSubmit} className={style.form}>
     
              <h2>Datos del pasajero</h2>
   

<div>
  <h3>Imagen:</h3>
  <input type="file"   className={style.fileInput} onChange={ e => setFile(e.target.files[0])} />
</div>
      <div>
            <h3>Nacionalidad:</h3>
            <select
              name="nacionalidad"
              value={form.nacionalidad}
              onChange={handleChange}
              className={style.selectContainer}
            >
              {countryList.getNames().map((country, index) => (
                <option key={index} value={country}   className={style.selectOption}>
                  {country}
                </option>
              ))}
            </select>
          </div>


          <div className={style.formGroup}>
            <h3>Apellido y Nombre: </h3>
            <input 
            placeholder="Pedro Argento"
             className={style.dni} 
             type="text"
              name="name" onChange={handleChange} value={form.name} />
          </div>

          <div className={style.formGroup}>
            <h3>
              DNI / Pasaporte:
            </h3>
            <input placeholder="33.333.333" className={style.dni} type="text" name="dni" onChange={handleChange} value={form.dni} />
          </div>

          <div className={style.formGroup}>
  <h3>Motivo / Descripción: </h3>
  <textarea 
    placeholder="Agregar una breve descripción sobre el huésped" 
    name="motivo" 
    onChange={handleChange} 
    value={form.motivo} 
    className={style.largeTextarea} 
  />
</div>

          <button type="submit" className={style.button}>CARGAR DATOS</button>
        </form>

      </div>
    </div>
  );
};


export default Form