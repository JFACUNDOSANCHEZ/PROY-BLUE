import { useDispatch, useSelector } from "react-redux";
import { allPasseger, userID } from "../../redux/actions";
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
dispatch(allPasseger())
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {

            const decodedToken = jwtDecode(token);
            setNivel(decodedToken.nivel)
            dispatch(userID(decodedToken.usuarioId))
        } else navigate('/')
    }, []);
    console.log(nivel);

    const passegers = useSelector((state) => state.passeger)
    console.log(passegers);






    const usuario = useSelector(state => state.user)
    console.log(usuario);

    return (
        <div className={style.contentContainer} >

            <div  className={style.navBar}>
            
                <span className={style.letter2}></span>
                <Nav></Nav>
               
            <br />
          <h2>Bienvenido {usuario.nombreCompleto} </h2>
<br />

<p className={style.divPregunta}>
                ¿Quieres agregar un pasajero a la lista?
    </p>
       

            <Link to="/form">
                <button className={style.divPr}>
                

                Agregar pasajero
                </button>
                </Link>
            



            <br />
            <br /><br /><br /><br />
            <div className={style.divPreguntas}>

            Busca en la lista negra
            </div>
            <Searchbar></Searchbar>

            <div  className={ style.contentCards }>
                <Cards passegers={passegers} usuario={usuario} ></Cards>
            </div>
            </div>

            
        

        </div>

    )

}

export default Home