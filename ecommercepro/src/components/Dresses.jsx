import axios from "axios";
import "./Content.css";
import { useEffect,useState } from "react";
const Dresses=()=>{
    const [dre,setdres]=useState([]);
    const getdres=async ()=>{
        const res=await axios.get("http://localhost:1000/dresses");
        setdres(res.data);
    }
    useEffect(()=>{
        getdres();
    },[])
    return(
        <>
                <div className="content">
        {
            
            dre.map((element,index)=>{
                return(
                   <div className="lips" key={index}>
                    <img src={element.image} alt={element.name} />
                    <h1>{element.name}</h1>
                    <h1>{element.price}</h1>
                   </div>
                )
            })
        }
        </div>
        </>
    )
}
export default Dresses;