import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from './style.module.css';
import { userID, userPut } from "../../redux/actions";

const User = () => {
    
    
    
    
    const { id } = useParams();
    const dispatch = useDispatch()
    
    
    useEffect(() => {

        dispatch(userID(id))

    }, [])
    
    const usuario = useSelector(state => state.user)
    useEffect(() => {
        setEditedData({ ...usuario });

    }, [usuario])

    const [editedData, setEditedData] = useState({});
    const [isEditing, setIsEditing] = useState(false);


console.log(editedData);

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

        dispatch(userID(id))

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
                <p>EDITAR</p>     </button>
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


                    <h2 >Nombre usuario: {editedData?.nombreUsuario}</h2>
                    <h2 >Nombre completo: {editedData?.nombreCompleto}</h2>
                    <h2>Nivel: {editedData?.nivel}</h2>
                    <h2>Correo: {editedData?.correoElectronico}</h2>
                </div>
            )}

        </div>
    )

}

export default User