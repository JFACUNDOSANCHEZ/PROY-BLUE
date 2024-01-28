import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from './style.module.css';
import { userID, userPut , borrarT, user} from "../../redux/actions";
import pf from '../../../public/pf.svg'
import Perfil from "../perfil/Perfil";
import Nav from "../nav/Nav";

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
       
          <Perfil user={usuario}/>
          
            </div>
        // </div>
        );
      };
    
    export default User;
