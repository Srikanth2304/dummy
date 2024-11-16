import { useState } from "react";
import './ColourPicker.css';
function ColourPicker(){
    const[background , setBackground] = useState('#ffffff');
    const colours = ['#03ff35', '#ff5733', '#335bff', '#ff33d4'];
    const handleBackground = (colour) =>{
        setBackground(colour);
    }
    return(
        <div className="app" style={{backgroundColor:background}}>
            <h1>Colour Palette</h1>
            <div className="colour-palette">
                {colours.map((colour,index) => (
                    <div
                        key={index}
                        className="colour-box"
                        style={{backgroundColor : colour}}
                        onClick={() =>{handleBackground(colour)}}
                    >
                    </div>
                ))}
            </div>
            <div className="custom">
                <input type="color"
                value={background}
                onChange={(e) => handleBackground(e.target.value)} />
            </div>
        </div>
    );
}
export default ColourPicker