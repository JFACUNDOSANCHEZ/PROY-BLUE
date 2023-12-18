import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allPosibleUser, confirmacion, user, allUsers, userPut } from "../../redux/actions";
import style from './style.module.css';
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Form from '../form/Form'


const AdminUser = () => {
   useEffect(() => {
  const token = localStorage.getItem('token');
  console.log(token);
   if (token) {
   const decodedToken = jwtDecode(token); 
  console.log(decodedToken);
  //  if (decodedToken && decodedToken.nivel) {
  //  switch (decodedToken.nivel) {
  //  case "1":
  //    navigate('/home');
  
  //  break;
  //  case "2":
  //    navigate('/home');
 
  //  break;
  //  case "3":
  //  navigate('/admin');
  //  break;
  //  default:
  //  navigate('/home');
  //  break;
  //  }
  //  }
   }
   }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedUsers, setSelectedUsers] = useState({});



  const users = useSelector(state => state.users)
  useEffect(() => {
    dispatch(allPosibleUser());
    dispatch(allUsers())
  }, [] );

  const handleRegister = (user) => {
    dispatch(confirmacion(user));
    console.log(user);
  };


  const handleChange = (id) => (e) => {
    const activo = e.target.value === 'T' ? "true" : "false";
const data = {activo: activo}
    dispatch(userPut(data, id));
   
  };



  const handleLevelChange = (event, userId) => {
    const selectedLevel = event.target.value;
    setSelectedUsers({ ...selectedUsers, [userId]: selectedLevel });
  };
  const posiblesUsers = useSelector(state => state.posibleUser);
  console.log(users);
  return (
    <div>
      <div>
        <Link to={'/home'}>
          <button >
            volver
          </button>
        </Link>

        <div>
         <h2>USUARIOS</h2>
          {
            users.length === 0 ? (
              <p>No hay usuarios aun</p>
            ) : (
          users?.map((u, index) => (

            <div key={index} className={style.div} >

              <div>
                <h2>Activo: {u?.activo ? 'TRUE' : 'FALSE'}</h2>
              </div>
              <select onChange={handleChange(u?.id)}>
                <option value="F">FALSE</option>
                <option value="T">TRUE</option>
              </select>
              <div>
              </div>
              <p>Nombre completo : {u?.nombreCompleto}</p>

              <p>Nombre de usuario : {u?.nombreUsuario}</p>
              <div>

                <p>Correo: {u?.correoElectronico}</p>
              </div>
              <div>

                <p>Fecha de creación: {new Date(u?.createdAt).toLocaleDateString()}</p>
              </div>
              <div>

                <p>Nivel: {u?.nivel}</p>

              </div>
            </div>
          )))}


          <h1>Solicitudes de usuarios</h1>
        </div>

  
  {
      posiblesUsers.length === 0 ? (
        <p>No hay solicitudes pendientes</p>
      ) : (
    posiblesUsers?.map((user, index) => (
    <div key={index} className={style.div}>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleRegister({ ...user, nivel: selectedUsers[user.id] });
    }} >
    {console.log(user)}
    
    <p>Nombre completo: {user.nombreCompleto}</p>
    <p>Nombre: {user.nombreUsuario}</p>
    <p>Email: {user.correoElectronico}</p>
    <select onChange={(e) => handleLevelChange(e, user.id)}>
                <option value="1" >nivel 1</option>
                <option value="2">nivel 2</option>
                <option value="3">nivel 3</option>
              </select>
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(user.id);
                  }}
                  className={style.button}
                  >

                  X
                </button>


                <button type="submit" className={style.button} >✔</button>
              </div>
            </form>
            </div>
            ))
        
           ) }

        <div>
          <Form />
        </div>
      </div>

    </div>
  );
}

export default AdminUser;