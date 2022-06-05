import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Register = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputs);

        axios.post('https://localhost:8888/api/addUser', inputs)
        .then(function(response){
        console.log(response);
        });
    }
    


    

    

    return (
    <>
    <div className="behind">
    
    
    <form>   
        <input name="first"  type="text" placeholder="Name" onChange={handleChange} />
        
        <input name="last"  type="text" placeholder="Surname" onChange={handleChange} />
      
        
        <input name="email"  type="text" placeholder="Email" onChange={handleChange} />
        
        <input name="username"  type="text" placeholder="Username"  onChange={handleChange} />
       
        <input name="contact" type="text" placeholder="Contact" onChange={handleChange} />
       
        <input name="password"  type="text" placeholder="Password" onChange={handleChange} />
       
        <input name="conPass"  type="password" placeholder="Confirm Password" />
        <button type="submit" onClick={handleSubmit} >Sign Up</button>
        </form>

        <div className="login-link">Already have an account?<a href="/Login">Login</a></div>
        </div>
    </>
    )


    






}

export default Register;