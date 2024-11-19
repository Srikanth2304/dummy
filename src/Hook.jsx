import { useEffect, useState } from "react";
import './Hook.css';
function Hook(){
    const [count,setCount] = useState(0);
    useEffect(() => {
        // document.title = `count: ${count }`;
        console.log("useEffet Triggered");
    },[count])

    const Increment = () =>{
        setCount(count + 1);
        // document.title = `count: ${count + 1}`;
    };
    return(
        <div>
            <h1 className="Heading">useEffective Hook</h1>
            <button onClick={Increment}>Increment</button>
        </div>
    );
}
export default Hook