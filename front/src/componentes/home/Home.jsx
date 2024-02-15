import { useDispatch, useSelector } from "react-redux";
import { allPasseger, guardarToken, userID } from "../../redux/actions";
import style from './style.module.css'
import Searchbar from "../searchBar/SearchBar";
import Cards from "../cards/Cards";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [nivel, setNivel] = useState('');


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
        }
        console.log(token);
      }, []);
    useEffect(() => {
        try {

            const tokenString = localStorage.getItem('token');

            if (tokenString) {
                const token = JSON.parse(tokenString);
                const decodedToken = jwtDecode(token);
                dispatch(allPasseger(token));
                dispatch(userID(decodedToken.usuarioId, token));
                console.log(token);
                setNivel(decodedToken.nivel);
            } else {
                navigate('/')
                throw new Error('El token no está presente en el objeto respuesta');
            }
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    }, []);
    console.log(nivel);

let passegers
   passegers = useSelector((state) => state.passeger)
   passegers.sort((a, b) => {
        // Convertir las fechas a objetos Date para compararlas
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        
        // Comparar las fechas y devolver el resultado de la comparación
        return dateB - dateA;
      });
    console.log(passegers);

    const usuario = useSelector(state => state.user)
    console.log(usuario);






    return (
        <div className={style.contentContainer} >

            <div className={style.navBar}>


                <Nav></Nav>


                <div>

                    <Searchbar></Searchbar>
                </div>





                <div className={style.contentCards}>

                    <Cards passegers={passegers} usuario={usuario} ></Cards>
                </div>
            </div>
            <Footer></Footer>



        </div>

    )

}

export default Home