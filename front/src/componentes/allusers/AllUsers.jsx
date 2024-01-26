import { useDispatch, useSelector } from "react-redux";
import { allPosibleUser, confirmacion, user, allUsers, userPut } from "../../redux/actions";
import { useEffect, useState } from "react";
import styles from './style.module.css';

const AllUsers = () => {
  const dispatch = useDispatch();

  const [selectedUsers, setSelectedUsers] = useState({});
  useEffect(() => {
    // dispatch(allPosibleUser());
    dispatch(allUsers())
  }, []);

  const users = useSelector(state => state.users)

  const handleChange = (id) => (e) => {
    const activo = e.target.value === 'T' ? "true" : "false";
    const data = { activo: activo }
    dispatch(userPut(data, id));
    console.log(data);
    console.log(id);

  };
  const handleLevelChange = (event, userId) => {
    const selectedLevel = event.target.value;
    console.log(selectedLevel);
    setSelectedUsers({nivel: selectedLevel});
    dispatch(userPut(selectedUsers, userId))
  };

  console.log(selectedUsers );



  return (
    <div className={styles.homeContainer}>
      <div className={styles.navBar}>

      </div>
      <div className={styles.contetTitle}>
        <h1 className={styles.title}>Admin DashBoard</h1>
      </div>
      <div className={styles.contentTable}>
        <div className={styles.tableHeader}>
          <h2>Tabla de Usuarios</h2>
        </div>
        <table className={styles.userTable}>
          <thead>
            <tr className={styles.tableHeaderRow}>
              <th>Users</th>
              <th>Activo/Inactivo</th>
              <th>ROL</th>
              <th>CORREO</th>
              <th>{/* Espacio para los botones*/}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <tr key={user.id}>
                <td>{user.nombreCompleto}</td>
                <td>{user.activo ? "Activo" : "Inactivo"}</td>
                <td>{user.nivel}</td>
                <td>{user.correoElectronico}</td>
                <td>{user.updatedAt}</td>
                <td>        <select onChange={handleChange(user?.id)} >
//               <option>ESTADO</option>
//               <option value="F">Cancelar usuario</option>
//               <option value="T">Habilitar cuenta</option>
//             </select>
                </td>
                <td>

                <select onChange={(e) => handleLevelChange(e, user.id)}>
                <option  >--</option>
                    <option value="1" >nivel 1</option>
                    <option value="2">nivel 2</option>
                    <option value="3">nivel 3</option>
                  </select>
                  
</td>
<td>
  


                  <button className={styles.viewButton}>Ver Publicaciónes</button>
                </td>
              </tr>
            })}

          </tbody>
        </table>
      </div>
    </div>
  );
};















//   return (
//     <div className={style.t}>



//       <h2>USUARIOS</h2>
//       {users?.map((u, index) => (
//         <div key={index} className={style.div}>
//           <div  className={style.left}>
//             <img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg" alt="p"  className={style.img}/>
//             <div className={style.userInfo}>
//               <br />
//         <div className={style.left}>
//           <p>Nombre de usuario : {u?.nombreUsuario}</p>
//           <p>Nombre completo : {u?.nombreCompleto}</p>
//         </div>
//         <div className={style.right}>
//           <p>Correo: {u?.correoElectronico}</p>
//           <p>Fecha de creación: {new Date(u?.createdAt).toLocaleDateString()}</p>
//           <p>Nivel: {u?.nivel}</p>
//           <select >
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//           </select>
//         </div>
//       </div>
//           <div className={style.centerSelect}>
//           <p>Cuenta: {u?.activo ? 'ACTIVA' : 'DESACTIVADA'}</p>

//             <select onChange={handleChange(u?.id)} className={style.customSelect}>
//               <option>ESTADO</option>
//               <option value="F">Cancelar usuario</option>
//               <option value="T">Habilitar cuenta</option>
//             </select>
//           </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

export default AllUsers