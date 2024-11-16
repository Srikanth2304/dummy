import React from 'react';
import { useState } from 'react';
import './Count.css';
import { Button ,TextField } from "@mui/material";
function Count(){
    const [counters,setCounters] = useState([{id : 1 , value : 0}]);
    const [delCount,setDelcount] = useState(0);
    const addCounter = () =>{
        setCounters([...counters,{id:counters.length + 1 + delCount , value : 0}]);
    }
    const Increment = (id) => {
        setCounters(counters.map(counter => 
            (id === counter.id)?{...counter,value : counter.value + 1} : counter
        ));
    }
    const Decrement = (id) =>{
        setCounters(counters.map(counter => (
            (id === counter.id)?{...counter,value : counter.value - 1} : counter
        )));
    }
    const delete_ele =  (id) =>{
        setCounters(counters.filter(counter => counter.id !== id));
        setDelcount(delCount + 1);
    }
    return(
        <div className="container">
            <button onClick={addCounter} className='addCounter_button'>addCounter</button>
            <div className="counter-list">
                <ul>
                    {counters.map((counter) => (
                        <li key={counter.id} className="counter-item" >
                        counter {counter.id}: {counter.value}
                        <Button variant="contained" onClick={
                            () => Increment(counter.id)
                        }>Increment</Button>
                        <Button variant="contained" onClick={
                            () => Decrement(counter.id)
                        }>Decrement</Button>
                        <Button variant="contained" onClick={
                            () => delete_ele(counter.id)
                        }>Delete</Button>
                    </li>
                    ))}
                </ul>
            </div>
            
            
        </div>
    );
}
export default Count;