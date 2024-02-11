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


const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [nivel, setNivel] = useState('');
    
    useEffect(() => {
        try {
            
            const tokenString = localStorage.getItem('token');
            if (tokenString) {
                const token = JSON.parse(tokenString);
                dispatch(allPasseger(token));
                dispatch(userID(decodedToken.usuarioId, token));
                console.log(token);
                const decodedToken = jwtDecode(token);
                setNivel(decodedToken.nivel);
            } else {
                throw new Error('El token no está presente en el objeto respuesta');
            }
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    }, []);
    console.log(nivel);


    const passegers = useSelector((state) => state.passeger)
    console.log(passegers);
    
    const usuario = useSelector(state => state.user)
    console.log(usuario);






    return (
        <div className={style.contentContainer} >

            <div className={style.navBar}>

                <span className={style.letter2}></span>
                 <Nav></Nav>

                <br />
              
                

                <div className={style.divPreguntas}>
      


             
                <Searchbar ></Searchbar>
              
                
                

                 
                </div>
           

                <div className={style.contentCards}>

                    <Cards passegers={passegers} usuario={usuario} ></Cards>
                </div>
            </div>




        </div>

    )

}

export default Home