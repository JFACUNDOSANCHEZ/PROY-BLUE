import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { allPasseger, userID, allUsers } from "../../redux/actions";
import Cards from "../cards/Cards";
import { useParams } from "react-router-dom";
import Nav from "../nav/Nav";
import style from './style.module.css'

const PasForUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams()
  const [nivel, setNivel] = useState('');
  useEffect(() => {
    dispatch(allUsers())
    dispatch(allPasseger())
  }, [id])
  
  const Users = useSelector(state => state.users);
  console.log(Users);
  const userCreator = Users.find((u)=>{return u.id === id})
  console.log('aca esta el user creator'+userCreator);
  

  const usuario = useSelector(state => state.user)
  const passegers = useSelector((state) => state.allpasseger)
  const passxUser = id ? passegers.filter((pass) => {
    console.log(typeof pass.userId, typeof id);
    return pass.userId === String(id);
  }) : [];

  return (
    <div>
      <Nav></Nav>
<h2>Pasajeros agregados por {userCreator?.nombreCompleto}</h2>
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