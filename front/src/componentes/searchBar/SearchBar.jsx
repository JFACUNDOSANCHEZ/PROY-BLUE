import { useState } from "react"
import { useDispatch,  } from "react-redux";
import { allPasseger, close, findName } from "../../redux/actions";
import style from './style.module.css'
import { useEffect } from "react";



const Searchbar = () => {

    const dispatch = useDispatch();
    const [pass, setPass] = useState("");

    const handleChange = (event) => {
      const name = event.target.value;
      setPass(name);
  
      if (name.trim() === "") {
    
        dispatch(allPasseger());
      } else {

        dispatch(findName(name));
      }
    };
  







return (
    <div className={style.container}>
      <div className={style.searchBox}>
        <span className={style.searchIcon}></span>
        <input
          className={style.inputSearch}
          onChange={handleChange}
          type="search"
          placeholder="Busca por el nombre o dni/pasaporte.."
        />
      </div>
    </div>
  );
};

export default Searchbar;