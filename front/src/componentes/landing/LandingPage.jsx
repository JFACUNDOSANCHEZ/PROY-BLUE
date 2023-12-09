import { Link } from "react-router-dom";
import style from './style.module.css'
import { useEffect } from "react";


const LandingPage = () => { 
    
  useEffect(() => {
    const token = localStorage.getItem('token');
    
        console.log(token);

  
    
}, []);
    
    return (
    <div className={style.container}>
      <div className={style.navButtons}>
        <Link to={'/register'}>
          <button>Register</button>
        </Link>

        <Link to={'/login'}>
          <button>Login</button>
        </Link>
      </div>

      <div className={style.content}>
        <div className={style.text}>
          <h1>BLU</h1>
          <p>Black List / Undesirables</p>
          <p>
            Seguridad en tus manos. Crea una lista negra para identificar y gestionar pasajeros indeseados con facilidad. Protege la integridad de tu establecimiento y ofrece una experiencia hotelera más segura para todos.
          </p>
        </div>

        <div className={style.image}>
          <img
            src="https://img.freepik.com/vector-premium/seleccion-recursos-internet-mujer-eligiendo-sitios-web-mujer-dibujos-animados-buscando-paginas-web-chica-linda-que-busca-servicios-noticias-globales-e-informacion-analitica-grafica-concepto-vectorial_176411-4193.jpg"
            alt="log"
            width="550px"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage