import { useDispatch, useSelector } from "react-redux";
import { userID } from "../../redux/actions";
import style from './style.module.css';
import Searchbar from "../searchBar/SearchBar";

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

import { Link } from "react-router-dom";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const [nivel, setNivel] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if (token) {
            const decodedToken = jwtDecode(token);
            setNivel(decodedToken.nivel);
            dispatch(userID(decodedToken.usuarioId));
        } else {
            navigate('/');
        }
    }, []);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };




    const handleLogout = () => {
        dispatch(setUser(null))
        localStorage.removeItem('user');
    }




    const usuario = useSelector(state => state.user);
    return (

        <div className={style.navBarContainer}>
           
                <div className={style.logoContainer}>
                    <h2>BLU</h2>
                </div>
            
            {/* <Searchbar></Searchbar> */}


            <div className={style.userContainer}>
                <Link to="#" className={style.customUserIcon} onClick={handleMenuToggle}>               <img

                    src='https://static.vecteezy.com/system/resources/previews/020/911/737/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png'
                    alt="co" width='56px'
                    className='{style.img}' title=" Mi Perfil"
                /></Link>
                {isMenuOpen && (
                    <div className={style.hamburgerMenuContainer}>
                        <div className={style.hamburgerMenu}>
                            {!usuario ? (
                                <>
                                    <Link to="/login" className={style.menuItem}>Iniciar Sesión</Link>
                                    <Link to="/register" className={style.menuItem}> Registrarse</Link>
                                </>
                            )
                                : (
                                    <>
                                        <Link to={`/user/${usuario.id}`} className={style.menuItem}>Perfil</Link>
                                        <Link to="/" onClick={handleLogout} className={style.menuItem} >Cerrar sesion</Link>
                                        { usuario.nivel == "2" && (
                                              <>
                                            <Link to="/form" >
                                          
                                                     Crear publicación
                                            
                                            </Link>
                                            </>
                                        )}
                                        {usuario.nivel == "3" && (
                                            <>
                                                <Link to={'/admin'} className={style.menuItem}>
                                                    Admin
                                                </Link>
                                                <Link to="/form" className={style.menuItem}>Agregar pasajero</Link>
                                            </>
                                        )}
                                    </>
                                )}
                        </div>
                    </div>
                )}
            </div>
   






        </div >

    )

}
export default Nav