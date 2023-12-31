import FacebookLogin from 'react-facebook-login';

const AuthFacebook=()=>{



    const responseFacebook = (response) => {
        console.log(response);
      }

      const componentClicked =() =>{
        alert('Evento onclick')
      }

       
return(

    <div>


<FacebookLogin
    appId="190558504080154"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,



    </div>
)



}

export default AuthFacebook