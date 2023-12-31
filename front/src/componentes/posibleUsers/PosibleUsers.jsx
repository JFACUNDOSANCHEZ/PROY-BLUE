import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allPosibleUser, confirmacion, user, allUsers, userPut } from "../../redux/actions";

const PosiblesUsers= ()=>{


    useEffect(() => {
        dispatch(allPosibleUser());

      }, []);

    const dispatch = useDispatch();
    const [selectedUsers, setSelectedUsers] = useState({});
    const posiblesUsers = useSelector(state => state.posibleUser);


    const handleRegister = (user) => {
        dispatch(confirmacion(user));
        console.log(user);
      };
      const handleLevelChange = (event, userId) => {
        const selectedLevel = event.target.value;
        setSelectedUsers({ ...selectedUsers, [userId]: selectedLevel });
      };

return(
<div>
    <h2>Solicitudes de usuario</h2>

{ posiblesUsers.length === 0 ? (
            <p>No hay solicitudes pendientes</p>
          ) : (
            posiblesUsers?.map((user, index) => (
              <div key={index} >
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
                    //   onClick={(e) => {
                    //     e.preventDefault();
                    //     handleClick(user.id);
                    //   }}
                    //   className={style.button}
                    >

                      X
                    </button>


                    <button type="submit">✔</button>
                  </div>
                </form>
              </div>
            ))

          )}



</div>



)



}

export default PosiblesUsers