import { useEffect,useState } from "react";
import Mouse from "./Mouse";
function Parentcomponent(){
    const [toggle,setToogle] = useState(true);
    const tooglecomponent = () => {
        setToogle((prev)  => !prev);
    }
    return(
        <div>
            <button onClick={tooglecomponent}>
                {toggle ? "mounted" : "unmounted"}
            </button>
            {toggle && <Mouse/>}
        </div>
    );
}
export default Parentcomponent