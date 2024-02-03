import { useEffect } from "react";
import { detail, updateData, deleteData } from "../../redux/actions";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from './style.module.css';
import { useState } from "react";
import { jwtDecode } from "jwt-decode"


const Detail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {

        dispatch(detail(id))
    }, [dispatch, id])
    const pass = useSelector((state) => state.detail)
    console.log('aca esta el passs' + pass.userId);
    useEffect(() => {
        setEditedData(pass)
    }, [pass])


    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({});
    const [iduser, setIduser] = useState('')


    const fecha = new Date(pass.createdAt);
    const fechaFormateada = fecha.toLocaleDateString();
    const horaFormateada = fecha.toLocaleTimeString();



    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleEditClickNeg = () => {
        setIsEditing(false);

    }
    const handleDeletClick = async () => {
        dispatch(deleteData(id));

    }

    const handleSaveClick = () => {

        dispatch(updateData(editedData, pass.id));
        setIsEditing(false);
        setConfir(true)

    };
    console.log('aca esta el userCreador  ' + pass.userId);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({
            ...editedData,
            [name]: value,
        });
    };
    const [nivel, setNivel] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        const decodedToken = jwtDecode(token);
        console.log('aca esta el id del user  ' + decodedToken.usuarioId);
        setNivel(decodedToken.nivel)
        setIduser(decodedToken.usuarioId)
    }, []);


    console.log(nivel);

    return (
        <div>

            <div>
                <Link to={"/home"}>
                    <button className={style.button}>Volver</button>
                </Link>
            </div> 
            <div className={style.div}>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/007/033/146/non_2x/profile-icon-login-head-icon-vector.jpg"
                    alt="icn"
                    width="150px"
                    className={style.img}
                />
                {
                    nivel == 3 || iduser == pass.userId ? (
                        <div className={style.d}>
                            <button onClick={handleDeletClick}>Eliminar pasajero</button>
                            <button onClick={handleEditClick} className={style.ed}>
                                <p>EDITAR</p>     </button>
                        </div>
                    ) : (
                        <div>


                        </div>
                    )
                }
                <div className={style.coso}>
                    <div className={style.a}>
                        <h2>Fecha: {fechaFormateada}</h2>
                    </div>
                    <div className={style.b}>
                        <h2>Hora: {horaFormateada}</h2>
                    </div>
                </div>

                {isEditing ? (

                    <div>
                        <div>

                            <span className={style.a}>Nombre:</span>
                            <input
                                type="text"
                                name="name"
                                value={editedData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <span className={style.a}>DNI:</span>
                            <input
                                type="text"
                                name="dni"
                                value={editedData.dni}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <span className={style.a}>Motivo:</span>
                            <input
                                type="text"
                                name="motivo"
                                value={editedData.motivo}
                                onChange={handleInputChange}
                            />

                        </div>

                        <button onClick={handleSaveClick}>Guardar</button>

                        <button onClick={handleEditClickNeg} >
                            cancelar
                        </button>
                    </div>
                ) : (

                    <div>
                        <h2 className={style.a}>Nombre: {editedData?.name}</h2>
                        <h2 className={style.a}>DNI: {editedData?.dni}</h2>
                        <div className={style.motiv}>

                            <h2 className={style.a}>Motivo: {editedData?.motivo}</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Detail;