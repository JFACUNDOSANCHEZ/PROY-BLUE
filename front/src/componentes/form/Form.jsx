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


    return (
        <div>

<Link to={'/home'}>
                    <button>
                        👈
                    </button>
                </Link>

            <h1>FORM</h1>



            <form onSubmit={handleSubmit} >
                <span>Nombre: </span>
                <input type="text" name="name" onChange={handleChange} value={form.name} />

                <span>DNI: </span>
                <input type="text" name="dni" onChange={handleChange} value={form.dni}/>

                <span>Motivo: </span>
                <input  className={style.input}  type="text" name="motivo" onChange={handleChange} value={form.motivo}/>

                <button 
                   className={style.button}
                    type="submit"> CARGAR DATOS
                </button>

            </form>







        </div>



    )



}


export default Form