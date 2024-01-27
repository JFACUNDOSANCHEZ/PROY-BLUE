import Card from "../card/Card"
import style from './style.module.css'
import hm from '../../../public/hm.svg'
import ne from '../../../public/ne.svg'
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useEffect } from "react"
import SearchBar from "../searchBar/SearchBar"
const Cards = ({ passegers, usuario }) => {


console.log(passegers);
    const noEncontrado = useSelector((state) => state.noEncontrado)
    useEffect(() => {

        
    }, [noEncontrado])
    const handleEditClick = () => {
    
    };
    const handleEditClickNeg = () => {
 

    }
    const handleDeletClick = async () => {
  
    }

console.log(noEncontrado);


    return (
        <div className={style.homeContainer}>
            <div className={style.navBar}>

            </div>
            <div className={style.contetTitle}>
                <h1 className={style.title}></h1>
            </div>
            {noEncontrado === 'true'? (<>
            <p>No encontrado</p>
            </>) :

                <div className={style.contentTable}>
                <div className={style.tableHeader}>
                    <h2>LISTA NEGRA DE INDESEABLAS </h2>
                </div>
                <table className={style.userTable}>
                    <thead>
                        <tr className={style.tableHeaderRow}>
                        <th>img</th>
                            <th>Nacionalidad</th>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Motivo</th>
                            <th>Hora y Fecha</th>
                            <th></th>
                            <th>{/* Espacio para los botones*/}</th>
                        </tr>
                    </thead>
                    <tbody>  {noEncontrado ? (
              <h2>No encontrado</h2>
            ) : (
                passegers.map((pas) => {
                    const fecha = new Date(pas.createdAt);
                    const fechaFormateada = fecha.toLocaleDateString();
                    const horaFormateada = fecha.toLocaleTimeString();
                  
                    return (
                      <tr key={pas?.id}>
                        <td>
                          <img className={style.img} src={pas?.img} alt={pas?.img} />
                        </td>
                        <td>{pas?.nacionalidad}</td>
                        <td>{pas?.dni}</td>
                        <td>{pas?.name}</td>
                        <td>{pas?.motivo}</td>
                        <td>{fechaFormateada} {horaFormateada}</td>
                        <td></td>
                        <td>
                        {
                    usuario.nivel == 3 || usuario.id == pas.userId ? (
                        <div className={style.d}>
                            <button onClick={handleDeletClick}>Eliminar pasajero</button>
                            <button onClick={handleEditClick} className={style.ed}>
                          <p>EDITAR</p>     </button>
                        </div>
                    ) : (
                        <div>


                        </div>
                    )
                }
                          <button className={style.viewButton}>Ver Publicacion</button>
                        </td>
                      </tr>
                    );
                  
              })
            )}

                    </tbody>
                </table>
            </div>
}
        </div>
    );


}


export default Cards