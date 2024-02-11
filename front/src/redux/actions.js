import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'



export const allPasseger = (token) => {
  const endpoint = 'get'
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(data);
      dispatch({
        type: 'all',
        payload: data,
      })

    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
  }
}
export const guardarToken =(token)=>{
  
  return (dispatch) => {
    try {
      dispatch({
        type: 'guardarToken',
        payload: token
      })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
  }
} 

export const borrarT =()=>{
  
  return (dispatch) => {
    try {
      dispatch({
        type: 'borrarToken',
      })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
  }
}

export const userPut= (data, id) =>{
  const endpoint = `user/${id}`
  return async (dispatch) => {

    try {
      const response = await axios.put(endpoint,  data);
      console.log(response)
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'El usuario se ha editado correctamente.',
      }).then(() => {
        // Recargar la página después de cerrar el SweetAlert
        window.location.reload();
      });
      dispatch({
        type: 'userPut',
        payload: response.data,
      })
    
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
      console.log(error);
    }

  }


}

export const userID = (id, token) =>{

  const endpoint = `user/${id}`

  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(data);
      dispatch({
        type: 'userID',
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
  }

}

export const allUsers =(token)=>{
  const endpoint = 'user'
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(data);
      dispatch({
        type: 'users',
        payload: data,
      })

    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
  }

}

export const postP = (data, navigate) => {
  Swal.fire({
    title: 'Eliminando...',
    text: 'Espere por favor',
    onBeforeOpen: () => {
        Swal.showLoading();
    },
    onClose: () => {
        // Aquí puedes realizar la operación asincrónica, por ejemplo, una petición AJAX
        setTimeout(() => {
            // Simulando una operación que toma tiempo (puedes reemplazar esto con tu lógica real)
            Swal.hideLoading();
            Swal.fire({
                title: 'Operación completada',
                text: 'La operación ha finalizado con éxito.',
                icon: 'success',
                confirmButtonText: '¡Entendido!'
            });
        }, 2000); // Simulación de una operación que tarda 2 segundos
    }
});
  const endpoint = 'post'
  return async (dispatch) => {

    try {
      console.log(data)
      const response = await axios.post(endpoint, data)
      dispatch({
        type: 'post',
        payload: response.data,
      })
      Swal.fire({
        icon: 'success',
        title: `¡Pasajero agregado!`,
        text: 'Se agrego a la lista con exito.',
       });
      navigate('/home')
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
      console.log(error);
    }

  }
}




export const updateData = (data, id) => {
  const endpoint = `get/${id}`
  return async (dispatch) => {

    try {
      console.log(data)
      const response = await axios.put(endpoint, data)
      dispatch({
        type: 'put',
        payload: response.data,
      })
    
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
      console.log(error);
    }
    window.location.reload()
  }
}

export const findName = (name) => {

  return async (dispatch) => {
    try {
      const endpoint = `getDNI?name=${name}`
      const { data } = await axios.get(endpoint)
      console.log(name);
      console.log(data.length);
      dispatch({
        type: 'findName',
        payload: {
          data,
          found: data.length > 0 ? false : true, 
        },
      });
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
  }
}


export const findUserName = (name) => {

  return async (dispatch) => {
    try {
      console.log(name);
      const endpoint = `getUser?name=${name}`
      const { data } = await axios.get(endpoint)
      console.log(name);
      console.log(data.length);
      dispatch({
        type: 'findNUserName',
        payload: {
          data,
          found: data.length > 0 ? false : true, 
        },
      });
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
  }
}


export const deleteData =(id) => {
  Swal.fire({
    title: 'Eliminando...',
    text: 'Espere por favor',
    onBeforeOpen: () => {
        Swal.showLoading();
    },
    onClose: () => {
        // Aquí puedes realizar la operación asincrónica, por ejemplo, una petición AJAX
        setTimeout(() => {
            // Simulando una operación que toma tiempo (puedes reemplazar esto con tu lógica real)
            Swal.hideLoading();
            Swal.fire({
                title: 'Operación completada',
                text: 'La operación ha finalizado con éxito.',
                icon: 'success',
                confirmButtonText: '¡Entendido!'
            });
        }, 2000); // Simulación de una operación que tarda 2 segundos
    }
   
});
  const endpoint = `get/${id}`
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint)
      dispatch({
        type: 'delet',
        payload: data,
      })
       window.location.reload();
      Swal.fire({
        icon: 'success',
        title: `¡Eliminado con exitoso!`,
        text: 'completo el registro con exito.',
       });
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
    window.location.reload()
  }
}


