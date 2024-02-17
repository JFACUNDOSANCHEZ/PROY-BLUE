import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { allPasseger, userID, allUsers } from "../../redux/actions";
import Cards from "../cards/Cards";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";
import Nav from "../nav/Nav";
import style from './style.module.css'
import Swal from 'sweetalert2'

const PasForUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams()
// useEffect(()=>{

  // },[id])
  const [nivel, setNivel] = useState('');
  useEffect(() => {
    dispatch(allUsers())
    dispatch(allPasseger())
  }, [id])
  
  const Users = useSelector(state => state.users);
  console.log(Users);
  const userCreator = Users.find((u)=>{return u.id === id})
  console.log('aca esta el user creator'+userCreator);
  
  useEffect(() => {

    // const token = localStorage.getItem('token');
    // console.log(token);
    // if (token) {

    //     const decodedToken = jwtDecode(token);
    //     setNivel(decodedToken.nivel)
    //     dispatch(userID(decodedToken.usuarioId))
    // } else navigate('/')

  }, [])

  const usuario = useSelector(state => state.user)
  const passegers = useSelector((state) => state.allpasseger)


  const passxUser = id ? passegers.filter((pass) => {
    console.log(typeof pass.userId, typeof id);
    return pass.userId === String(id);
  }) : [];
  

  console.log(id);

  console.log(passxUser);
  return (
    <div>
      <Nav></Nav>
<h2>Pasajeros agregados por {userCreator?.nombreCompleto}</h2>
      {/* Verifica si passxUser tiene elementos antes de renderizar Cards */}
      {passxUser.length > 0 ? (

        <Cards passegers={passxUser} usuario={usuario} />
      ) : (
        <div className={style.divNoencontrado}>
          El usuario no ha cargado pasajeros...
        </div>
      )}
    </div>
  );
};

export default PasForUser;