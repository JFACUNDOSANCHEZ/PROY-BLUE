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
    useEffect(() => {
        if (token) {
    
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
        <div className={style.container}>
            <div className={style.back} >
                <Link to={'/'}>
                    <button>
                        👈
                    </button>
                </Link>
            </div>
            <div className={style.div} >


                <h1>LOGIN</h1>

                <form onSubmit={handleSubmit}  >
                    <span> Correo electronico: </span>
                    <input
                        type="email"
                        name="correoElectronico"
                        value={dataUser.correoElectronico}
                        onChange={handlechange}
                    />


                    {errors.email && <p>{errors.email}</p>}

                    <br />

                    <span>Contraseña</span>
                    <input
                        type="password"
                        name="contraseña"
                        value={dataUser.password}
                        onChange={handlechange}
                    />
                    <br />

                    {errors.password && <p>{errors.password}</p>}

                    <button type="submit" className={style.button} >Submit</button>


                </form>

            </div>
        </div>
    )
}
export default Login