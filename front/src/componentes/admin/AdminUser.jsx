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
import Nav from '../../componentes/nav/Nav'
import Footer from '../footer/Footer'


const AdminUser = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
    if (decodedToken && decodedToken.nivel) {
    switch (decodedToken.nivel) {
    case "1":
      navigate('/home');

    break;
    case "2":
      navigate('/home');

    break;
    case "3":
    navigate('/admin');
    break;
    default:
    navigate('/home');
    break;
    }
    }
    }
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedUsers, setSelectedUsers] = useState({});



  const users = useSelector(state => state.users)
  useEffect(() => {

    dispatch(allUsers())
  }, []);



  const posiblesUsers = useSelector(state => state.posibleUser);
  
  return (
    <div>
            
            <span className={`${style.letter2}`}>.</span>
            <Nav></Nav>
        
    
        <Footer></Footer>
   <AllUsers></AllUsers>
      <div  className={style.navBar}>
      
    </div>
    </div>
  );
}

export default AdminUser;