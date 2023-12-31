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
import AllUsers from "../users/allUsers";
import PosiblesUsers from "../posibleUsers/PosibleUsers";



const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);





    };
    const [showModal2, setShowModal2] = useState(false);
    const openModal2 = () => {
        setShowModal2(true);
    };

    const closeModal2 = () => {
        setShowModal2(false);
    };


    const [showModal3, setShowModal3] = useState(false);
    const openModal3 = () => {
        setShowModal3(true);
    };

    const closeModal3 = () => {
        setShowModal3(false);
    };


    const [showModal4, setShowModal4] = useState(false);
    const openModal4 = () => {
        setShowModal4(true);
    };

    const closeModal4 = () => {
        setShowModal4(false);
    };








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
        <div >



            <div className={style.divContain}>

                <div className={style.contain}>
                    <h1>
                        <span className={`${style.letter1}`}>B</span>
                        <span className={`${style.letter2}`}>L</span>
                        <span className={`${style.letter3}`}>U</span>
                    </h1>
                </div>
                <Searchbar />
                {
                    nivel == 2 ? (
                        <div className={style.contain}>

                            <button onClick={openModal} className={style.mas} title="Agregar a la lista negra">+</button>

                            {showModal && (
                                <Modal closeModal={closeModal}>
                                    <Form></Form>
                                </Modal>
                            )}

                           
                           

                           

                        </div>


                    ) : (
                        <div>

                        </div>
                    )
                }
                {
                    nivel == 3 ? (
                        <div className={style.d}>
                              <button onClick={openModal} className={style.mas} title="Agregar a la lista negra">+</button>

{showModal && (
    <Modal closeModal={closeModal}>
        <Form></Form>
    </Modal>
)}


    <button onClick={openModal3} className={style.mas} title="users">Usuarios</button>

    {showModal3 && (
        <Modal closeModal={closeModal3}>
            <AllUsers></AllUsers>
        </Modal>
    )}



    <button onClick={openModal4} className={style.mas} title="Solicitudes de Usuarios">Solicitudes</button>

    {showModal4 && (
        <Modal closeModal={closeModal4}>
            <PosiblesUsers></PosiblesUsers>
        </Modal>
    )}
                        </div>
                        ) : (
                        <div></div>
                    )
                }

                <div className={style.d}>

                    <img
                        src={pf}
                        alt="co" width='56px' onClick={openModal2}
                        className={style.img} title=" Mi Perfil"
                    />
                    <div>


                    </div>
                </div>



                {showModal2 && (
                    <div>



                        {showModal2 && (
                            <Modal closeModal={closeModal2}>
                                <UserPerfil />

                            </Modal>
                        )}
                    </div>
                )}
            </div>

            <div className={style.divo}>
                <Cards passegers={passegers} usuario={usuario} ></Cards>
            </div>

        </div>

    )

}

export default Home