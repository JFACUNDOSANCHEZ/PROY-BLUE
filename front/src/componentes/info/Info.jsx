import styles from './styles.module.css'
import {Link} from 'react-router-dom'


const Info =()=>{


    return(
        <div className={styles.divContainer}>

        <div className={styles.descriptionContainer}>
          
        <ul className={styles.featureList}>
          <li>
          <img src="https://cdn-icons-png.flaticon.com/512/76/76037.png" alt="" className={styles.icono} />
      <br /><br />
            <p>Accede a nuestra base de datos con rapidez para consultar la lista negra.</p>
          </li>
          <li>
              <img src="https://cdn-icons-png.flaticon.com/512/3201/3201052.png" alt="" className={styles.icono}/>
<br /><br />
            <p>Registra incidentes y agrega información relevante de pasajeros problemáticos  con unos pocos clics.</p>
          </li>
          <li>
          <img src="https://cdn.icon-icons.com/icons2/3249/PNG/512/people_community_filled_icon_200428.png" className={styles.icono}  alt="" />  
         <br /> <br />
            <p>Trabaja de manera colaborativa con tu comunidad para mantener la lista actualizada.</p>
          </li>
        </ul>
        </div>
        <br /><br /><br /><br />
        <Link to={'/home'}>
<button className={styles.buton}>Comenzar</button>
        </Link>
        </div>
    )
}

export default Info