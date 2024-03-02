import { useState, useEffect } from "react";
import style from './style.module.css'


const Paginacion = ({ pagina, setPagina, maximo }
) => {
    const [input, setInput] = useState(1);
    const max = Math.floor(maximo)
    useEffect(() => {
        if (parseInt(input) > max) {
            setInput(1)
            setPagina(1)
        }
    }, [input, max])

    const nextPage = () => {
        setInput(parseInt(input) + 1)
        setPagina(parseInt(pagina) + 1)
    }
    const previewPage = () => {
        const newInput = parseInt(input) - 1;
        if (newInput >= 1) {
          setInput(newInput);
          setPagina(parseInt(pagina) - 1);
        }
      };
    
    const onchange = (event) => {
        const inpt = event.target.value
        setInput(inpt)
        if (parseInt(inpt) < 1 ||
            parseInt(inpt) > max ||
            isNaN(parseInt(inpt))) {
            setPagina(1);
            setInput(1)
        } else setPagina(parseInt(inpt))
    }

    return (
        <div className={style.paginationContainer}>
        <div className={style.paginationControls}>
          <button className={style.leftButton} onClick={previewPage}>◀</button>
         <input
            onChange={onchange}
            className={style.input}
            name='page'
            value={input}
          />
          <span>De {max}</span>
          <button className={style.rightButton} onClick={nextPage}>▶</button>
        </div>
      </div>
    )
}

export default Paginacion