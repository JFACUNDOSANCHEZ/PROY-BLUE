import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allUsers } from "../../redux/actions";
import style from './style.module.css';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import AllUsers from "../allusers/AllUsers";
import Nav from '../../componentes/nav/Nav'
import Footer from '../footer/Footer'


const AdminUser = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)
  useEffect(() => {
    dispatch(allUsers())
  }, []);


  return (
    <div>
      <span className={`${style.letter2}`}>.</span>
      <Nav></Nav>
      <Footer></Footer>
      <AllUsers></AllUsers>
    </div>
  );
}

export default AdminUser;