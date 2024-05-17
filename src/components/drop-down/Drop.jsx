import { useEffect, useState } from "react"
import "./drop.css"


function Drop(){
    const [selectOption,setSelectOption]=useState('');

    const handleChange=(event)=>{
        setSelectOption(event.target.value);
    };

    

    return(
        <>
        <div className="drop">
        
        <select value={selectOption} onChange={handleChange}>
        <option value="">Select City</option>
        <option value="option1">option 1</option>
        <option value="option2">option 2</option>
        <option value="option3">option 3</option>

        </select>
        </div>

        </>
    );

}
export default Drop;