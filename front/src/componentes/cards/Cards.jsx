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
                            <th>id</th>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Motivo</th>
                            <th>Creado</th>
                            <th></th>
                            <th>{/* Espacio para los botones*/}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passegers.map((pas) => {
                            return <tr key={pas?.id}>
                                <td><img src={pas?.img} alt={pas?.img} /></td>
                                <td>{pas?.id}</td>
                                <td>{pas?.dni}</td>
                                <td>{pas?.name}</td>
                                <td>{pas?.motivo}</td>
                                <td>{pas?.updatedAt}</td>

                                <td>

                                </td>
                                <td>



                                    <button className={style.viewButton}>Ver Publicaciónes</button>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
}
        </div>
    );


}


export default Cards