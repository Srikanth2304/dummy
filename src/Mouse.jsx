import { useState , useEffect } from "react";
import './Mouse.css';
function Mouse(){
    const [mousePoistion , setMousePoistion] = useState({x : 0 , y : 0});
    useEffect (() => {
        const handleMouseMove = (event) =>{
            setMousePoistion({ x : event.clientX , y : event.clientY});
        };
        window.addEventListener('mousemove',handleMouseMove);
        console.log("listener Added");
        return () => {
            window.removeEventListener('mousemove',handleMouseMove);
            console.log("listener Removed");
        }
    },[]);
    return(
        <div>
            <h1 >Mouse Pointer</h1>
            <p> X:{mousePoistion.x} Y: {mousePoistion.y}</p>
        </div>
    );
}
export default Mouse