import { useState, useEffect } from "react"
import validation from "./validation";
import { login } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import style from './style.module.css'
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";




const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [dataUser, setDataUser] = useState({
        correoElectronico: "",
        contraseña: ""
    });
    const [errors, setErrors] = useState({});

    const handlechange = (event) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        })
    }
    useEffect(() => {
        if (dataUser.correoElectronico !== "" || dataUser.contraseña !== "") {
            const validacion = validation(dataUser);
            setErrors(validacion)
        }
    }, [dataUser])
    console.log(dataUser);

    const token = useSelector(state => state.token)
    console.log(token);
    useEffect(() => {
        
        if (token && token.length !== 0) {
            localStorage.setItem('token', token); 
            const decodedToken = jwtDecode(token);
    
            if (decodedToken && decodedToken.nivel) {
                switch (decodedToken.nivel) {
                    case "1":
                        navigate('/home');
                        break;
                    case "2":
                        navigate('/home/');
                        break;
                    case "3":
                        navigate('/home');
                        break;
                    default:
                        navigate('/home');
                        break;
                }
            }
        }
    }, [token, navigate]);



    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(dataUser);
            dispatch(login(dataUser))
        } catch (error) {
            console.error(error);
            alert('Contraseña / Correo incorrecto' + error)
        }


    }



    return (
        <div className={style.formContainer}>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <span>Correo electrónico:</span>
            <input
              type="email"
              name="correoElectronico"
              value={dataUser.correoElectronico}
              onChange={handlechange}
              className={style.textInput}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <span>Contraseña:</span>
            <input
              type="password"
              name="contraseña"
              value={dataUser.password}
              onChange={handlechange}
              className={style.textInput}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button type="submit" className={style.button}>Ingresar</button>
          <br /><br />

       
  

        </form>
      </div>
    );
  };
    

export default Login