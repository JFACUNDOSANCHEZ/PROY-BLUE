import { useDispatch, useSelector } from "react-redux";
import { userID } from "../../redux/actions";
import style from './style.module.css'
import Searchbar from "../searchBar/SearchBar";
import Cards from "../cards/Cards";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import Modal from "../modal/Modal";
import Form from "../form/Form"
import UserPerfil from '../user/UserPerfil'
import pf from '../../../public/pf.svg'
import AllUsers from "../allusers/AllUsers";
import PosiblesUsers from "../posibleUsers/PosibleUsers";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";


const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [nivel, setNivel] = useState('');

    useEffect(() => {

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
                <span className={`${style.letter1}`}></span>
                <span className={`${style.letter2}`}>.</span>
                <Nav></Nav>
               
          
            <br /><br /><br /><br /><br />
            <Searchbar></Searchbar>

            <div  className={ style.contentCards }>
                <Cards passegers={passegers} usuario={usuario} ></Cards>
            </div>
            </div>

            
        

        </div>

    )

}

export default Home