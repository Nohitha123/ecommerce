import axios from "axios";
import { useState,useEffect } from "react";
import "./Content.css";
const Perfumes=()=>{
    const [perf,setperf]=useState([]);
    const getper=async ()=>{
        const res=await axios.get("http://localhost:1000/perfumes");
        setperf(res.data)
    }
    useEffect(()=>{
        getper();
    },[])
    return(
        <>
                <div className="content">
        {
            
            perf.map((element,index)=>{
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
export default Perfumes;