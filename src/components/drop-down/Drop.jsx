import { useEffect, useState } from "react"
import "./drop.css"
import axios from "axios";

function Drop(){
    const [selectOption,setSelectOption]=useState('');
    const [data,setData]=useState([]);

    const handleChange=(event)=>{
        setSelectOption(event.target.value);
    };



    const encocdpass=(username,password)=>{
        return btoa(`${username}:${password}`);
    }

    useEffect(()=>{
        const username="MOHIT";
        const password="MOHIT";

        const endod=encocdpass(username,password);

        axios.get("http://localhost:8080/cinema/getCity",{
            headers:{
                'Authorization': `Basic ${endod}`
            }
        })
        .then((res)=>{
            console.log(res.data);
            setData(res.data);

        })


    },[])


    
    

    

    return(
        <>
        <div className="drop">
        
        <select value={selectOption} onChange={handleChange}>
        <option value="">Select City</option>
        
        {
            data.map((d,ind )=>{
                return(
                    <option key={ind}>{d}</option>
                );
            })

        }

        </select>
        </div>

        </>
    );

}

export default Drop;