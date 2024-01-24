import Card from "../card/Card"
import style from './style.module.css'
import hm from '../../../public/hm.svg'
import ne from '../../../public/ne.svg'
import {  useSelector } from "react-redux/es/hooks/useSelector"
import { useEffect } from "react"
import SearchBar from "../searchBar/SearchBar"
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
     
           
          </h1>
               
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