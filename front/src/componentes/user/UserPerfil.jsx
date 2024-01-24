import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from './style.module.css';
import { userID, userPut , borrarT} from "../../redux/actions";
import pf from '../../../public/pf.svg'


const User = () => {
    
    
    
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch()
    
    console.log(id);
    useEffect(() => {

        dispatch(userID(id))

    }, [])
    
    const usuario = useSelector(state => state.user)
    console.log(usuario);
    useEffect(() => {
        setEditedData({ ...usuario });

    }, [usuario])

    const [editedData, setEditedData] = useState({});
    const [isEditing, setIsEditing] = useState(false);


console.log(editedData);
console.log(editedData);
    console.log(usuario);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleEditClickNeg = () => {
        setIsEditing(false);
    }

    const handleCerrarSesion = () => {
        const token = localStorage.getItem('token');
        console.log("Dentro del handle " + token);
        if (token) {

            localStorage.removeItem("token");
            dispatch(borrarT())

            navigate('/');
        }
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
          <h1>Perfil</h1>
          <div className={style.div}>
<div className={style.izq}>

            <img src={pf} alt="icn" width="150px" />
            <br />
            <br />
            <div>
              <button onClick={handleEditClick} className={style.ed}>
                <p>Editar perfil</p>
              </button>
            </div>
              <button onClick={handleCerrarSesion}>Cierre de sesión</button>
</div>
            <div>

            {isEditing ? (
              <div className={style.userInfo}>
                <div className={style.userInfoItem} >
                  <span>Nombre usuario: </span>
                  <input
                    type="text"
                    name="nombreUsuario"
                    value={editedData.nombreUsuario}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={style.userInfoItem}>
                  <span>Nombre completo: </span>
                  <input
                    type="text"
                    name="nombreCompleto"
                    value={editedData.nombreCompleto}
                    onChange={handleInputChange}
                    />
                </div>
                <div className={style.userInfoItem}>
                  <span>Nivel: </span>
                  <input
                    type="text"
                    name="nivel"
                    value={editedData.nivel}
                    onChange={handleInputChange}
                    />
                </div>
                <div className={style.userInfoItem}>
                  <span>Correo: </span>
                  <input
                    type="text"
                    name="correoElectronico"
                    value={editedData.correoElectronico}
                    onChange={handleInputChange}
                    />
                </div>
                <button onClick={handleEditClickNeg}>Cancelar</button>
                <button onClick={handleSaveClick}>Guardar</button>
              </div>
            ) : (
              <div className={style.userInfo}>
                <div className={style.userInfoItem}>
                  <span>Nombre usuario: </span>
                  <span>{editedData?.nombreUsuario}</span>
                </div>
                <div className={style.userInfoItem}>
                  <span>Nombre completo: </span>
                  <br />
                  
                  <span>{editedData?.nombreCompleto}</span>
                </div>
                <div className={style.userInfoItem}>
                  <span>Nivel: </span>
                  <span>{editedData?.nivel}</span>
                </div>
                <div className={style.userInfoItem}>
                  <span>Correo: </span>
                  <span>{editedData?.correoElectronico}</span>
                </div>
                
              </div>
            )}
          </div>
            </div>
        </div>
      );
    };
    
    export default User;