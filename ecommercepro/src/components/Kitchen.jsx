import axios from "axios";
import "./Content.css";
import { useEffect,useState } from "react";
const Kitchen=()=>{
    const [kit,setkit]=useState([]);
    const getkit=async ()=>{
        const res=await axios.get("http://localhost:1000/kitchen");
        setkit(res.data);
    }
    useEffect(()=>{
        getkit();
    },[])
    return(
        <>
        

                <div className="content">
        {
            
            kit.map((element,index)=>{
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
export default Kitchen;