import axios from "axios";
import "./Content.css";
import { useEffect,useState } from "react";
const Lipsticks=()=>{
    const [lips,setlips]=useState([]);
    const getlips=async ()=>{
        const res=await axios.get("http://localhost:1000/lipsticks");
        console.log(res.data);
        setlips(res.data);
    }
    useEffect(()=>{
        getlips();
    },[])
    return(
        <>
        <div className="content">
        {
            
            lips.map((element,index)=>{
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
export default Lipsticks;