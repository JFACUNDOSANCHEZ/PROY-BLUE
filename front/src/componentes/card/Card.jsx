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

        <div className={style.divi}>
            <div className={style.div}>
                <div>

                    <img src="https://static.vecteezy.com/system/resources/previews/007/033/146/non_2x/profile-icon-login-head-icon-vector.jpg" alt="us" className={style.img} width='75px' />
                </div>
                <div className={style.coso}>


                <div className={style.p} >
                <h2 className={style.h2}>Nombre: {pas.name}</h2>
                </div>
                
                <div className={style.b}>

                <h2 className={style.h2}> DNI/PASAPORTE: {pas.dni}</h2>
                </div>

                </div>
                <div  className={style.nav} >
                    <Link to={`/home/detail/${pas?.id}`}>
                        <button className={style.ver}>
                            VER MAS
                        </button>
                    </Link>
                    {/* <button
                        onClick={handleClick} className={style.button} >x</button> */}
                </div>
            </div>

        </div>
    )


}


export default Card