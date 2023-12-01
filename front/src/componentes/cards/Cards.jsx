import Card from "../card/Card"


const Cards = ({ passegers }) => {



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