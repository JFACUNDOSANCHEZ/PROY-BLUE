import { useDispatch, useSelector } from "react-redux";
import { allPosibleUser, confirmacion, user, allUsers, userPut } from "../../redux/actions";
import { useEffect, useState } from "react";
import style from './style.module.css';

const AllUsers = () =>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allPosibleUser());
        dispatch(allUsers())
      }, [] );
    
      const users = useSelector(state => state.users)
    
      const handleChange = (id) => (e) => {
        const activo = e.target.value === 'T' ? "true" : "false";
        const data = { activo: activo }
        dispatch(userPut(data, id));
    
      };
    
      return (
        <div className={style.t}>
          <h2>USUARIOS</h2>
          {users?.map((u, index) => (
            <div key={index} className={style.div}>
              <div  className={style.left}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg" alt="p"  className={style.img}/>
                <div className={style.userInfo}>
                  <br />
            <div className={style.left}>
              <p>Nombre de usuario : {u?.nombreUsuario}</p>
              <p>Nombre completo : {u?.nombreCompleto}</p>
            </div>
            <div className={style.right}>
              <p>Correo: {u?.correoElectronico}</p>
              <p>Fecha de creación: {new Date(u?.createdAt).toLocaleDateString()}</p>
              <p>Nivel: {u?.nivel}</p>
            </div>
          </div>
              <div className={style.centerSelect}>
              <p>Cuenta: {u?.activo ? 'ACTIVA' : 'DESACTIVADA'}</p>

                <select onChange={handleChange(u?.id)} className={style.customSelect}>
                  <option>ESTADO</option>
                  <option value="F">Cancelar usuario</option>
                  <option value="T">Habilitar cuenta</option>
                </select>
              </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

export default AllUsers