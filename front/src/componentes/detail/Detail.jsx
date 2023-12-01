import { useEffect } from "react";
import { detail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from './style.module.css'

const Detail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {

dispatch(detail(id))

    }, [])

    const pass = useSelector((state)=> state.detail)
    return (
        <div >
            <h1>Detail</h1>

            <div>
                <Link to={'/home'} >

            <button>
                Home
            </button>
                </Link>
            </div>
            <div className={style.div}>

<h2>Nombre: {pass.name}</h2>
<h2>DNI: {pass.dni}</h2>
<h2>Motivo: {pass.motivo}</h2>
<h2>Hora y Fecha: {pass.createdAt}</h2>
<img src="https://static.vecteezy.com/system/resources/previews/007/033/146/non_2x/profile-icon-login-head-icon-vector.jpg" alt="icn" width='150px' />

            </div>

        </div>
    )


}
export default Detail;