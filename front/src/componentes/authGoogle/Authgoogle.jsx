import GoogleLogin from 'react-google-login';


const Authgoogle =()=>{

    const responseGoogle=(response)=>{
console.log(response);

    }
return(
    <div>



<GoogleLogin
    clientId="479005559437-is8vtvjkmnm3tk1acvg7e607815vars1.apps.googleusercontent.com"

    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,


    </div>
)

}

export default Authgoogle