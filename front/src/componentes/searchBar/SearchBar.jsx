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
    <div className={style.container}>
      <div className={style.searchBox}>
        <span className={style.searchIcon}></span>
        <input
          className={style.inputSearch}
          onChange={handleChange}
          type="search"
          placeholder="🔎Ingresa el nombre o dni/pasaporte del pasajero.."
        />
      </div>
    </div>
  );
};

export default Searchbar;