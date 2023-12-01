import { useDispatch, useSelector } from "react-redux";
import { allPasseger, close } from "../../redux/actions";
import style from './style.module.css'
import Searchbar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import Cards from "../cards/Cards";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";




const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
useEffect(()=>{
    dispatch(close())
},[])

    const handleClick = () => {
        dispatch(allPasseger())
    }

    const handleClose = () => {
        dispatch(close())

    }
    useEffect(() => {
        const token = localStorage.getItem('token');
       if (token) {
     console.log(token);
   
     const decodedToken = jwtDecode(token); 
     console.log(decodedToken);
         if (decodedToken && decodedToken.nivel) {
      console.log(decodedToken.nivel);

           switch (decodedToken.nivel) {
               case "1":
           
               navigate('/home');
               break;
             case "2":
             
               navigate('/home');
               break;

               case "3":
             
               navigate('/home');
               break;
           
             default:
               navigate('/');
               break;
           }
         }
       } else navigate('/')
     }, []);

            
    const passegers = useSelector((state) => state.passeger)
    console.log(passegers);


    return (
        <div>



            <div className={style.divContain}>
                <div className={style.contain}>
                    <h1>Home</h1>
                </div>
                <Searchbar />
                <div>
                    <button onClick={handleClick}>all passeger</button>
                </div>
                <div>

                    <button onClick={handleClose}> Close all </button>
                </div>
                <div>
                        <Link to={'/home/post'}>
                    <button>
                            Agregar Pasajero
                    </button>
                        </Link>
                </div>
                <div>
                        <Link to={'/admin'}>
                    <button>
                           admin
                    </button>
                        </Link>
                </div>

            </div>
            <div >
                <Cards passegers={passegers} ></Cards>
            </div>


        </div>

    )

}

export default Home