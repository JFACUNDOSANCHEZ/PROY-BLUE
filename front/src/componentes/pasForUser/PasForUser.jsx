import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { allPasseger , userID} from "../../redux/actions";
import Cards from "../cards/Cards";
import { jwtDecode } from "jwt-decode";


const PasForUser = ({id}) =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [nivel, setNivel] = useState('');
    useEffect(()=>{
        dispatch(allPasseger())
    },[])

    // useEffect(() => {

    //     const token = localStorage.getItem('token');
    //     console.log(token);
    //     if (token) {

    //         const decodedToken = jwtDecode(token);
    //         setNivel(decodedToken.nivel)
    //         dispatch(userID(decodedToken.usuarioId))
    //     } else navigate('/')
    // }, []);
 
    const usuario = useSelector(state => state.user)
    const passegers = useSelector((state) => state.allpasseger)
    
    // const passegers = passeg.filter(pas => pas.userId === id)
    console.log(passegers) ;
console.log(id);
  

const passxUser = id ? passegers.filter((pass) => {
    console.log(typeof pass.userId, typeof id);
    return pass.userId === String(id);
  }) : [];
  console.log(passxUser);
    return (
      <div>
        {/* Verifica si passxUser tiene elementos antes de renderizar Cards */}
        {passxUser.length > 0 ? (
          <Cards passegers={passxUser} usuario={usuario} />
        ) : (
          <div></div>
        )}
      </div>
    );
  };
  
  export default PasForUser;