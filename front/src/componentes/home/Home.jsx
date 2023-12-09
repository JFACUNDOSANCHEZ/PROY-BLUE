import { useDispatch, useSelector } from "react-redux";
import { allPasseger, close } from "../../redux/actions";
import style from './style.module.css'
import Searchbar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import Cards from "../cards/Cards";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";





const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(close())

    }, [])

  
    const [nivel, setNivel] = useState('');

 useEffect(() => {
     const token = localStorage.getItem('token');
     console.log(token);
     if (token) {

            const decodedToken = jwtDecode(token);
           setNivel(decodedToken.nivel)
    //         console.log(decodedToken);
    //         if (decodedToken && decodedToken.nivel) {
    //             console.log(decodedToken.nivel);

    //             switch (decodedToken.nivel) {
    //                 case "1":

    //                     navigate('/home');
    //                     break;
    //                 case "2":

    //                     navigate('/home');
    //                     break;

    //                 case "3":

    //                     navigate('/home');
    //                     break;

    //                 default:
    //                     navigate('/');
    //                     break;
    //             }
    //         }
       } else navigate('/')
    }, []);
    console.log(nivel);

    const passegers = useSelector((state) => state.passeger)
    console.log(passegers);

    const handleSelectChange = (e) => {
        if (e.target.value === 'cierre') {
          handleCerrarSesion(); 
        }
      };

    const handleCerrarSesion = () => {
        const token = localStorage.getItem('token');
        console.log("Dentro del handle " + token); 
                   if (token) {

            localStorage.removeItem('token');

            navigate('/');
        }
    }
    return (
        <div >



            <div className={style.divContain}>
                <div className={style.contain}>
                    <h1></h1>
                </div>
                {
                    nivel == 2 ? (
                        <div>
                            <Link to={'/home/post'}>
                                <button>
                                    Agregar Pasajero
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div>

                        </div>
                    )
                }
                <Searchbar />
                <select name="s" onChange={handleSelectChange}>
                    <option >-Seleccione</option>
                    <option value="perfil"> Perfil</option>
                    <option value="cierre">Cierre Sesión</option>

                </select>
                {
                    nivel == 3 ? (
                        <div>
                            <Link to={'/admin'}>
                                <button>
                                    admin
                                </button>
                            </Link>

                        </div>) : (
                        <div></div>
                    )
                }
         
            </div>

            <div className={style.divo}>
                <Cards passegers={passegers} ></Cards>
            </div>


        </div>

    )

}

export default Home