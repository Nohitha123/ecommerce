import axios from "axios";
import React, { useRef,useState } from "react";
import {useNavigate} from "React-router-dom";
const Login=()=>{
    const email=useRef(null);
    const password=useRef(null);
    const navigate=useNavigate();
    const handlelogin=()=>{
        email.current.value=="nohithakunduru13@gmail.com" && password.current.value=="nohithareddy" ? navigate("/dashboard") :navigate("/error");
    }
    return(
        <>
        <input type="text" ref={email} placeholder="enter email"></input>
        <br></br>
        <input type="text" ref={password} placeholder="enter password"></input>
        <br></br>
        <button onClick={handlelogin}>login</button>
        </>
    )
}
export default Login;