import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export const allPasseger = () => {
  const endpoint = 'get'
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint)
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

export const userID = (id) =>{

  const endpoint = `user/${id}`

  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint)
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

export const allUsers =()=>{
  const endpoint = 'user'
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint)
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

  const endpoint = 'post'
  return async (dispatch) => {

    try {
      console.log(data)
      const response = await axios.post(endpoint, data)
      dispatch({
        type: 'post',
        payload: response.data,
      })
      alert("agregado correctamente! ")
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

export const deleteData =(id) => {
  alert('Eliminando...')
  const endpoint = `get/${id}`
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint)
      dispatch({
        type: 'delet',
        payload: data,
      })
      alert('Eliminado con exito')
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
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

export const solicitud=(user)=>{
console.log(user);
  const endpoint = 'solicitud'
  return async (dispatch) => {
    

    try {
    
      const response = await axios.post(endpoint, user)
      dispatch({
        type: 'register',
        payload: response.data,
      })
      alert("Registrado enviado correctamente! Le enviaremos un correo al mail registrado ")
 
    } catch (error) {
      console.log(error);
      alert(`El mail ingresado ya esta registrado o es invalido ¡Prueba otro!`)
      dispatch({
        type: 'error',
        payload: error.message,
      });
    }
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
  return async (dispatch) => {

    try {
    alert('Cargando...')
      const response = await axios.post(endpoint, user)
      dispatch({
        type: 'confir',
        payload: response.data,
      })
      alert("Registrado correctamente! ")
      navigate('/')
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
      console.log(error);
      alert('El email ya esta registrado')
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
  alert('Cargando...')
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
       navigate('/home')
    
    } catch (error) {
      alert('Posible error en el mail/password verifique que los datos sean correctos')
      dispatch({
        type: 'error',
        payload: error.message,
      });
      console.log(error);
    }

  }
}