export const detail = (id) => {
  const endpoint = `get/${id}`

  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint)
      dispatch({
        type: 'detail',
        payload: data,
      })
      
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
  }
}

export const close = () => {

  return (dispatch) => {
    try {
      dispatch({
        type: 'close',
      })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
  }
}

export const delet = (id) => {

return (dispatch)=>{
  dispatch({
    type: 'delete',
    payload: id
  })
}

}




export const allPosibleUser = () =>{
  const endpoint = 'getPosibleUser'
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint)
      dispatch({
        type: 'allPosible',
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
  }

}

export const confirmacion=(user, navigate)=>{
  const endpoint = 'register'
  Swal.fire({
    title: 'Cargando...',
    text: 'Espere por favor',
  
    onClose: () => {
      
        setTimeout(() => {
          
            Swal.hideLoading();
            Swal.fire({
                title: 'Operación completada',
                text: 'La operación ha finalizado con éxito.',
                icon: 'success',
                confirmButtonText: '¡Entendido!'
            });
        }, 2000); 
    }
});
  return async (dispatch) => {

    try {

      const response = await axios.post(endpoint, user)
      dispatch({
        type: 'confir',
        payload: response.data,
      })
   
        Swal.fire({
          icon: 'info',
          title: 'El registro está al 50%',
          text: 'Espere la confirmarcion de su cuenta, recibira un mail de la administracion',
          confirmButtonText: 'Entendido'
        });
   
    
       


      }
    
    
    catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
      console.log(error);
      Swal.fire({
        icon: 'warning',
        title: `¡Error!`,
        text: 'El mail ya esta registrado',
       });
    }
  }
}

export const getPosible =(token)=>{
  const endpoint = `confirmar-correo?token=${token}`
  return async (dispatch) => {

    try {
    
      const response = await axios.get(endpoint, {
        data: {
          token: token
        }})
      dispatch({
        type: 'getPosible',
        payload: response.data,
      })
     
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
      console.log(error);
    }
  }
}


export const postConfirm =(contraseña, token)=>{
  const endpoint = `confirmar-correo?token=${token}`
  return async (dispatch) => {
    try {
      const body = {
        contraseña: contraseña
      };
      console.log("este es el endpoint con el token " + endpoint);
      console.log("este es el token de axios" + token + "token");
      console.log("este es la contra de action" + contraseña);
      const response = await axios.post(endpoint,  body);
      alert('Finalizando el registro!, esperar alta del usuario por mail')
      dispatch({
        type: 'postConfirm',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
      console.error(error);
    }
  };
};

//delet
export const user=(id)=>{
  return (dispatch)=>{
    dispatch({
      type: 'user',
      payload: id
    })
  }
}


export const login = (data, navigate) => {
  Swal.fire({
    title: 'Cargando...',
    text: 'Espere por favor',
    allowOutsideClick: false, // Evita que el usuario haga clic fuera del modal
    onBeforeOpen: () => {
        Swal.showLoading();
    },
    onClose: () => {
        // Aquí puedes realizar la operación asincrónica, por ejemplo, una petición AJAX
        setTimeout(() => {
            // Simulando una operación que toma tiempo (puedes reemplazar esto con tu lógica real)
            Swal.hideLoading();
            Swal.fire({
                title: 'Operación completada',
                text: 'La operación ha finalizado con éxito.',
                icon: 'success',
                confirmButtonText: '¡Entendido!'
            });
        }, 2000); // Simulación de una operación que tarda 2 segundos
    }

});
  console.log(data);
  const endpoint = 'login'
  return async (dispatch) => {
    try {
      console.log(data);
      const response = await axios.post(endpoint, data)
      console.log(response)
      dispatch({
        type: 'token',
        payload: response.data,
      })
      navigate('/info')
 
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
      Swal.fire({
        icon: 'warning',
        title: 'Credenciales invalidades',
        text: 'El usuario no tiene permisos para ingresar.',
      });
      console.log(error);
    }

  }
}



