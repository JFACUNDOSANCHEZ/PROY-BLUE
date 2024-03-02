import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userID } from "../../redux/actions";
import Perfil from "../perfil/Perfil";


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

    return (
        <div>
            <Perfil user={usuario} />
        </div>
    );
};

export default User;
