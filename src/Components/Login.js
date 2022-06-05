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

    const usernameVal = (e) => {
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

        axios.post('http://localhost:8888/api/userLogin.php', inputs)
        .then(function(response) {
            console.log(response);

            if(response.data === true){
                sessionStorage.setItem('activeUser', inputs.username);
                navigate("patients");
            }else {
                console.log("Not Working!");
            }

        });
    }

    return (
    <>        
   
    <div className="login-heading">
        <input name="box1" type="username" placeholder="Username" onChange={usernameVal} />
        <input name="box2" type="password" placeholder="Password" onChange={passwordVal} />
        <button type="button1" onClick={handleSubmit} >Sign In</button>
        <div className="login-link">Register for an account<a href="/Register">Sign Up</a></div>
    </div>
        </>
    )

    






};

export default Login;