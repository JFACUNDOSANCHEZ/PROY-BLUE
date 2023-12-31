import Card from "../card/Card"
import style from './style.module.css'
import hm from '../../../public/hm.svg'
import ne from '../../../public/ne.svg'
import {  useSelector } from "react-redux/es/hooks/useSelector"
import { useEffect } from "react"

const Cards = ({ passegers, usuario }) => {
    
    
    
    const noEncontrado = useSelector((state) => state.noEncontrado)
    useEffect(()=>{
        
        
    }, [noEncontrado])


    
    if(noEncontrado){
        return(
            <div>

<h2 
className={style.h}
>Pasajero No Encontrado</h2>
<br />
<br />
<br />
<img src={ne} alt='coso' width='400px' />

        </div>
    )    
    
}else{
    
    
    if (passegers.length == 0) {
        return(
            <div className={style.b}>
                <br />
                <br />
                <br />
                  
                        <h1>
            <span className={`${style.letter1}`}>B</span>
            <span className={`${style.letter2}`}>L</span>
            <span className={`${style.letter3}`}>U</span>
          </h1>
                <h2 className={style.h}>Ingresa el nombre o dni/pasaporte del pasajero..</h2>
                <img src={hm} alt="lg" width='400px' />
            </div>
        )
    }
    return (
        
        <div>

            {passegers.map((pas) => {
                return (
                    <Card
                    key={pas.id}
                    id={pas.id}
                    dni={pas.dni}
                    name={pas.name}
                    motivo={pas.motivo}
                    />
                    )
                    
                    
                })}
        </div>

)

}
}


export default Cards