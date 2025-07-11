import axios from "axios";
import { useState,useEffect } from "react";
import "./Content.css";
const Oils=()=>{
    const [oil,setoil]=useState([]);
    const getoil=async ()=>{
        const res=await axios.get("http://localhost:1000/oils");
        setoil(res.data);
    }
    useEffect(()=>{
        getoil();
    },[])
    return(
        <>
        <div className="content">
        {
            
            oil.map((element,index)=>{
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
export default Oils;