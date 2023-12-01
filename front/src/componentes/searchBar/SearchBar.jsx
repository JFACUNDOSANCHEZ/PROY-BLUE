import { useState } from "react"
import { useDispatch } from "react-redux";
import { findName } from "../../redux/actions";



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




    return (
        <div >
            <div >
                <span  >🔎Search DNI:</span>
                <input onChange={handleChange} type='search' />
            </div>
        </div>
    )
}

export default Searchbar;