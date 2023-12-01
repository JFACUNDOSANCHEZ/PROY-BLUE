import axios from 'axios';

export const allPasseger = () => {
  const endpoint = 'http://localhost:3001/get'
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



export const postP = (data) => {
  const endpoint = 'http://localhost:3001/post'
  return async (dispatch) => {

    try {
      console.log(data)
      const response = await axios.post(endpoint, data)
      dispatch({
        type: 'post',
        payload: response.data,
      })
      alert("agregado correctamente! ")
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
      const endpoint = `http://localhost:3001/getDNI?name=${name}`
      const { data } = await axios.get(endpoint)
      console.log(name);
      dispatch(

        {
          type: 'findName',
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


export const detail = (id) => {
  const endpoint = `http://localhost:3001/get/${id}`

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
  const endpoint = 'http://localhost:3001/solicitud'
  return async (dispatch) => {

    try {
    
      const response = await axios.post(endpoint, user)
      dispatch({
        type: 'register',
        payload: response.data,
      })
      alert("Registrado enviado correctamente! Le enviaremos un correo al mail registrado ")
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
      console.log(error);
    }
  }
}


export const allPosibleUser = () =>{
  const endpoint = 'http://localhost:3001/getPosibleUser'
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

export const confirmacion=(user)=>{
  const endpoint = 'http://localhost:3001/register'
  return async (dispatch) => {

    try {
    
      const response = await axios.post(endpoint, user)
      dispatch({
        type: 'confir',
        payload: response.data,
      })
      alert("Registrado correctamente! ")
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      });
      console.log(error);
    }
  }
}

export const getPosible =(token)=>{
  const endpoint = `http://localhost:3001/confirmar-correo?token=${token}`
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
  const endpoint = `http://localhost:3001/confirmar-correo?token=${token}`
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


export const login = (data) => {
  console.log(data);
  const endpoint = 'http://localhost:3001/login'
  return async (dispatch) => {
    try {
console.log(data);
      const response = await axios.post(endpoint, data)
      console.log(response)
      dispatch({
        type: 'token',
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



