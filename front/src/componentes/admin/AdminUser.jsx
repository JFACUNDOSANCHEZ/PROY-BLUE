import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allPosibleUser, confirmacion, user, allUsers, userPut } from "../../redux/actions";
import style from './style.module.css';
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Form from '../form/Form'
import PosibleUsers from '../posibleUsers/PosibleUsers'
import AllUsers from "../allusers/AllUsers";


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
  }, []);

  const handleRegister = (user) => {
    dispatch(confirmacion(user));
    console.log(user);
  };


  const handleChange = (id) => (e) => {
    const activo = e.target.value === 'T' ? "true" : "false";
    const data = { activo: activo }
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
      <Form></Form>
      <PosibleUsers></PosibleUsers>
   <AllUsers></AllUsers>
    </div>
  );
}

export default AdminUser;