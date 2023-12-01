import style from './style.module.css'
import { Link } from 'react-router-dom'
import { delet } from '../../redux/actions'
import { useDispatch } from 'react-redux'


const Card = (pas) => {

    const dispatch = useDispatch();
    const handleClick = () => {

dispatch(delet(pas.id))

    }


    console.log(pas);
    return (
        <div className={style.div}>

            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="us" width='85px' />
            <h2>Nombre:{pas.name}</h2>
            <h2>DNI:{pas.dni}</h2>
            <h2>Motivo:{pas.motivo}</h2>
            <div  className={style.nav}>

            <Link to={`/home/detail/${pas?.id}`}>
                <button>
                VER MAS
                </button>
            </Link>
            <button
                 onClick={handleClick} >X</button>
                 </div>
        </div>
    )


}


export default Card