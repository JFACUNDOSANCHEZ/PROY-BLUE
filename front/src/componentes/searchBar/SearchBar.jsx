import { useState } from "react"
import { useDispatch,  } from "react-redux";
import { allPasseger, close, findName } from "../../redux/actions";
import style from './style.module.css'
import { useSelector} from "react-redux";


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
          <input
            className={style.inputSearch}
            onChange={handleChange}
            type="search"
            placeholder="Busca en la base dedatos por nombre o dni/pasaporte.."
            />
        </div>
      </div>
    );
};

export default Searchbar;