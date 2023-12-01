import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allPosibleUser, confirmacion, user } from "../../redux/actions";
import style from './style.module.css';
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const AdminUser = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //  if (token) {
  // console.log(token);
  
  // const decodedToken = jwtDecode(token); 
  // console.log(decodedToken);
  //    if (decodedToken && decodedToken.nivel) {
  
  //      switch (decodedToken.nivel) {
  //          case "1":
  //        alert('Solo puede acceder el admin')
  //          navigate('/home');
  //          break;
  
  
  //        case "2":
  //         alert('Solo puede acceder el admin')
  //         navigate('/home');
  //          break;
  
  //          case "3":
         
  //          navigate('/admin');
  //          break;
       
  //        default:
  //          navigate('/home');
  //          break;
  //      }
  //    }
  //  }
  // }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedUsers, setSelectedUsers] = useState({}); 
  


  useEffect(() => {
    dispatch(allPosibleUser());
  }, []);

  const handleRegister = (user) => {
    dispatch(confirmacion(user));
    console.log(user);
  };
  const handleClick = (e, id) => {

    dispatch(user(id))
  }



  const handleLevelChange = (event, userId) => {
    const selectedLevel = event.target.value;
    setSelectedUsers({ ...selectedUsers, [userId]: selectedLevel });
  };

  const posiblesUsers = useSelector(state => state.posibleUser);

  return (
    <div>
      <div>
        <Link to={'/home'}>
        <button >
        👈
        </button>
        </Link>
        <h1>ADMIN </h1>
        <h2>Solicitudes de usuarios</h2>
      </div>
      {posiblesUsers?.map((user, index) => (
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
      ))}
    </div>
  );
};

export default AdminUser;