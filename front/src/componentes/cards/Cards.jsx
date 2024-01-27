import Card from "../card/Card"
import style from './style.module.css'
import hm from '../../../public/hm.svg'
import ne from '../../../public/ne.svg'
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useEffect, useState } from "react"
import SearchBar from "../searchBar/SearchBar"
import { useDispatch } from "react-redux"
import { detail, updateData } from "../../redux/actions"
const Cards = ({ passegers, usuario }) => {


    console.log(passegers);
    const noEncontrado = useSelector((state) => state.noEncontrado)
    useEffect(() => {
    }, [noEncontrado])


    const dispatch = useDispatch()
    const [ojo, setOjo] = useState(null)

    const handleOjo = () => {
        setOjo(!ojo)

    }

    const [dataInput, setDataInput] = useState({})

    const handleData = (e) => {
        const valor = e.target.value;
        const clave = e.target.name;

        setDataInput((prevDataInput) => ({
            ...prevDataInput,
            [clave]: valor,
        }));
    };

    const handleDeletClick = async () => {

    }
    const [edit, setEdit] = useState(null)
    const [editId, setEditId] = useState('')

    const handleEdit = (pasajeroId) => {
        console.log(edit);
        console.log(pasajeroId);
        setEdit(!edit);
        setEditId(pasajeroId);
        if (dataInput) {
            dispatch(detail(updateData(dataInput, pasajeroId)))
        }

    };
    console.log(editId);


    return (
        <div className={style.homeContainer}>
            <div className={style.navBar}>

            </div>
            <div className={style.contetTitle}>
                <h1 className={style.title}></h1>
            </div>
            {noEncontrado === 'true' ? (<>
                <p>No encontrado</p>
            </>) :

                <div className={style.contentTable}>
                    <div className={style.tableHeader}>
                        <h2>LISTA DE PASAJEROS </h2>
                    </div>
                    <table className={style.userTable}>
                        <thead>
                            <tr className={style.tableHeaderRow}>
                                <th>img</th>
                                <th>Nacionalidad</th>
                                <th>DNI</th>
                                <th>Nombre</th>

                                <th className={style.thMotivo}>{
                                    !ojo ?
                                        <img onClick={handleOjo} width={'30px'} src="https://cdn-icons-png.flaticon.com/512/94/94674.png" alt="oj" /> :

                                        <img onClick={handleOjo} width={'30px'} src="https://cdn-icons-png.flaticon.com/512/15/15031.png" alt="jo" />
                                }Motivo</th>
                                <th>Hora y Fecha</th>

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
                                        <td>{edit && editId === pas?.id ? (
                                            <input
                                                type="text"
                                                name="dni"
                                                value={dataInput.dni || pas?.dni}
                                                onChange={handleData}
                                            />
                                        ) : (
                                            pas?.dni
                                        )}</td>
                                        
                                      <td>
                                          {edit && editId === pas?.id ? (
                                              <input
                                              type="text"
                                              name="name"
                                              value={dataInput.name || pas?.name}
                                              onChange={handleData}
                                              />
                                              ) : (
                                                  pas?.name
                                                  )}
                                                  </td>
                                        {!ojo ? <td> - - </td> : <td> {edit && editId === pas?.id ? (
                                            <input
                                                type="text"
                                                name="motivo"
                                                value={dataInput.motivo || pas?.motivo}
                                                onChange={handleData}
                                            />
                                        ) : (
                                            pas?.motivo
                                        )}</td>}
                                        <td>{fechaFormateada} <br />{horaFormateada}</td>

                                        <td>
                                            {
                                                usuario.nivel == 3 || usuario.id == pas.userId ? (
                                                    <>
                                                        <div className={style.d}>
                                                            <button className={style.viewButtonEliminar} onClick={handleDeletClick}>Eliminar pasajero</button>
                                                        </div>
                                                        <br />
                                                        <div>
                                                            <button className={style.viewButton} onClick={() => { handleEdit(pas.id) }}>{!edit ? 'Editar': 'Guardar'}   </button>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div></div>
                                                )
                                            }
                                            <br />
                                         
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