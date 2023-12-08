import { useState } from "react"
import { useDispatch,  } from "react-redux";
import { close, findName } from "../../redux/actions";
import style from './style.module.css'
import { useEffect } from "react";



const Searchbar = () => {

    const dispatch = useDispatch();
    const [pass, setPass] = useState("");

    const handleChange = (event) => {
        const name = event.target.value
        setPass(name)
        if (name) {
            dispatch(findName(name))
        }
    }
useEffect(()=>{
    
    if (pass === "") {
        dispatch(close())
    }
    
}, [pass])



    return (
        <div >
            <div className={style.d}>
                <span  >🔎Search:</span>
                <input onChange={handleChange} type='search' />
            </div>
        </div>
    )
}

export default Searchbar;