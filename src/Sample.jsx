import { useState } from "react";
import './Sample.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,TextField } from "@mui/material";
function Sample(){
    const [count, setCount] = useState(0);
    const [step , setStep] = useState(1);
    function Increment(){
        setCount(count+step);
    }
    function Decrement(){
        setCount(count-step);
    }
    
    function upDate(){
        // setCount(count+1);
        // setCount(count+1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }
    // setCount(45);
    return(
        <div className="box">
            <h3>count:{count}</h3>
            <div className="Inline">
                
                <TextField id="outlined-basic" 
                    label="Number" 
                    type="Number"
                    variant="outlined"  
                    onChange={(e) => setStep(parseInt(e.target.value))}
                    value={step} 
                    className="text"/>
                <div className="button-container">
                <Button className="button"  variant="contained" onClick={() => Increment()}>Increment</Button>
                <Button className="button" variant="contained" onClick={() =>Decrement()}>Decrement</Button>
                <Button className="button" variant="contained" onClick={() =>upDate()}>+2</Button>
            </div>
        </div>
        </div>
    );
}
export default Sample;