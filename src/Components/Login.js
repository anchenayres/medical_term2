import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const username = (e) => {
        const value = e.target.value;
        setInputs({...inputs, username: value});
        //here you will validate not empty
    }

    const passwordVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, password: value});
        //here you will validate not empty
        //CHECK CAPS LOCK IS ON! extra marks
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);                        //DELETE THIS IN FINAL PROJECT!!!!!!!!!!!!!!!!!!!!!!!!!!!

        axios.post('http://localhost:8888/api/addPost.php', inputs)
        . then(function(response) {
            console.log(response);

            if(response.data === true){
                sessionStorage.setItem('activeUser', inputs.username);
                navigate("/doctors");
            }else {
                console.log("Not Working!");
            }

        });
    }

    return (
    <>
    <div className="behind">
        <ul>
            <li><a href="/Appointments">Appointments</a></li>
            <li><a href="/Patients">Patients</a></li>
            <li><a href="/Doctors">Doctors</a></li>
            <li><a href="/Reception">Reception</a></li>
        </ul>
        
   
    </div>
    <div className="login-heading">
    <p3>Sign In</p3>
        <input name="box1" type="username" placeholder="Username" onChange={usernameVal} />
        <input name="box2" type="password" placeholder="Password" onChange={passwordVal} />
        <button type="button1" onClick={handleSubmit} >Sign Up</button>
        <div className="login-link">Register for an account<a href="/Register">Sign Up</a></div>
    </div>
        </>
    )

    






};

export default Login;