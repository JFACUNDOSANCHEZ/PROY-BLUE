import { Link } from "react-router-dom";
import style from './style.module.css'

const LandingPage = () => {

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1>BLU</h1>
                <p>

                    Black List / Undesirables
                </p>
          

                <Link to={'/register'}>
                    <button>
                        Register
                    </button>
                </Link>


                <Link to={'/login'}>
                    <button>
                        Login
                    </button>
                </Link>
            </div>
<div className={style.image}>

                <img src="https://static.vecteezy.com/system/resources/previews/022/873/196/non_2x/data-blacklist-icon-outline-business-user-vector.jpg" alt="log" width='550px' />
</div>
        </div>
    )


}

export default LandingPage