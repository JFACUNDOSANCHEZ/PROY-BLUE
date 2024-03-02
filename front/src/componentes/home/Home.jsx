import { useDispatch, useSelector } from "react-redux";
import { allPasseger, guardarToken, userID } from "../../redux/actions";
import style from './style.module.css'
import Searchbar from "../searchBar/SearchBar";
import Cards from "../cards/Cards";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [nivel, setNivel] = useState('');


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
          const decodedToken = jwtDecode(token);
          console.log(decodedToken);
        if (!decodedToken.nivel) {
        switch (decodedToken.nivel) {
        default:
        navigate('/');
        break;
        }}}
      
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

let passegers
   passegers = useSelector((state) => state.passeger)
   passegers.sort((a, b) => {
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        return dateB - dateA;
      });
    
    const usuario = useSelector(state => state.user)

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