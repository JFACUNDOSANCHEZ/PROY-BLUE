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

console.log(nationalities);



const navigate = useNavigate()
  const dispatch = useDispatch();
  const [file , setFile ] = useState(null )
  const [form, setForm] = useState({
    name: '',
    dni: '',
    motivo: '',
    nacionalidad: ''
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
        result = form.img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrLqEKuEDoPVnaHf0u81pB0UrOvynZFDquA&usqp=CAU';
      }

      const data = { ...form, uId: usuario.id, img: result}
      dispatch(postP(data, navigate))
      console.log(data);
    }

  }

  console.log(form);


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
  <input type="file" onChange={ e => setFile(e.target.files[0])} />
</div>
      <div>
            <h3>Nacionalidad</h3>
            <select
              name="nacionalidad"
              value={form.nacionalidad}
              onChange={handleChange}
            >
              {countryList.getNames().map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>


          <div className={style.formGroup}>
            <h3>Apellido y Nombre: </h3>
            <input 
            placeholder="Pepe Argento"
             className={style.dni} 
             type="text"
              name="name" onChange={handleChange} value={form.name} />
          </div>

          <div className={style.formGroup}>
            <h3>
              DNI / PASAPORTE:
            </h3>
            <input placeholder="33.333.333" className={style.dni} type="text" name="dni" onChange={handleChange} value={form.dni} />
          </div>

          <div className={style.formGroup}>
            <h3>Motivo / Descripcion: </h3>
            <input placeholder="Agregar una breve descripcion sobre el huesped" type="text" name="motivo" onChange={handleChange} value={form.motivo} className={style.largeInput} />
          </div>

          <button type="submit" className={style.button}>CARGAR DATOS</button>
        </form>

      </div>
    </div>
  );
};


export default Form