import Card from "../card/Card"
import style from './style.module.css'
import hm from '../../../public/hm.svg'
import ne from '../../../public/ne.svg'
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useEffect, useState } from "react"
import SearchBar from "../searchBar/SearchBar"
import { useDispatch } from "react-redux"
import { detail, updateData, deleteData } from "../../redux/actions"
import Paginacion from "../paginacion/Paginacion"
import { Link } from "react-router-dom"

const Cards = ({ passegers, usuario }) => {

    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(3)
   
    const maximo = passegers.length / porPagina
    console.log(passegers);

    const noEncontrado = useSelector((state) => state.noEncontrado)


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

    const handleDeletClick  = async (id) => {

        dispatch(deleteData(id));
    
    }
    const [edit, setEdit] = useState(null)
    const [editId, setEditId] = useState('')

    const handleEdit = (pasajero) => {
        console.log(edit);
        console.log(pasajero);
        setEdit(!edit);

        setEditId(edit ? null : pasajero.id);
        setDataInput({...pasajero})
            dispatch(updateData(dataInput, pasajero.id))
            setDataInput({});

    };
    console.log(editId);
const [zoom, setZoom] = useState(false)
    const handleZoom =(img)=>{
if (img) {
    setZoom(img)
}   
 
    }

const closeZoom =()=>{
    
        setZoom(null)
    
}

    return (
        <div className={style.homeContainer}>
        
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
                    <div className={style.pag}>
             <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
             </div>
                    <table className={style.userTable}>
                        <thead>
                            <tr className={style.tableHeaderRow}>
                                <th></th>
                                <th>Nacionalidad</th>
                                <th className={style.Dnitd}>DNI / PASAPORTE</th>
                                <th>Nombre Y Apellido</th>


                                <th className={style.thMotivo}>{
                                    !ojo ?
                                        <img onClick={handleOjo} width={'30px'} src="https://cdn-icons-png.flaticon.com/512/94/94674.png" alt="oj" /> :

                                        <img onClick={handleOjo} width={'30px'} src="https://cdn-icons-png.flaticon.com/512/15/15031.png" alt="jo" />
                                }Motivo</th>
                                <th>Hora y Fecha</th>
<th></th>
                                <th>{/* Espacio para los botones*/}</th>
                            </tr>
                        </thead>
                        <tbody>  {noEncontrado ? (
                            <h2>No encontrado</h2>
                        ) : (
                            passegers?.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map((pas) => {
                                const fecha = new Date(pas.createdAt);
                                const fechaFormateada = fecha.toLocaleDateString();
                                const horaFormateada = fecha.toLocaleTimeString();

                           
                                return (
                           
                           
                           <tr key={pas?.id}>
                                        <td>
                                           
                                            <img src={pas.img} alt="z1" onClick={()=>{handleZoom(pas.img)}} className={style.img} />
                                        
                                        </td>
                                     
                                        <td>{pas?.nacionalidad}</td>
                                        <td>{edit && editId === pas?.id ? (
                                            <input
                                                type="text"
                                                name="dni"
                                                value={dataInput.dni}
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
                                              value={dataInput.name }
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
                                                value={dataInput.motivo }
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
                                                            <button className={style.viewButton} onClick={()=>{handleDeletClick(pas.id)}}>Eliminar pasajero</button>
                                                        </div>
                                                        <br />
                                                        <div>
                                                            <button className={style.viewButton} onClick={() => { handleEdit(pas) }}>{!edit ? 'Editar': 'Guardar'}   </button>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div></div>
                                                )
                                            }
                                            <br />
                                         
                                        </td>
                                        <td>
                                            <Link to={`/detail/${pas.id}`} >
                                           <button className={style.viewButton}>
                                             DETALLE
                                            </button>
                                            </Link>
                                        </td>
                                    </tr>
                                );

                            })
                        )}

                        </tbody>
                    </table>
                </div>
            }
               {zoom && 
                                      <div className={style.overlay} >

                                        <img onClick={closeZoom} className={style.imagenEnGrandeContainer} width={'50%'} src={zoom} alt={zoom} />
                                      </div>  
                                    
                                    }
        </div>
    );


}


export default Cards