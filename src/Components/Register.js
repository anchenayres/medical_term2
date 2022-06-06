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
    <div className="behind2">
    
    <div className="reg-box">
    <form>   
    <h5>Sign In</h5>
        <input className="first_last"  type="text" placeholder="Name and Surname" onChange={handleChange} />
        <input className="gender"  type="text" placeholder="Gender" onChange={handleChange} />
        <input className="email"  type="text" placeholder="Email"  onChange={handleChange} />
        <input className="contact" type="text" placeholder="Contact" onChange={handleChange} />
        <input className="password"  type="text" placeholder="Password" onChange={handleChange} />
        <input className="conPass"  type="password" placeholder="Confirm Password" />
        <button className="button2" onClick={handleSubmit} >Sign Up</button>
        </form>
        <div className="login-link1">Already have an account?<a href="/">Login</a></div>
        </div>
    </div>
    </>
    )


   
    






}

export default Register;