import { useDispatch, useSelector } from "react-redux";
import {  findUserName, user, allUsers, userPut } from "../../redux/actions";
import { useEffect, useState } from "react";
import styles from './style.module.css';
import PasForUser from "../pasForUser/PasForUser";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const dispatch = useDispatch();
  const [selectedUsers, setSelectedUsers] = useState({});
  useEffect(() => {
    dispatch(allUsers())
  }, []); 
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
    setSelectedUsers({ nivel: selectedLevel });
    dispatch(userPut({ nivel: selectedLevel }, userId))
  };
  console.log(selectedUsers);
  const [pass, setPass] = useState("");
  const [filter, setFilter] = useState('todos')
  const Users = useSelector(state => state.users)
  let users
   users = pass
  ? Users.filter((u) => {
      const nombreMatch = u.nombreCompleto.toLowerCase().includes(pass.toLowerCase());
      const correoMatch = u.correoElectronico.toLowerCase().includes(pass.toLowerCase());
      return nombreMatch || correoMatch;
    })
  : Users;
const soli = Users.filter((u)=>{return u.pendiente})
if (filter === 'Solicitud') {
  users= Users.filter((u)=>{return u.pendiente})
}
if (filter === 'Todos') {
  users= Users
}
if (filter === 'Activo') {
  users= Users.filter((u)=>{ return u.activo})
}
if (filter === 'Inactivo') {
  users= Users.filter((u)=>{ return u.activo == false})
}

  const handleFind = (event) => {
    const name = event.target.value
    setPass(name)
  }
  const handleFilter=(filtro)=>{
setFilter(filtro)

  }
  console.log(filter);
 
    return (
    <div className={styles.homeContainer}>
      <Nav></Nav>
      <div className={styles.navBar}>
      </div>
      <div className={styles.contetTitle}>
        <h1 className={styles.title}>Admin DashBoard</h1>
      </div>
      <button onClick={()=>{handleFilter('Todos')}}>Todos</button>
      <button onClick={()=>{handleFilter('Solicitud')}}>Solicitudes {soli.length? soli.length: ''}</button>
     <button onClick={()=>{handleFilter('Activo')}}>Activos</button>
     <button onClick={()=>{handleFilter('Inactivo')}}>Inactivos</button>
      <div className={styles.contentTable}>
        <div className={styles.tableHeader}>
          <h2>Tabla de Usuarios</h2>
          <div className={styles.searchBox}>
        <span className={styles.searchIcon}></span>
        <input
          className={styles.inputSearch}
          onChange={handleFind}
          type="search"
          placeholder="Busca por el nombre o dni/pasaporte.."
        />
      </div>
        </div>
        <table className={styles.userTable}>
          <thead>
            <tr className={styles.tableHeaderRow}>
              <th>Users</th>
              <th>Activo/Inactivo</th>
              <th>ROL</th>
              <th>CORREO</th>
              <th>Fecha de alta</th>
              <th>Cancelar/ Activar</th>
              <th>Cambiar rol</th>
              <th>{/* Espacio para los botones*/}</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              const fecha = new Date(user?.createdAt);
              const fechaFormateada = fecha.toLocaleDateString();
              const horaFormateada = fecha.toLocaleTimeString();
              return <tr key={user.id}>
                <td>{user?.nombreCompleto}</td>
                <td> {user?.activo === true ? 'Activo' : user?.activo === false ? 'Inactivo' : 'Pendiente'}</td>
                <td>{user?.nivel === '3' ? 'Super Admin' : user?.nivel === '2' ? 'Admin' : 'Usuario'}</td>
                <td>{user?.correoElectronico}</td>
                <td>{fechaFormateada} <br /> {horaFormateada}hs</td>
                <td>{user?.pendiente ? 'true': 'false'}</td>
                <td>        <select onChange={handleChange(user?.id)} >
//               <option>--</option>
//               <option value="F">Cancelar usuario</option>
//               <option value="T">Habilitar cuenta</option>
//             </select>
                </td>
                <td>
                  <select onChange={(e) => handleLevelChange(e, user?.id)}>
                    <option  >--</option>
                    <option value="1" >Usuario</option>
                    <option value="2">Admin</option>
                    <option value="3">Super admin</option>
                  </select>
                </td>
                <td>
<Link to={`/pasforuser/${user?.id}`}>
                  <button className={styles.viewButton}   >Ver Publicaciónes</button>
</Link>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};



export default AllUsers