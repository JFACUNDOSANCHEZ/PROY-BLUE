import { useDispatch, useSelector } from "react-redux";
import {  findUserName, user, allUsers, userPut, deleteUser } from "../../redux/actions";
import { useEffect, useState } from "react";
import styles from './style.module.css';
import PasForUser from "../pasForUser/PasForUser";
import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
import Paginacion from "../paginacion/Paginacion"
import Footer from '../footer/Footer'


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
  const [filter, setFilter] = useState('Todos');
  const Users = useSelector(state => state.users);
  
  const soli = Users.filter((u)=>{return u.activo === "pendiente"})
  let users;
  if (filter === 'Solicitud') {
    users = Users.filter((u) => u.activo === "pendiente");
  } else if (filter === 'Activo') {
    users = Users.filter((u) => u.activo === 'true');
  } else if (filter === 'Inactivo') {
    users = Users.filter((u) => u.activo === 'false');
  } else {
    users = Users;
  }
  
  
  users = pass ? users.filter((u) => {
    const nombreMatch = u.nombreCompleto.toLowerCase().includes(pass.toLowerCase());
    const correoMatch = u.correoElectronico.toLowerCase().includes(pass.toLowerCase());
    return nombreMatch || correoMatch;
  }) : users;
  
  
  const handleFind = (event) => {
    const name = event.target.value;
    setPass(name);
  };
  
  
  const handleFilter = (filtro) => {
    setFilter(filtro);
  };
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(10)
  const maximo = Math.ceil(users.length / porPagina);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeletUser =(id)=>{
    if (confirmDelete) {
      dispatch(deleteUser(id));
      setConfirmDelete(false); // Resetear el estado de confirmación
    }
  }
  
  return (
    <div className={styles.homeContainer}>
      {/* <Nav></Nav> */}
      <div className={styles.navBar}>
      </div>
      <div className={styles.contetTitle}>
        <h1 className={styles.title}>Admin DashBoard</h1>
      </div>
          <h2>Tabla de Usuarios</h2>
      <div className={styles.contentTable}>
        <div className={styles.tableHeader}>
          <div className={styles.searchBox}>
  <button className={styles.button} onClick={() => handleFilter('Todos')}>Todos</button>
  <button className={styles.button} onClick={() => handleFilter('Solicitud')}>Solicitudes<span className={styles.solicitudCount}>{soli.length}</span></button>
  <button className={styles.button} onClick={() => handleFilter('Activo')}>Activos</button>
  <button className={styles.button} onClick={() => handleFilter('Inactivo')}>Inactivos</button>
</div>
  <input
    className={styles.inputSearch}
    onChange={handleFind}
    type="search"
    placeholder="Busca por el nombre o mail.."
  />
          
      
        </div>
            <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
        <table className={styles.userTable}>
          <thead>
            <tr className={styles.tableHeaderRow}>
              <th className={styles.users}>Users</th>
              <th className={styles.estado}>Estado</th>
              <th className={styles.rol}>Rol</th>
              <th className={styles.correo}>Email</th>
              <th className={styles.rol}>Fecha de alta</th>
              <th className={styles.rol}>Cancelar / Activar usuario</th>
              <th className={styles.rol}>Cambiar rol</th>
              <th className={styles.rol}>   {/* Espacio para los botones*/}</th>
              <th className={styles.rol}>   {/* Espacio para los botones*/}</th>
            </tr>
          </thead>
          <tbody>
            {users?.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map((user) => {
              const fecha = new Date(user?.createdAt);
              const fechaFormateada = fecha.toLocaleDateString();
              const horaFormateada = fecha.toLocaleTimeString();
              return <tr key={user.id} className={styles.hover}>
                <td>{user?.nombreCompleto}</td>
                <td className={
                  user.activo === "true"? styles.activo : 
                  user.activo === "false" ? styles.inactivo :
                  styles.pendiente
                }>
                   {user?.activo === "true" ? 'Activo' : user?.activo === "false" ? 'Inactivo' : 'Pendiente'}</td>
                <td >{user?.nivel === '3' ? 'Administrador' : user?.nivel === '2' ? 'Usuario' : 'Usuario'}</td>
                <td>{user?.correoElectronico}</td>
                <td>{fechaFormateada} <br /> {horaFormateada}hs</td>
               
                <td>        <select onChange={handleChange(user?.id)} >
//               <option>--</option>
//               <option value="F">Cancelar usuario</option>
//               <option value="T">Habilitar cuenta</option>
//             </select>
                </td>
                <td>
                  <select onChange={(e) => handleLevelChange(e, user?.id)}>
                    <option  >--</option>
       
                    <option value="2">Usuario</option>
                    <option value="3">Administrador</option>
                  </select>
               
                </td>
                <td>

                <button
  className={styles.viewButton}
  onClick={() => setConfirmDelete(true)} 
>Eliminar pasajero</button>

                </td>
  {confirmDelete && (
  <div className={styles.overla}>
  <div className={styles.overlayContent}>
  <p>¿Estás seguro de que quieres eliminar este pasajero?</p>
  <button onClick={() => handleDeletUser(user.id)}>Sí</button>
  <button onClick={() => setConfirmDelete(false)}>Cancelar</button>
  </div>
  </div>
  )}
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
<Footer></Footer>
    </div>
  );
};



export default AllUsers