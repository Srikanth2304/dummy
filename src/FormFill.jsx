import { useState } from "react"
import './FromFill.css'
function FormFill(){
    const [formData,setformData] = useState({
        text:'',
        checkbox:false,
        radio:'',
        select:''
    });
    const handlechange = (e) =>{
        const {name,value,type,checked} = e.target;
        setformData({
            ...formData,
            [name]:type === 'checkbox' ? checked :value
        });
    };
    return(
        <div className="form-container">
            <h1>Form Example</h1>
            <form >
                <div className="form-field">
                    {/* textBox */}
                    <label>Text:</label>
                    <input type="text"
                        name="text"
                        value={formData.text}
                        onChange={handlechange}
                    ></input>
                </div>
                {/* checkBox */}
                <div className="form-field">
                   <label>
                    <input type="checkbox"
                        name="checkbox"
                        checked={formData.checkbox}
                        onChange={handlechange}
                    />
                    checkBox
                   </label>
                </div>
                {/* radio buttons */}
                <div className="form-field">
                    <label>Radio:</label>
                    <label >
                        <input type="radio"
                        name="radio"
                        value='option1'
                        checked={formData.radio === 'option1'}
                        onChange={handlechange}
                    ></input>
                    option1
                    </label>
                    <label >
                        <input type="radio"
                        name="radio"
                        value='option2'
                        checked={formData.radio === 'option2'}
                        onChange={handlechange}
                    ></input>
                    option2
                    </label>
                </div>
                {/* dropdown */}
                <div className="form-field">
                   <label>select:</label>
                    <select name="select" 
                        value={formData.select}
                        onChange={handlechange}
                    >
                        <option value="">---Select option---</option>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                    </select>
                </div>
            </form>
            <div className="formdata">
                <h3>Form Data</h3>
                <p><strong>Text:</strong>{formData.text || 'N/A'}</p>
                <p><strong>Checkbox:</strong>{formData.checkbox?'Checked':'UnChecked'}</p>
                <p><strong>Radio:</strong>{formData.radio || 'N/A'}</p>
                <p><strong>Select:</strong>{formData.select}</p>
            </div>
        </div>
    );
}
export default FormFill