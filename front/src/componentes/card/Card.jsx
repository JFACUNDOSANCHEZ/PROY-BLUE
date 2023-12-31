import style from './style.module.css'
import { Link } from 'react-router-dom'
import { delet } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Modal from '../modal/Modal'
import Detail from '../detail/Detail'


const Card = (pas) => {

   

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
    
    const closeModal = () => {
      setShowModal(false);
   
    };
    
    console.log(pas);
    return (

        <div className={style.divi}>
            <div className={style.div}>
                <div>

                    <img src="https://static.vecteezy.com/system/resources/previews/007/033/146/non_2x/profile-icon-login-head-icon-vector.jpg" alt="us" className={style.img} width='75px' />
                </div>
                <div className={style.coso}>


                <div className={style.p} >
                <h2 className={style.h2}>Nombre: {pas.name}</h2>
                </div>
                
                <div className={style.b}>

                <h2 className={style.h2}> DNI/PASAPORTE: {pas.dni}</h2>
                </div>

                </div>
                <div>
                        {/* Tu contenido existente */}
                        <button onClick={openModal} className={style.ver}>Ver mas</button>
                  
                        {/* Renderiza el modal si showModal es verdadero */}
                        {showModal && (
                          <Modal closeModal={closeModal}>
                            {/* Contenido del modal */}
                <Detail id= {pas?.id}></Detail>
                            {/* ... Otros elementos dentro del modal */}
                          </Modal>
                        )}
                      </div>
            </div>

        </div>
    )


}


export default Card