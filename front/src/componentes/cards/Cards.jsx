import Card from "../card/Card"
import style from './style.module.css'

const Cards = ({ passegers }) => {


    if (passegers.length == 0) {
        return(
            <div>
                <h2 className={style.h}>Ingresa el nombre o dni/pasaporte del pasajero..</h2>
                <img src="https://img.freepik.com/vector-premium/ilustracion-estrategia-marketing-digital_86047-178.jpg" alt="lg" width='500px' />
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


export default Cards