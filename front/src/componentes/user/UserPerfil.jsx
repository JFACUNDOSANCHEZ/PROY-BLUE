import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from './style.module.css';
import { userID, userPut } from "../../redux/actions";

const User = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({
        nombreCompleto: '',
        nombreUsuario: '',
        activo: ''

    });

    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {

        dispatch(userID(id))

    }, [])

    const usuario = useSelector(state => state.user)

    console.log(usuario);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleEditClickNeg = () => {
        setIsEditing(false);
    }



    const handleSaveClick = () => {

        dispatch(userPut(editedData, id));
        setIsEditing(false);


    };
    console.log(editedData);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({
            ...editedData,
            [name]: value,
        });
    };

    return (
        <div>
            <div>
                <Link to={"/home"}>
                    <button className={style.button}>Volver</button>
                </Link>
            </div>

            <h1>DETAIL USUARIO</h1>

            <img
                    src="https://static.vecteezy.com/system/resources/previews/007/033/146/non_2x/profile-icon-login-head-icon-vector.jpg"
                    alt="icn"
                    width="150px"
                 
                />

            <h2>Activo: {usuario?.activo ? 'TRUE' : 'FALSE'}</h2>

            <button onClick={handleEditClick} className={style.ed}>
                <img src="https://cdn.icon-icons.com/icons2/1155/PNG/512/1486564724-pencil_81530.png" alt="ed" width='28px' />
            </button>
            {isEditing ? (<div>
                <div>

            <h2>Nombre usuario::</h2>
                <input type="text"
                    name="nombreUsuario"
                    value={editedData.nombreUsuario}
                    onChange={handleInputChange}
                    />
                    </div>
<div>


<h2>Nombre completo:</h2>
                <input type="text"
                    name="nombreCompleto"
                    value={editedData.nombreCompleto}
                    onChange={handleInputChange}
                    />

                    </div>
                    <h2>Nivel: {usuario?.nivel}</h2>

                <h2>Correo: {usuario?.correoElectronico}</h2>
                <button onClick={handleEditClickNeg} >
                    cancelar
                </button>

                <button onClick={handleSaveClick}>Guardar</button>

            </div>) : (
                <div>


                    <h2 >Nombre usuario: {usuario?.nombreUsuario}</h2>
                    <h2 >Nombre completo: {usuario?.nombreCompleto}</h2>
                    <h2>Nivel: {usuario?.nivel}</h2>
                    <h2>Correo: {usuario?.correoElectronico}</h2>
                </div>
            )}

        </div>
    )

}

export default User