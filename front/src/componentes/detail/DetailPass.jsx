import { useEffect } from "react";
import { detail, updateData, deleteData } from "../../redux/actions";
import { useParams, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from './style.module.css';
import { useState } from "react";
import { jwtDecode } from "jwt-decode";


const DetailPass =()=>{

const {id} = useParams();


return(
    <div>
<p></p>



    </div>
)



}

export default DetailPass